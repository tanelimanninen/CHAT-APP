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

export const GET_ME = gql`
  query {
    me {
        username
        image
        id
    }
  }
`