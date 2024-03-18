import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($firstname: String!, $lastname: String!, $username: String!, $password: String!, $image: String) {
    createUser(firstname: $firstname, lastname: $lastname, username: $username, password: $password, image: $image) {
      firstname
      lastname
      username
      image
    }
  }
`