const { v1: uuid } = require('uuid');
const { GraphQLError } = require('graphql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Post = require('./models/post');
const User = require('./models/user');

//MOCK DATAA
let posts = [
    {
      id: 'chat1',
      user: 'peksi',
      text: 'Hei kaikille tasapuolisesti.',
      likes: 223,
      dislikes: 13,
    },
    {
        id: 'chat2',
        user: 'kusipaikka',
        text: 'Kävin kaupassa. Ostin kaljaa ja makkaraa. En ostanut salaattia.',
        likes: 7,
        dislikes: 1,
    },
    {
        id: 'chat3',
        user: 'Matrz',
        text: 'Ei mitään tärkeää...',
        likes: 40,
        dislikes: 57,
    },
    {
        id: 'chat4',
        user: 'ZesuZ',
        text: 'Palasin nyt taas, jos ketään ees kiinnostaa. Siitä puheen ollen, ollaan hiljaa',
        likes: 9,
        dislikes: 5,
    },
    {
        id: 'chat5',
        user: 'batman',
        text: 'I am batman',
        likes: 92,
        dislikes: 33,
    },
];


const resolvers = {
    Query: {
      // QUERY 1 (EI TÄLLÄ HETKELLÄ TOIMI KOSKA POSTS EI OLE VIELÄ TIETOKANNASSA)
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
      findPost: (root, args) =>
        posts.find(p => p.username === args.username)
    },
    Mutation: {
        // MUTATION 1
      createPost: async (root, args, context) => {
        let user = await User.findOne({ username: args.user });

        //TÄHÄN TULEE VIELÄ KIRJAUTUNEEN KÄYTTÄJÄN TSEKKAUS
        //const currentUser = context.currentUser

        const post = new Post({
          user: user._id,
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