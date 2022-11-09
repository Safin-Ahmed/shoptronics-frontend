import { gql } from "@apollo/client"


export const LOAD_PRODUCTS = gql`
query getProducts{
  products{
    data{
      id
      attributes{
        title
        slug
        price
        discountPrice
        description
      }
    }
  }
}    
`

export const LOAD_ORDERS = gql`
query getOrders {
  orders{
    data {
      id
      attributes{
        firstName
        lastName
        email
        total
        subTotal
        status
        paymentMethod
        createdAt
      }
    }
  }
} 
`