import { gql } from "@apollo/client";
import client from "../lib/apolloClient";

export const getProductsByPageNumber = async (pageNumber, sort) => {
  console.log({ sort });
  const { data, errors, loading } = await client.query({
    query: gql`
      query getProducts($pageNumber: Int!, $sortOption: [String]) {
        products(
          pagination: { page: $pageNumber, pageSize: 9 }
          sort: $sortOption
        ) {
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
    variables: { pageNumber, sortOption: sort },
  });

  return {
    data: data.products,
    errors,
    loading,
  };
};
