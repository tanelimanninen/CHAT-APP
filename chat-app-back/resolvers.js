const { v1: uuid } = require('uuid');
const { GraphQLError } = require('graphql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Post = require('./models/post');
const User = require('./models/user');
const Comment = require('./models/comment');


const resolvers = {
    Query: {
      // QUERY 1
      allPosts: async () => {
        return Post.find({})
      },
      // QUERY 2
      allUsers: async () =>  {
        return User.find({})
      },
      // QUERY 3
      me: (root, args, context) => {
        return context.currentUser
      },
      // QUERY 4
      singlePost: async (root, args) => {
        try {
          const post = await Post.findById(args.id);

          if (!post) {
            throw new Error("Post not found");
          }

          return post;
        } catch (error) {
          throw new Error(`Failed to fetch the post: ${error.message}`);
        };
      }
    },
    Mutation: {
        // MUTATION 1
      createPost: async (root, args, context) => {
        const currentUser = context.currentUser;

        //IF NO USER LOGGED IN
        if (!currentUser) {
          throw new GraphQLError('not authenticated', {
            extensions: {
              code: 'UNAUTHORIZED',
            }
          })
        };

        // CREATE POST
        const post = new Post({
          user: currentUser._id,
          text: args.text,
          likes: 0,
          dislikes: 0,
          comments: []
        });

        try {
          const savedPost = await post.save();

          return savedPost;
        } catch (error) {
          throw new GraphQLError('Failed to create post', {
            extensions: {
              code: 'INTERNAL_SERVER_ERROR',
              error: error.message
            }
          });
        }
      },
      // MUTATION 2
      createUser: async (root, args) => {
        // HASH THE PASSWORD
        const passwordHash = await bcrypt.hash(args.password, 10);
        
        //CREATE USER
        const user = new User({
          firstname: args.firstname,
          lastname: args.lastname,
          username: args.username,
          passwordHash,
          image: args.image
        });

        // SAVE TO DATABASE
        return user.save()
          .catch(error => {
            throw new GraphQLError('Creating the user failed', {
              extensions: {
                code: 'BAD_USER_INPUT',
                invalidArgs: args.username,
                error
              }
            })
          })
      },
      // MUTATION 3
      login: async (root, args) => {
        // GET USER FROM DATABASE
        const user = await User.findOne({ username: args.username })

        // IF USER DOESN'T EXIST OR PASSWORD IS EMPTY
        if ( !user || !(await bcrypt.compare(args.password, user.passwordHash)) ) {
          throw new GraphQLError('wrong credentials', {
            extensions: {
              code: 'BAD_USER_INPUT'
            }
          })        
        }

        const userForToken = {
          username: user.username,
          id: user._id,
        }
    
        return { value: jwt.sign(userForToken, process.env.JWT_SECRET) }
      },
      // MUTATION 4
      createComment: async (root, args, context) => {
        const currentUser = context.currentUser;
        
        // IF NO USER LOGGED IN
        if (!currentUser) {
          throw new GraphQLError('Not authenticated', {
              extensions: {
                  code: 'UNAUTHORIZED',
              }
          });
        };

         // IF POST ID NOT FOUND
        if (!args.postId) {
          throw new GraphQLError('Post ID is required for creating a comment', {
            extensions: {
              code: 'BAD_REQUEST',
            }
          });
        };


        try {
          // GET POST BY ID
          const post = await Post.findById(args.postId);

          // Check if the post exists
          if (!post) {
            throw new GraphQLError('Post not found', {
              extensions: {
                code: 'NOT_FOUND',
              }
            });
          };
          
            // CREATE COMMENT
            const comment = new Comment({
              user: currentUser._id,
              post: args.postId,
              text: args.text
          });
          // SAVE TO DATABASE
          const savedComment = await comment.save();
          // Add the comment ID to the post's comments array
          post.comments.push(savedComment._id);
          await post.save();

          return savedComment;
        } catch (error) {
            throw new GraphQLError('Failed to create comment', {
                extensions: {
                    code: 'INTERNAL_SERVER_ERROR',
                    error: error.message
                }
            });
        }
      }
    },
    Post: {
      user: async (parent, args, context, info) => {
        try {
            // Fetch the user data referenced by the user field of the post
            const user = await User.findById(parent.user);
            return user;
        } catch (error) {
            // Handle any errors
            throw new GraphQLError('Failed to fetch user data for post', {
                extensions: {
                    code: 'INTERNAL_SERVER_ERROR',
                    error: error.message
                }
            });
        }
      },
      comments: async (parent, args, context, info) => {
        try {
            // Fetch all comments associated with the post
            const comments = await Comment.find({ post: parent._id });
            return comments;
        } catch (error) {
            // Handle any errors
            throw new GraphQLError('Failed to fetch comments data for post', {
                extensions: {
                    code: 'INTERNAL_SERVER_ERROR',
                    error: error.message
                }
            });
        }
      },
    },
    Comment: {
      user: async (parent, args, context, info) => {
        try {
          // Fetch the user data referenced by the user field of the comment
          const user = await User.findById(parent.user);
          return user;
      } catch (error) {
          // Handle any errors
          throw new GraphQLError('Failed to fetch user data for comment', {
              extensions: {
                  code: 'INTERNAL_SERVER_ERROR',
                  error: error.message
              }
          });
      }
    }
  }
};

module.exports = resolvers;