import { gql } from '@apollo/client';

export const ALL_POSTS = gql`
  query {
    allPosts {
      user {
        username
        image
      }
      text
      likes
      dislikes
      id
    }
  }
`

export const GET_USER = gql`
  query {
    me {
        username
        image
        id
    }
  }
`

export const GET_SINGLE_POST = gql`
  query singlePost($id: ID!) {
    singlePost(id: $id) {
      user {
        username
        image
      }
      text
      likes
      dislikes
      id
    }
  }
`