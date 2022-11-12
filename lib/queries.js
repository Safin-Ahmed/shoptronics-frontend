import { gql } from "@apollo/client";

export const brandsQuery = gql`
  query getAllBrands {
    brands {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
  }
`;

export const getAllAttributes = gql`
  query getAttributes {
    attributes {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
  }
`;

export const getAllAttributesTerms = gql`
  query getAttributeTerms {
    attributeterms {
      data {
        id
        attributes {
          name
          slug
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
          { title: { contains: $variationTitle } }
        ]
      }
    ) {
      data {
        id
        attributes {
          title
          imgUrl
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

export const getProductsByCategories = gql`
  query getProductsByCategories($subCategories: [String]) {
    products(filters: { sub_categories: { slug: { in: $subCategories } } }) {
      data {
        id
        attributes {
          title
          slug
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

      meta {
        pagination {
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;

export const generateGetProductsQuery = () => {
  return `
    query getProducts($pageNumber: Int!, $sortOption: [String], $subCategories: [String], $startPrice: Int, $endPrice: Int, $stockStatus: [String], $brands: [String], $attribute: [String], $rating: [Float], $searchTerm: String ) {
      products(
        pagination: { page: $pageNumber, pageSize: 9 }
        sort: $sortOption
        filters: {       
            sub_categories: {slug: {in: $subCategories}}, 
            price: {gte: $startPrice, lte: $endPrice}, 
            stockStatus: {in: $stockStatus}, 
            brand: {slug: {in: $brands}},
            options: {slug: {in: $attribute}},
            averageRating: {in: $rating},
            title: {containsi: $searchTerm}
          }
      ) {
        data {
          id
          attributes {
            title
            slug
            description
            price
            stockStatus
            averageRating
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
        meta {
          pagination {
            page
            pageSize
            pageCount
          }
        }
      }
    }
  `;
};

export const getProductBySlugQuery = gql`
  query getProductBySlug($slug: String!) {
    productBySlug(slug: $slug) {
      data {
        id
        attributes {
          title
          imgUrl
          brand {
            data {
              attributes {
                name
              }
            }
          }
          description
          price
          discountPrice
          averageRating
          reviews {
            data {
              attributes {
                review
                rating
              }
            }
          }
          variations {
            data {
              id
              attributes {
                imgUrl
                price
                discountPrice
              }
            }
          }
          relatedProducts {
            data {
              id
              attributes {
                title
                slug
                description
                price
                stockStatus
                averageRating
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
      }
    }
  }
`;

export const getBestSellingProductsQuery = gql`
  query getBestSellingProducts {
    products(filters: { averageRating: { gte: 4 } }, pagination: { limit: 4 }) {
      data {
        id
        attributes {
          title
          description
          imgUrl
          attributes {
            data {
              id
              attributes {
                name
              }
            }
          }
          options {
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
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
          averageRating
          price
          discountPrice
        }
      }
    }
  }
`;

export const getAllOrdersQuery = gql`
  query getOrders($pageNumber: Int!) {
    orders(pagination: { page: $pageNumber, pageSize: 10 }) {
      data {
        id
        attributes {
          firstName
          lastName
          email
          total
          status
          createdAt
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
`;

export const placeOrderQuery = gql`
  mutation placeOrder($order: OrderData) {
    buildOrder(order: $order) {
      data {
        id
        attributes {
          total
          createdAt
          email
          paymentMethod
          checkout_session
        }
      }
    }
  }
`;

export const getOrderById = gql`
  query GetOrderById($id: ID!) {
    order(id: $id) {
      data {
        id
        attributes {
          createdAt
          total
          email
          paymentMethod
        }
      }
    }
  }
`;

export const confirmStripeSessionQuery = gql`
  query checkSessionId($sessionId: String!) {
    confirmSession(session: $sessionId) {
      data {
        id
        attributes {
          createdAt
          total
          email
          paymentMethod
          status
        }
      }
    }
  }
`;
