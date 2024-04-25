import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

interface ProductListCategory {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductListProps {
  selectedCategory: string | null
  sortOption: string | null // Loại sắp xếp
}

const ProductList = ({ selectedCategory, sortOption }: ProductListProps) => {
  const [products, setProducts] = useState<ProductListCategory[]>([])
  const [loading, setLoading] = useState(true)
  const searchKeyword = useAppSelector((state) => state.search.searchKeyword)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true) // Bắt đầu loading
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        setLoading(false) // Kết thúc loading sau khi dữ liệu được tải về
      } catch (error) {
        console.log('error fetching data', error)
        setLoading(false) // Kết thúc loading nếu xảy ra lỗi
      }
    }
    fetchData()
  }, [])

  const filteredProducts = products
    .slice()
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
        (!selectedCategory || product.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortOption === 'price_asc') {
        return a.price - b.price
      } else if (sortOption === 'price_desc') {
        return b.price - a.price
      } else {
        return 0
      }
    })

  return (
    <div className='order-last min-h-screen w-full md:order-none'>
      {loading && (
        <div className='loader'>
          <div className='inner one'></div>
          <div className='inner two'></div>
          <div className='inner three'></div>
        </div>
      )}
      {!loading && (
        <>
          {searchKeyword && filteredProducts.length > 0 && (
            <p className='text-center'>{`Tìm thấy ${filteredProducts.length} sản phẩm phù hợp`}</p>
          )}
          {searchKeyword && filteredProducts.length === 0 && (
            <p className='text-center'>Không có sản phẩm nào phù hợp</p>
          )}
          <ul className='grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ProductList
