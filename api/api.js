import { gql } from "@apollo/client";
import client from "../lib/apolloClient";

export const getProductsByPageNumber = async (pageNumber) => {
  const { data, errors, loading } = await client.query({
    query: gql`
      query getProducts($pageNumber: Int!) {
        products(pagination: { page: $pageNumber, pageSize: 9 }) {
          data {
            id
            attributes {
              title
              description
              price
              discountPrice
              imgUrl
              categories {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
            }
          }
          meta {
            pagination {
              page
              pageSize
              pageCount
            }
          }
        }
      }
    `,
    variables: { pageNumber },
  });

  return {
    data: data.products,
    errors,
    loading,
  };
};
