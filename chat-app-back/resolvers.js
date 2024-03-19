const { v1: uuid } = require('uuid');
const { GraphQLError } = require('graphql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Post = require('./models/post');
const User = require('./models/user');


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


        const post = new Post({
          user: currentUser._id,
          text: args.text,
          likes: 0,
          dislikes: 0
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

        const user = new User({
          firstname: args.firstname,
          lastname: args.lastname,
          username: args.username,
          passwordHash,
          image: args.image
        });

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
      createComment: (root, args) => {
        const comment = { ...args, id: uuid() }
        return comment
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
    }
};

module.exports = resolvers;