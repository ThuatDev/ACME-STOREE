/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

export default function ProductSort() {
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
            <li className='mt-2 flex text-sm text-black dark:text-white'>
              <p className='w-full hover:underline hover:underline-offset-4 underline underline-offset-4'>Relevance</p>
            </li>
            <li className='mt-2 flex text-sm text-black dark:text-white'>
              <p className='w-full hover:underline hover:underline-offset-4'>Trending</p>
            </li>
            <li className='mt-2 flex text-sm text-black dark:text-white'>
              <p className='w-full hover:underline hover:underline-offset-4'>Latest arrivals</p>
            </li>
            <li className='mt-2 flex text-sm text-black dark:text-white'>
              <p className='w-full hover:underline hover:underline-offset-4'>Price: Low to high</p>
            </li>
            <li className='mt-2 flex text-sm text-black dark:text-white'>
              <p className='w-full hover:underline hover:underline-offset-4'>Price: High to low</p>
            </li>
          </ul>
          <ul className='md:hidden'>
            <div className='relative'>
              <div
                className='flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30 cursor-pointer'
                onClick={toggleMobileSort}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleMobileSort()
                  }
                }}
                role='menu'
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
                  className={`h-4 ${showMobileSort ? 'transform rotate-180' : ''}`}
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5'></path>
                </svg>
              </div>
              {showMobileSort && (
                <div className='absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black'>
                  <li className='mt-2 flex text-sm text-black dark:text-white'>
                    <p className='w-full hover:underline hover:underline-offset-4 underline underline-offset-4'>
                      Relevance
                    </p>
                  </li>
                  <li className='mt-2 flex text-sm text-black dark:text-white'>
                    <a className='w-full hover:underline hover:underline-offset-4' href='/search?sort=trending-desc'>
                      Trending
                    </a>
                  </li>
                  <li className='mt-2 flex text-sm text-black dark:text-white'>
                    <a className='w-full hover:underline hover:underline-offset-4' href='/search?sort=latest-desc'>
                      Latest arrivals
                    </a>
                  </li>
                  <li className='mt-2 flex text-sm text-black dark:text-white'>
                    <a className='w-full hover:underline hover:underline-offset-4' href='/search?sort=price-asc'>
                      Price: Low to high
                    </a>
                  </li>
                  <li className='mt-2 flex text-sm text-black dark:text-white'>
                    <a className='w-full hover:underline hover:underline-offset-4' href='/search?sort=price-desc'>
                      Price: High to low
                    </a>
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
