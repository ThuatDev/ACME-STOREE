import { useRoutes } from 'react-router-dom'

import ProductList from './pages/ProductList'
import Home from './pages/Home/Home'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/list-products',
      element: <ProductList />
    },
    {
      path: '/',
      element: <Home />
    }
  ])
  return routeElements
}
