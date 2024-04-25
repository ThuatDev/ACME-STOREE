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
  const [loading, setLoading] = useState(true) // State để theo dõi trạng thái loading

  useEffect(() => {
    // Giả sử gọi API ở đây
    // setTimeout(() => {
    //   setLoading(false); // Đánh dấu API đã được gọi và dữ liệu đã được load
    // }, 2000); // Giả định thời gian API call là 2 giây

    // Tạm thời sử dụng setTimeout để mô phỏng việc gọi API
    setTimeout(() => {
      setLoading(false) // Đánh dấu API đã được gọi và dữ liệu đã được load
    }, 2000) // Giả định thời gian API call là 2 giây
  }, []) // Chỉ gọi useEffect này một lần sau khi component được render

  useEffect(() => {
    if (selectedCategory !== '') {
      setSearchParams({ category: selectedCategory })
    } else {
      const params = new URLSearchParams(searchParams)
      params.delete('category')
      navigate(`?${params.toString()}`)
    }
  }, [selectedCategory, setSearchParams, searchParams, navigate])

  const handleSortChange = (option: any) => {
    setSortOption(option)
  }

  return (
    <>
      {/* Bọc Header trong SearchProvider */}
      <div className='mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white '>
        <ProductCategory setSelectedCategory={setSelectedCategory} />
        {/* Hiển thị HTML loading khi loading là true */}
        {loading ? (
          <div className='loader absolute top-1/2 left-1/2 w-16 h-16 rounded-full perspective-800'>
            <div className='inner one absolute w-full h-full rounded-full animate-rotate-one border-b-3 border-pink-500'></div>
            <div className='inner two absolute w-full h-full rounded-full animate-rotate-two border-r-3 border-yellow-500'></div>
            <div className='inner three absolute w-full h-full rounded-full animate-rotate-three border-t-3 border-blue-400'></div>
          </div>
        ) : (
          <ProductList selectedCategory={selectedCategory} sortOption={sortOption} />
        )}
        <ProductSort handleSortChange={handleSortChange} />
      </div>
    </>
  )
}

export default MainProduct
