/* eslint no-use-before-define: 0 */ // --> OFF
import React, { useState } from 'react'

interface SortOption {
  value: string
  label: string
}

interface ProductSortProps {
  handleSortChange: (sortOption: string) => void
}

const ProductSort: React.FC<ProductSortProps> = ({ handleSortChange }) => {
  const [activeSortOption, setActiveSortOption] = useState('default')
  const [showMobileSort, setShowMobileSort] = useState(false)

  const handleClick = (sortOption: string) => {
    handleSortChange(sortOption)
    setActiveSortOption(sortOption)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLLIElement>, sortOption: string) => {
    if (event.key === 'Enter') {
      handleSortChange(sortOption)
      setActiveSortOption(sortOption)
    }
  }

  const toggleMobileSort = () => {
    setShowMobileSort(!showMobileSort)
  }

  const sortOptions: SortOption[] = [
    { value: 'default', label: 'Relevance' },
    { value: 'price_asc', label: 'Price: Low to high' },
    { value: 'price_desc', label: 'Price: High to low' }
  ]

  return (
    <div>
      <div className='order-none flex-none md:order-last md:w-[125px] '>
        <nav>
          <h3 className='hidden text-xs text-neutral-500 md:block dark:text-neutral-400'>Sort By:</h3>
          <ul className='hidden md:block'>
            {sortOptions.map((option) => (
              <li
                key={option.value}
                className={`mt-2 flex text-sm dark:text-white cursor-pointer ${
                  activeSortOption === option.value ? 'text-black font-bold underline' : 'text-black dark:text-white'
                }`}
                onClick={() => handleClick(option.value)}
                onKeyPress={(event) => handleKeyPress(event, option.value)}
                tabIndex={0} // Make the element focusable
              >
                {option.label}
              </li>
            ))}
          </ul>
          <ul className='md:hidden'>
            <div className='relative'>
              <div
                className={`flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30 cursor-pointer ${
                  showMobileSort ? 'bg-gray-200 dark:bg-gray-800' : ''
                }`}
                onClick={toggleMobileSort}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    toggleMobileSort()
                  }
                }}
                tabIndex={0} // Make the element focusable
              >
                <div>{sortOptions.find((option) => option.value === activeSortOption)?.label}</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                  data-slot='icon'
                  className={`h-4 ${showMobileSort ? 'transform rotate-180' : ''}`}
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5'></path>
                </svg>
              </div>
              {showMobileSort && (
                <div className='absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black '>
                  {sortOptions.map((option) => (
                    <li
                      key={option.value}
                      className={`mt-2 flex text-sm text-black dark:text-white cursor-pointer ${
                        activeSortOption === option.value ? 'font-bold underline' : ''
                      }`}
                      onClick={() => handleClick(option.value)}
                      onKeyPress={(event) => handleKeyPress(event, option.value)}
                      tabIndex={0} // Make the element focusable
                    >
                      <p className='w-full '>{option.label}</p>
                    </li>
                  ))}
                </div>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default ProductSort
