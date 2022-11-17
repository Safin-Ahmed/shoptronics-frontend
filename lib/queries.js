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
          slug
          sub_categories {
            data {
              id
              attributes {
                Name
                slug
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
  query findVariant($productId: ID!, $variationTitle: String) {
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
          slug
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

export const getAllReviewsByProductIdQuery = gql`
  query getAllReviewsByProductId($id: ID, $page: Int) {
    reviews(
      filters: { product: { id: { eq: $id } } }
      pagination: { page: $page, pageSize: 5 }
    ) {
      data {
        id
        attributes {
          user {
            data {
              attributes {
                username
              }
            }
          }
          review
          rating
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

export const getProductByIdQuery = gql`
  query getProductById($id: ID!) {
    product(id: $id) {
      data {
        attributes {
          title
        }
      }
    }
  }
`;

export const getOrdersByUserAndProductQuery = gql`
  query getOrdersByUser($email: String!, $id: ID!) {
    orders(
      filters: {
        customer: { email: { eq: $email } }
        order_details: { product: { id: { eq: $id } } }
      }
    ) {
      data {
        id
        attributes {
          firstName
          lastName
          phone
          paymentMethod
          customer {
            data {
              id
              attributes {
                email
              }
            }
          }
          order_details {
            data {
              id
              attributes {
                product {
                  data {
                    id
                    attributes {
                      title
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

export const addReviewQuery = gql`
  mutation addReview($data: ReviewInput!) {
    createReview(data: $data) {
      data {
        id
      }
    }
  }
`;

export const getWishlists = gql`
  query getWishlists($id: ID!) {
    wishlists(filters: { users_permissions_user: { id: { eq: $id } } }) {
      data {
        id
        attributes {
          product {
            data {
              id
              attributes {
                title
                price
                stock
              }
            }
          }
        }
      }
    }
  }
`;

export const getWishlistByPagination = gql`
  query getWishlistByPagination($id: ID!, $pageNumber: Int!) {
    wishlists(
      filters: { users_permissions_user: { id: { eq: $id } } }
      pagination: { page: $pageNumber, pageSize: 6 }
    ) {
      data {
        id
        attributes {
          users_permissions_user {
            data {
              id
            }
          }
          product {
            data {
              id
              attributes {
                title
                imgUrl
                variations {
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
                price
                stockStatus
                discountPrice
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

export const addToWishlist = gql`
  mutation addToWishlist($data: WishlistInput!) {
    createWishlist(data: $data) {
      data {
        id
      }
    }
  }
`;

export const deleteWishlist = gql`
  mutation deleteFromWishlist($id: ID!) {
    deleteWishlist(id: $id) {
      data {
        id
      }
    }
  }
`;

export const getWishlist = gql`
  query getWishlist($id: ID!, $productId: ID!) {
    wishlists(
      filters: {
        users_permissions_user: { id: { eq: $id } }
        product: { id: { eq: $productId } }
      }
    ) {
      data {
        id
      }
    }
  }
`;

export const deleteFromWishlist = gql`
  mutation deleteFromWishlist($productId: ID!) {
    deleteWishlistByProductId(productId: $productId) {
      data {
        id
      }
    }
  }
`;
