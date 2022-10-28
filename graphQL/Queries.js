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