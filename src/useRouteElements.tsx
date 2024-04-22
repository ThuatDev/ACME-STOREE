import React, { Suspense } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './layouts/Mainlayout/MainLayout'
import Home from './pages/Home/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import MainProduct from './pages/ProductList'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'list-products',
          element: <MainProduct />
        },
        {
          path: 'cahuhet',
          element: <ProductList />
        },
        {
          path: 'product/:id',
          element: <ProductDetail />
        }
      ]
    }
  ])

  return routeElements
}
