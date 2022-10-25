import { gql } from "@apollo/client";

export const categoryQuery = gql`
  query getCategories {
    categories {
      data {
        id
        attributes {
          name
          sub_categories {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
