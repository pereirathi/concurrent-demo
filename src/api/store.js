import { graphql } from 'react-relay'

export const stellaProduct = {
  id: '99148850-0ca6-41b8-8822-389bc7d2b992', type: 'BRAND',
}

export const STORE_PRODUCTS = graphql`
  query storeQuery($filter: ShowCaseFilter) {
    loadNewVisitorShowCase(filter: $filter) {
      showCase {
        shelves {
          items {
            id
            images
            displayName
          }
        }
      }
    }
  }
`
