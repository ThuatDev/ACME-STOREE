import React from 'react'
import { Link } from 'react-router-dom'
export default function Slider({ sliderItem }: any) {
  type Product = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    name: string
  }

  return (
    <div className='w-full overflow-x-auto pb-6 pt-1'>
      <ul className='flex animate-carousel gap-4'>
        {sliderItem.map((item: Product) => (
          <li
            className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'
            key={item.id}
          >
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='absolute inset-0 object-cover w-full h-full transition duration-300 ease-in-out group-hover:scale-105'
                  src={item.image}
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>{item.title}</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      {item.price}
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
