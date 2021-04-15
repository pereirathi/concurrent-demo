import { Suspense, lazy } from 'react'
import { RelayEnvironmentProvider, loadQuery, usePreloadedQuery } from 'react-relay/hooks'
import Environment from './RelayEnvironment'
import Layout  from './components/atoms/layout/layout'
import { STORE_PRODUCTS, stellaProduct } from './api/store'

const CardProduct = lazy(() => import('./components/atoms/card/card'))

const preloadedQuery = loadQuery(Environment, STORE_PRODUCTS, { filter: stellaProduct })

const ProductSection = () => {
  const data = usePreloadedQuery(STORE_PRODUCTS, preloadedQuery)
  const shelves = data?.loadNewVisitorShowCase?.showCase?.shelves ?? []
  const productItems = shelves.map((item) => item.items)

  return (
    <>
      <CardProduct items={productItems} />
    </>
  )
}

export function App() {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <Layout>
        <Suspense fallback="loading...">
          <ProductSection preloadedQuery={preloadedQuery} />
        </Suspense>
      </Layout>
    </RelayEnvironmentProvider>
  )
}
