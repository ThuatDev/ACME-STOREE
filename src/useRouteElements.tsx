import { useRoutes } from 'react-router-dom'

import ProductList from './pages/ProductList'
import Home from './pages/Home/Home'
import MainLayout from './layouts/Mainlayout/MainLayout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/list-products',
      element: <ProductList />
    },
    // {
    //   path: '',
    //   element: <Home />

    // },
    {
      path: '/',
      element: <MainLayout />
    }
  ])
  return routeElements
}
