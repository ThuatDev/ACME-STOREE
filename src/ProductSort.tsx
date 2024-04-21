/* eslint-disable prettier/prettier */
import React from 'react'

export default function ProductSort() {
  return (
    <div>
      <div className='order-none flex-none md:order-last md:w-[125px] '>
          <nav>
            <h3 className='hidden text-xs text-neutral-500 md:block dark:text-neutral-400'>Sort By:</h3>
            <ul className='hidden md:block'>
              <li className='mt-2 flex text-sm text-black dark:text-white'>
                <p className='w-full hover:underline hover:underline-offset-4 underline underline-offset-4'>
                  Relevance
                </p>
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
          </nav>
        </div>
    </div>
  )
}
