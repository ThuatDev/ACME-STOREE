import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate, Outlet } from 'react-router-dom'
import ProductCategory from './components/ProductCategory'
import ProductList from './components/ProductList'
import ProductSort from './components/ProductSort'
import { SearchProvider } from 'src/components/Header/SearchContext'

const MainProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [sortOption, setSortOption] = useState(searchParams.get('sort') || 'default')
  useEffect(() => {
    if (selectedCategory !== '') {
      setSearchParams({ category: selectedCategory })
    } else {
      const params = new URLSearchParams(searchParams)
      params.delete('category')
      navigate(`?${params.toString()}`)
    }
  }, [selectedCategory, setSearchParams, searchParams, navigate])
  const handleSortChange = (option: string) => {
    setSortOption(option)
  }
  return (
    <>
      {/* Bọc Header trong SearchProvider */}
      <div className='mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white '>
        <ProductCategory setSelectedCategory={setSelectedCategory} />
        <ProductList selectedCategory={selectedCategory} sortOption={sortOption} />
        <ProductSort handleSortChange={handleSortChange} />
      </div>
    </>
  )
}

export default MainProduct
