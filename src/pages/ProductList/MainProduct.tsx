import React, { useState, useEffect } from 'react'
import ProductCategory from './ProductCategory'
import { useSearchParams, useNavigate, Outlet } from 'react-router-dom'
import ProductList from './ProductList'
import ProductSort from './ProductSort'

const MainProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')

  useEffect(() => {
    // Cập nhật searchParams khi có thay đổi
    setSearchParams({ category: selectedCategory })
  }, [selectedCategory, setSearchParams])
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white '>
      <ProductCategory setSelectedCategory={setSelectedCategory} />
      <ProductList selectedCategory={selectedCategory} />
      <Outlet></Outlet>
      <ProductSort></ProductSort>
    </div>
  )
}

export default MainProduct
