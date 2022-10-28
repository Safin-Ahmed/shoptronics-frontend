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
              reviews {
                data {
                  id
                  attributes {
                    rating
                  }
                }
              }
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

export const getTrendingProducts = async () => {
  const { data } = await client.query({
    query: gql`
      query getTrendingProducts {
        products(
          filters: { isTrending: { eq: true } }
          pagination: { limit: 4 }
        ) {
          data {
            id
            attributes {
              title
              imgUrl
              categories {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
              reviews {
                data {
                  id
                  attributes {
                    rating
                  }
                }
              }
              price
              discountPrice
            }
          }
        }
      }
    `,
  });

  return {
    data: data.products,
  };
};

export const getAllCategories = async () => {
  const { data, errors, loading } = await client.query({
    query: gql`
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
    `,
  });

  return data.categories;
};
