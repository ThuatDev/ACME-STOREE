import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

interface ProductCategoryProps {
  setSelectedCategory: (category: string) => void
}

const CategoryList: React.FC<{
  categories: string[]
  selectedCategory: string
  handleClickCategory: (category: string) => void
}> = ({ categories, selectedCategory, handleClickCategory }) => (
  <ul>
    {categories.map((category, index) => (
      <li className='mt-2 flex text-black dark:text-white' key={index}>
        <NavLink
          to={category === 'All' ? '/list-products' : `/list-products?category=${category}`}
          className={`w-full text-sm underline-offset-4 hover:underline capitalize ${
            selectedCategory === category ? '  underline' : ''
          }`}
          onClick={() => handleClickCategory(category)}
        >
          {category}
        </NavLink>
      </li>
    ))}
  </ul>
)

const ProductCategory: React.FC<ProductCategoryProps> = ({ setSelectedCategory }) => {
  const [productCategory, setProductCategory] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategoryState] = useState<string>('')
  const [selectedMobileCategory, setSelectedMobileCategory] = useState<string>('') // New state for mobile category
  const [showMobileCategory, setShowMobileCategory] = useState(false)

  useEffect(() => {
    const fetchProductCategory = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const categories = await response.json()
        setProductCategory(['All', ...categories])
        setIsLoading(false)
      } catch (error) {
        console.log('Error fetching data', error)
        // TODO: Handle error and display an error message to the user
      }
    }
    fetchProductCategory()
  }, [])

  const handleClickCategory = (category: string) => {
    setSelectedCategory(category === 'All' ? '' : category)
    setSelectedCategoryState(category) // Update selected category state
    setSelectedMobileCategory(category) // Update selected mobile category state

    // Scroll to selected category on mobile
    if (showMobileCategory) {
      const categoryElement = document.getElementById(`category-${category}`)
      if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      }
    }
  }

  const toggleMobileCategory = () => {
    setShowMobileCategory(!showMobileCategory)
  }

  return (
    <div className='order-first w-full flex-none md:max-w-[125px]'>
      <h3 className='hidden text-xs text-neutral-500 md:block dark:text-neutral-400'>Collections</h3>
      {isLoading ? (
        <div></div>
      ) : (
        <>
          <ul className='hidden md:block'>
            <CategoryList
              categories={productCategory}
              selectedCategory={selectedCategory}
              handleClickCategory={handleClickCategory}
            />
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
                <div>{selectedMobileCategory || 'All'}</div> {/* Display selected mobile category */}
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
                  <CategoryList
                    categories={productCategory}
                    selectedCategory={selectedCategory}
                    handleClickCategory={handleClickCategory}
                  />
                </div>
              )}
            </div>
          </ul>
        </>
      )}
    </div>
  )
}

export default ProductCategory
