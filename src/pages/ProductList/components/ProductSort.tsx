import React, { useState } from 'react'

interface ProductSortProps {
  setSortBy: (sortBy: string) => void
}

const ProductSort = ({ handleSortChange }: { handleSortChange: (sortOption: string) => void }) => {
  const [activeSortOption, setActiveSortOption] = useState('default')

  const handleClick = (sortOption: string) => {
    handleSortChange(sortOption)
    setActiveSortOption(sortOption)
  }

  const [showMobileSort, setShowMobileSort] = useState(false)

  const toggleMobileSort = () => {
    setShowMobileSort(!showMobileSort)
  }

  return (
    <div>
      <div className='order-none flex-none md:order-last md:w-[125px] '>
        <nav>
          <h3 className='hidden text-xs text-neutral-500 md:block dark:text-neutral-400'>Sort By:</h3>
          <ul className='hidden md:block'>
            {/* active lên khi click vào item đó  */}
            <li
              className={`mt-2 flex text-sm dark:text-white cursor-pointer ${
                activeSortOption === 'default' ? 'text-black font-bold underline' : 'text-black dark:text-white'
              }`}
              onClick={() => handleClick('default')}
            >
              Relevance
            </li>

            <li
              className={`mt-2 flex text-sm dark:text-white cursor-pointer ${
                activeSortOption === 'price_asc' ? 'text-black font-bold underline' : 'text-black dark:text-white'
              }`}
              onClick={() => handleClick('price_asc')}
            >
              Price: Low to high
            </li>
            <li
              className={`mt-2 flex text-sm dark:text-white cursor-pointer ${
                activeSortOption === 'price_desc' ? 'text-black font-bold underline' : 'text-black dark:text-white'
              }`}
              onClick={() => handleClick('price_desc')}
            >
              Price: High to low
            </li>
          </ul>
          <ul className='md:hidden'>
            <div className='relative'>
              <div
                className={`flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30 cursor-pointer ${
                  showMobileSort ? 'bg-gray-200 dark:bg-gray-800' : ''
                }`}
                onClick={toggleMobileSort}
              >
                <div>Relevance</div>
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
                  <li
                    className={`mt-2 flex text-sm text-black dark:text-white cursor-pointer ${
                      activeSortOption === 'default' ? 'font-bold underline' : ''
                    }`}
                    onClick={() => handleClick('default')}
                  >
                    <p className='w-full '>Relevance</p>
                  </li>

                  <li
                    className={`mt-2 flex text-sm text-black dark:text-white cursor-pointer ${
                      activeSortOption === 'price_asc' ? 'font-bold underline' : ''
                    }`}
                    onClick={() => handleClick('price_asc')}
                  >
                    <p className='w-full  '>Price: Low to high</p>
                  </li>
                  <li
                    className={`mt-2 flex text-sm text-black dark:text-white cursor-pointer ${
                      activeSortOption === 'price_desc' ? 'font-bold underline' : ''
                    }`}
                    onClick={() => handleClick('price_desc')}
                  >
                    <p className='w-full  '>Price: High to low</p>
                  </li>
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
