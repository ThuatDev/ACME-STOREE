/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from 'src/components/Header/Header'
import MainLayout from 'src/layouts/Mainlayout/MainLayout'
interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: [
    {
      rate: number
      count: number
    }
  ]
}
export default function Home() {
  const [products, setProducts] = useState([] as Product[])

  useEffect(() => {
    FetchData()
  }, [])
  const FetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      // Chỉ lấy 3 sản phẩm đầu tiên
      const firstThreeProducts = data.slice(0, 3)
      setProducts(firstThreeProducts)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return (
    <>
      <section className='mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 [&>*:nth-child(1)]:md:col-span-4 [&>*:nth-child(1)]:md:row-span-2 [&>*:nth-child(2)]:md:col-span-2 [&>*:nth-child(2)]:md:row-span-1 [&>*:nth-child(3)]:md:col-span-2 [&>*:nth-child(3)]:md:row-span-1  '>
        {products.map((product) => (
          <div key={product.id}  >
            <Link className='relative block aspect-square h-full w-full  ' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105 editImage'
                  src={product.image}
                  alt={product.title}
                />
                {/* <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label   '> */}
                <div
                  className={`absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label ${
                    product.id === 1 ? ' lg:px-20 lg:pb-[35%] ' : 'bottom-0'
                  }`}
                >
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>{product.title}</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      ${product.price}
                      <span className='ml-1 inline @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
      <div className='w-full overflow-x-auto pb-6 pt-1'>
        <ul className='flex animate-carousel gap-4'>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
            <Link className='relative h-full w-full' to='/'>
              <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                <img
                  className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=384&q=75'
                  alt=''
                />
                <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
                  <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>Acme Mug</h3>
                    <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                      $15.00
                      <span className='ml-1 inline hidden @[275px]/label:inline'>USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
