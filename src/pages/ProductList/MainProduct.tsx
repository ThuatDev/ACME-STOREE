import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import ProductCategory from './components/ProductCategory'
import ProductList from './components/ProductList'
import ProductSort from './components/ProductSort'
import { SearchProvider } from 'src/components/Header/SearchContext'

const MainProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [sortBy, setSortBy] = useState(null) // Thêm state để lưu trữ loại sắp xếp
  const [sortOption, setSortOption] = useState(searchParams.get('sort') || 'default')
  useEffect(() => {
    const updateCategoryInSearchParams = () => {
      if (selectedCategory !== '') {
        setSearchParams({ category: selectedCategory })
      } else {
        const params = new URLSearchParams(searchParams)
        params.delete('category')
        navigate(`?${params.toString()}`)
      }
    }

    updateCategoryInSearchParams()
  }, [selectedCategory, setSearchParams, searchParams, navigate])
  const handleSortChange = (option: string) => {
    setSortOption(option)
  }
  return (
    <SearchProvider>
      <div className='mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white '>
        <ProductCategory setSelectedCategory={setSelectedCategory} />
        {/* Truyền prop sortBy vào ProductList */}
        <ProductList selectedCategory={selectedCategory} sortOption={sortOption} />
        <ProductSort handleSortChange={handleSortChange} />
      </div>
    </SearchProvider>
  )
}

export default MainProduct
