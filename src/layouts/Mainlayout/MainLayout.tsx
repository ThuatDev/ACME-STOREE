import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import Home from 'src/pages/Home/Home'

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
