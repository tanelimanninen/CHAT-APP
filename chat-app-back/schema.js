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
    likes: [Like]!
    dislikes: [Dislike]!
    comments: [Comment!]!
    id: ID!
  }
  
  type Comment {
    user: User!
    post: Post!
    text: String!
    id: ID!
  }

  type Like {
    id: ID!
    user: User!
    post: Post!
  }
  
  type Dislike {
    id: ID!
    user: User!
    post: Post!
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
    createLike(
      postId: ID!
    ): Like
    createDislike(
      postId: ID!
    ): Dislike
  }
`

module.exports = typeDefs;