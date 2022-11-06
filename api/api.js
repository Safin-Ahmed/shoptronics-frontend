import { gql } from "@apollo/client";
import client from "../lib/apolloClient";
import { getProductBySlugQuery } from "../lib/queries";

export const getProductsByPageNumber = async (
  pageNumber,
  sort,
  gqlQuery,
  queryObject
) => {
  console.log(queryObject);
  const { data, errors, loading } = await client.query({
    query: gql`
      ${gqlQuery}
    `,
    variables: {
      pageNumber,
      sortOption: sort,
      startPrice: !isNaN(queryObject.startPrice) ? queryObject.startPrice : 0,
      endPrice: !isNaN(queryObject.endPrice) ? queryObject.endPrice : 1000,
      subCategories: queryObject.subCategories,
      stockStatus: queryObject.stock,
      brands: queryObject.brands,
      attribute:
        queryObject.attributes.length > 0 ? queryObject.attributes : undefined,
      rating: queryObject.rating,
    },
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
              slug
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

export const getProductBySlug = async (slug) => {
  const { data } = await client.query({
    query: gql`
      ${getProductBySlugQuery}
    `,
    variables: {
      slug,
    },
  });

  console.log({ data });

  return data.productBySlug.data;
};
