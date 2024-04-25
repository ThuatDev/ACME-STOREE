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
  const [sortOption, setSortOption] = useState(searchParams.get('sort') || 'default')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    // Update URL params when category changes
    if (selectedCategory !== '') {
      setSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams)
        params.set('category', selectedCategory)
        return params
      })
    } else {
      setSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams)
        params.delete('category')
        return params
      })
    }
  }, [selectedCategory, setSearchParams])

  const handleSortChange = (option: any) => {
    // Update sort option state
    setSortOption(option)
    // Update URL params
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams)
      params.set('sort', option)
      return params
    })
  }

  return (
    <>
      {/* Wrap Header in SearchProvider */}
      <div className='mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white '>
        <ProductCategory setSelectedCategory={setSelectedCategory} />

        <ProductList selectedCategory={selectedCategory} sortOption={sortOption} />

        <ProductSort handleSortChange={handleSortChange} />
      </div>
    </>
  )
}

export default MainProduct
