import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from 'src/components/Header/Header'
import MainLayout from 'src/layouts/Mainlayout/MainLayout'
import { getProduct, getProductSlider } from 'src/services/apiServices'
import Slider from './components/Slider'
import { useSelector, useDispatch } from 'react-redux'
import { searchSlice } from 'src/redux/seach/searchSlice.slice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }[]
}

const Skeleton = () => {
  return (
    <div className='skeleton bg-neutral-400 rounded-lg overflow-hidden animate-pulse'>
      <div className='skeleton-image h-64'></div>
      <div className='skeleton-title h-8 my-2'></div>
      <div className='skeleton-price h-6 w-24'></div>
    </div>
  )
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [sliderItem, setSliderItem] = useState<Product[]>([])

  useEffect(() => {
    fetchDataProduct()
    fetchDataSlider()
  }, [])

  const fetchDataProduct = async () => {
    try {
      const res = await getProduct()
      setProducts(res as Product[])
      setIsLoading(false)
      // console.log('Data fetched:', res)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsLoading(false)
    }
  }

  const fetchDataSlider = async () => {
    try {
      const res = await getProductSlider()
      setSliderItem(res as Product[])
      // console.log('Data fetched slider:', res)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  // const cout = useSelector((state: any) => state.counter)\
  // const cout = useAppSelector((state) => state.product)
  // console.log('cout', cout)
  // useEffect(() => {}, [])
  const dispatch = useAppDispatch()

  return (
    <>
      {/* <p> {cout.value}</p> */}

      <section className='mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 [&>*:nth-child(1)]:md:col-span-4 [&>*:nth-child(1)]:md:row-span-2 [&>*:nth-child(2)]:md:col-span-2 [&>*:nth-child(2)]:md:row-span-1 [&>*:nth-child(3)]:md:col-span-2 [&>*:nth-child(3)]:md:row-span-1'>
        {isLoading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <Link
                className='relative block aspect-square h-full w-full'
                to={`/product/${product.title
                  .toLowerCase()
                  .replace(/[^\w\s]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-')
                  .trim()}-${product.id}`}
              >
                <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
                  <img
                    className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105 editImage'
                    src={product.image}
                    alt={product.title}
                  />
                  <div
                    className={`absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label ${
                      product.id === 3 ? ' lg:px-20 lg:pb-[35%] ' : 'bottom-0'
                    }`}
                  >
                    <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                      <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>
                        {product.title}
                      </h3>
                      <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                        ${product.price}
                        <span className='ml-1 inline @[275px]/label:inline'>USD</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </section>
      <Slider sliderItem={sliderItem} />
    </>
  )
}
