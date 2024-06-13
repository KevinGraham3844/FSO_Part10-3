import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
    repositories {
      edges {
        node {
          fullName
          language
          description
          ownerAvatarUrl
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          id
        }
      }
    }
  }
`;

export const ME = gql`
query {
  me {
    id
    username
  }
}
`