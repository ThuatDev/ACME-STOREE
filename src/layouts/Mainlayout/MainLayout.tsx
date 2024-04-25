import React from 'react'
import { Provider } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import { SearchProvider } from 'src/components/Header/SearchContext'
import Home from 'src/pages/Home/Home'
import { store } from 'src/redux/store'

export default function MainLayout() {
  return (
    <>
      {/* <Provider store={store}> */}
      <SearchProvider>
        <Header />
        <Outlet />
        <Footer />
      </SearchProvider>
      {/* </Provider> */}
    </>
  )
}
