import React, { useState } from 'react'

interface ProductSortProps {
  setSortBy: (sortBy: string) => void
}

const ProductSort = ({ handleSortChange }: { handleSortChange: (sortOption: string) => void }) => {
  const handleClick = (sortOption: string) => {
    handleSortChange(sortOption)
  }

  return (
    <div>
      <div className='order-none flex-none md:order-last md:w-[125px] '>
        <nav>
          <h3 className='hidden text-xs text-neutral-500 md:block dark:text-neutral-400'>Sort By:</h3>
          <ul className='hidden md:block'>
            <li
              className='mt-2 flex text-sm text-black dark:text-white'
              onClick={() => handleClick('default')}
              tabIndex={0}
            >
              <p className='w-full hover:underline hover:underline-offset-4 underline underline-offset-4'>Relevance</p>
            </li>

            <li className='mt-2 flex text-sm text-black dark:text-white' onClick={() => handleClick('price_asc')}>
              <p className='w-full hover:underline hover:underline-offset-4'>Price: Low to high</p>
            </li>
            <li className='mt-2 flex text-sm text-black dark:text-white' onClick={() => handleClick('price_desc')}>
              <p className='w-full hover:underline hover:underline-offset-4'>Price: High to low</p>
            </li>
          </ul>
          <ul className='md:hidden'>
            <div className='relative'>
              <div
                className='flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30 cursor-pointer'
                role='button'
                tabIndex={0}
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
                  className={`h-4 $ 'transform rotate-180' : ''}`}
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5'></path>
                </svg>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default ProductSort
