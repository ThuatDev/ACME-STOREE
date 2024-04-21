/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import ProductItem from './ProductItem'

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
}

const ProductList = ({ selectedCategory }: ProductListProps) => {
  const [products, setProducts] = useState<ProductListCategory[]>([]) // Sử dụng kiểu dữ liệu của ProductListCategory
  const [loading, setLoading] = useState(true)

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

  const filterProducts = products.filter((product: ProductListCategory) =>
    selectedCategory ? product.category === selectedCategory : true
  )
  console.log('filterProducts>>', products)

  return (
    <div className='order-last min-h-screen w-full md:order-none'>
      <ul className='grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {filterProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
export default ProductList
