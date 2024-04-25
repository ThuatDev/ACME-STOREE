/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint no-use-before-define: 0 */ // --> OFF
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
  const [showComponent, setShowComponent] = useState(false) // State to control component visibility

  useEffect(() => {
    // Set timeout to show the component after 3 seconds
    const timeout = setTimeout(() => {
      setShowComponent(true)
    }, 400)

    return () => clearTimeout(timeout) // Cleanup function to clear timeout on unmount
  }, []) // Run effect only once after initial render

  const handleClick = (sortOption: string) => {
    handleSortChange(sortOption)
    setActiveSortOption(sortOption)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLAnchorElement>, sortOption: string) => {
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
      {showComponent && ( // Render component only if showComponent is true
        <div className='order-none flex-none md:order-last md:w-[125px] '>
          <nav>
            <h3 className='hidden text-xs text-neutral-500 md:block dark:text-neutral-400'>Sort by</h3>
            <ul className='hidden md:block'>
              {sortOptions.map((option) => (
                <li key={option.value}>
                  <Link
                    to='#'
                    className={`mt-2 flex text-sm dark:text-white cursor-pointer hover:underline hover:underline-offset-4  ${
                      activeSortOption === option.value ? 'text-black underline underline-offset-4 ' : 'text-black dark:text-white '
                    }`}
                    onClick={() => handleClick(option.value)}
                    onKeyPress={(event) => handleKeyPress(event, option.value)}
                    tabIndex={0} // Make the element focusable
                  >
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='md:hidden'>
              <div className='relative'>
                <button
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
                </button>
                {showMobileSort && (
                  <div className='absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black '>
                    {sortOptions.map((option) => (
                      <li key={option.value}>
                        <Link
                          to='#'
                          className={`mt-2 flex text-sm text-black dark:text-white cursor-pointer ${
                            activeSortOption === option.value ? 'font-bold underline' : ''
                          }`}
                          onClick={() => handleClick(option.value)}
                          onKeyPress={(event) => handleKeyPress(event, option.value)}
                          tabIndex={0} // Make the element focusable
                        >
                          {option.label}
                        </Link>
                      </li>
                    ))}
                  </div>
                )}
              </div>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

export default ProductSort
