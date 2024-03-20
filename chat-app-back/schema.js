const typeDefs = `
  type User {
    firstname: String!
    lastname: String!
    username: String!
    image: String
    id: ID!
  }

  type Token {
    value: String!
  }

  type Post {
    user: User!
    text: String!
    likes: Int
    dislikes: Int
    comments: [Comment!]!
    id: ID!
  }
  
  type Comment {
    user: User!
    post: Post!
    text: String!
    id: ID!
  }

  type Query {
    allPosts: [Post!]!
    allUsers: [User!]!
    singlePost(id: ID!): Post
    me: User
  }

  type Mutation {
    createPost(
      text: String!
    ): Post
    createUser(
      firstname: String!
      lastname: String!
      username: String!
      password: String!
      image: String
    ): User
    login(
      username: String!
      password: String!
    ): Token
    createComment(
      postId: ID!
      text: String!
    ): Comment
  }
`

module.exports = typeDefs;