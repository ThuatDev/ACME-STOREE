import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const ProductCategory = ({ setSelectedCategory }: { setSelectedCategory: any }) => {
  const [productCategory, setProductCategory] = useState<string[]>([])
  const [active, setActive] = useState(false)

  useEffect(() => {
    const fetchProductCategory = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()
        console.log('product category', data)
        setProductCategory(['All', ...data])
      } catch (error) {
        console.log('error fetching data', error)
      }
    }
    fetchProductCategory()
  }, [])

  const handleClickCategory = (category: string) => {
    setSelectedCategory(category === 'All' ? '' : category) // Nếu là "All", đặt selectedCategory là null
  }

  return (
    <>
      <div className='order-first w-full flex-none md:max-w-[125px]'>
        <h3 className='hidden text-xs text-neutral-500 md:block dark:text-neutral-400'>Collections</h3>
        {productCategory.length === 0 && <div>Loading...</div>}
        <ul className='hidden md:block'>
          {productCategory.map((category, index) => (
            <li className='mt-2 flex text-black dark:text-white' key={index}>
              {/* Tạo link cho từng category với tham số category tương ứng */}
              <NavLink
                to={`/list-products?category=${category === 'All' ? '' : category}`}
                className={({ isActive }) =>
                  isActive
                    ? 'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100  underline-offset-4 capitalize  '
                    : 'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100  underline-offset-4 capitalize'
                }
                onClick={() => handleClickCategory(category)}
              >
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ProductCategory
