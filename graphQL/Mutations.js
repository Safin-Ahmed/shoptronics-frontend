import { gql } from "@apollo/client"


export const LOGIN_MUTATION = gql`
mutation login($email: String!, $password: String!){
  login(input: { identifier: $email, password: $password, provider: "local" }) {
    jwt
    user {
      id
      email
      username
   }
  }
}
`

export const REGISTER_MUTATION = gql`
mutation registration($email: String!, $username: String!, $password: String!){
  register(input: { email: $email, username: $username, password: $password }) {
    jwt
    user {
      email
      username
    }
  }
}
`