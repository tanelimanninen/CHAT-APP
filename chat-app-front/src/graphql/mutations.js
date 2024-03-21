import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($firstname: String!, $lastname: String!, $username: String!, $password: String!, $image: String) {
    createUser(firstname: $firstname, lastname: $lastname, username: $username, password: $password, image: $image) {
      firstname
      lastname
      username
      image
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($text: String!) {
    createPost(text: $text) {
      text
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $text: String!) {
    createComment(postId: $postId, text: $text) {
      text
      user {
        username
        image
      }
      id
    }
  }
`;

export const CREATE_LIKE = gql`
  mutation createLike($postId: ID!) {
    createLike(postId: $postId) {
      id
    }
  }
`;

export const CREATE_DISLIKE = gql`
  mutation createDislike($postId: ID!) {
    createDislike(postId: $postId) {
      id
    }
  }
`;