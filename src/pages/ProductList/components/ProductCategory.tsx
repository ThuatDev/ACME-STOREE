import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

interface ProductCategoryProps {
  setSelectedCategory: (category: string) => void
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ setSelectedCategory }) => {
  const [productCategory, setProductCategory] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategoryState] = useState<string>('')

  useEffect(() => {
    const fetchProductCategory = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()
        setProductCategory(['All', ...data])
        setIsLoading(false)
      } catch (error) {
        console.log('error fetching data', error)
      }
    }
    fetchProductCategory()
  }, [])

  const handleClickCategory = (category: string) => {
    setSelectedCategory(category === 'All' ? '' : category)
    setSelectedCategoryState(category) // Update selected category state
  }

  return (
    <div className='order-first w-full flex-none md:max-w-[125px]'>
      <h3 className='hidden text-xs text-neutral-500 md:block dark:text-neutral-400'>Collections</h3>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className='hidden md:block'>
          {productCategory.map((category, index) => (
            <li className='mt-2 flex text-black dark:text-white' key={index}>
              <NavLink
                to={category === 'All' ? '/list-products' : `/list-products?category=${category}`}
                className={`w-full text-sm underline-offset-4 hover:underline capitalize ${
                  selectedCategory === category ? ' font-bold underline' : ''
                }`}
                onClick={() => handleClickCategory(category)}
              >
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductCategory
