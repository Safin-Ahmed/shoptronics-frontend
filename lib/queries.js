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

export const getOptions = gql`
  query getOptions {
    attributeterms {
      data {
        id
        attributes {
          name
          attribute {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export const findVariant = gql`
  query findVariant($productId: ID!, $variationTitle: String!) {
    variations(
      filters: {
        and: [
          { product: { id: { eq: $productId } } }
          { title: { eq: $variationTitle } }
        ]
      }
    ) {
      data {
        id
        attributes {
          price
          discountPrice
        }
      }
    }
  }
`;

export const findAttributesQuery = gql`
  query findProductAttribute($id: ID!) {
    product(id: $id) {
      data {
        attributes {
          attributes {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
