import gql from 'graphql-tag'

export const STORE_PRODUCTS = gql`
  query loadNewVisitorShowCase($filter: ShowCaseFilter) {
    loadNewVisitorShowCase(filter: $filter) {
      messages {
        category
        target
        key
        message
      }
      showCase {
        images
        shelves {
          id
          type
          displayName
          items {
            id
            type
            images
            displayName
            category {
              id
              displayName
            }
            brand {
              id
              displayName
            }
          }
        }
      }
    }
  }
`
