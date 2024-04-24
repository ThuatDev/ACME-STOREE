/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const ProductCategory = ({ setSelectedCategory }: { setSelectedCategory: any }) => {
  const [productCategory, setProductCategory] = useState<string[]>([])
  const [active, setActive] = useState(false)
  const [showMobileCategory, setShowMobileCategory] = useState(false)
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
  const toggleMobileCategory = () => {
    setShowMobileCategory(!showMobileCategory)
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
        <ul className='md:hidden'>
          <div className='relative transition-all duration-300 ease-in-out'>
            <div
              className='flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30'
              role='button'
              onClick={toggleMobileCategory}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleMobileCategory()
                }
              }}
              tabIndex={0}
            >
              <div>All</div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
                data-slot='icon'
                className={`h-4 ${showMobileCategory ? 'transform rotate-180' : ''}`}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5'></path>
              </svg>
            </div>
            {showMobileCategory && (
              <div className='absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black' role='menu'>
                <ul>
                  {productCategory.map((category, index) => (
                    <li className='mt-2 flex text-black dark:text-white' key={index}>
                      <NavLink
                        to={`/list-products?category=${category === 'All' ? '' : category}`}
                        className={({ isActive }) =>
                          isActive
                            ? 'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100  underline-offset-4 capitalize  '
                            : 'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100  underline-offset-4 capitalize'
                        }
                        onClick={() => {
                          handleClickCategory(category)
                          toggleMobileCategory() // Ẩn danh sách sau khi chọn
                        }}
                      >
                        {category}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ul>
      </div>
    </>
  )
}

export default ProductCategory
