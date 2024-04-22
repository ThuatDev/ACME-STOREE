import React, { useEffect, useState } from 'react'

import { Link, Outlet, useLocation } from 'react-router-dom'
import ProductItem from './ProductItem'
import { useSearch } from 'src/components/Header/SearchContext'

interface ProductListCategory {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: [
    {
      rate: number
      count: number
    }
  ]
}

interface ProductListProps {
  selectedCategory: string | null // Kiểu dữ liệu của selectedCategory
} // Trong ProductList.tsx
const ProductList = ({ selectedCategory }: ProductListProps) => {
  const [products, setProducts] = useState<ProductListCategory[]>([])
  const [loading, setLoading] = useState(true)
  const { searchKeyword } = useSearch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.log('error fetching data', error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchKeyword.toLowerCase())
  )
  console.log('filteredProducts', filteredProducts)
  return (
    <div className='order-last min-h-screen w-full md:order-none'>
      <ul className='grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
export default ProductList
