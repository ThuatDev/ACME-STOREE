import { useRoutes } from 'react-router-dom'

import ProductList from './pages/ProductList'
import Home from './pages/Home/Home'
import MainLayout from './layouts/Mainlayout/MainLayout'
import MainProduct from './pages/ProductList/MainProduct'
import Productdetail from './pages/Product/Productdetail'

export default function useRouteElements() {
  const routeElements = useRoutes([
    // {
    //   path: '',
    //   element: <Home />

    // },
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'list-products',

          // nối thêm category http://localhost:3000/list-products?category=jewelery
          element: <MainProduct />
      },
      {
        path:'DetailProduct',
        element:<Productdetail />
      },
      
      ]
    }
  ])
  return routeElements
}
