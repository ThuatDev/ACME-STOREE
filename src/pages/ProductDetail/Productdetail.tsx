import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Slider from '../Home/components/Slider'
import { getProductSlider } from 'src/services/apiServices'
const ProductDetail = () => {
  type Product = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    name: string
  }
  useEffect(() => {
    fetchDataSlider()
  }, [])
  const [sliderItem, setSliderItem] = useState<Product[]>([])
  const fetchDataSlider = async () => {
    try {
      const res = await getProductSlider()
      setSliderItem(res as Product[])
      console.log('Data fetched slider:', res)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  const { id } = useParams()
  const productId = (id as string).split('-').pop() // Lấy id từ phần cuối của URL
  console.log('productId:', productId)
  const [product, setProduct] = useState<Product | null>(null)
  const [sliderItems, setSliderItems] = useState<Product[]>([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        console.log('response-detail:', response)
        if (!response.ok) {
          throw new Error('Failed to fetch product')
        }
        const productData = await response.json()
        setProduct(productData)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }

    fetchProduct()
  }, [productId])
  fetch(`https://fakestoreapi.com/products/${id}`)

  const imagesSliderItem = [
    'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1200&q=75',
    'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=1200&q=75',
    'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=1200&q=75'
  ]
  const [itemSliderChild, setItemSliderChild] = useState<string[]>([])

  const handleSlider = (index: number) => {
    const item = imagesSliderItem[index]
    console.log('item:', item)
    // nhận vào img vừa được click và thay đổi liên tục khi click vào img khác
    setItemSliderChild([item])
    console.log('itemSliderChild:', itemSliderChild)
  }
  // options color
  const [selectedColor, setSelectedColor] = useState('black')

  // Hàm xử lý sự kiện khi một mục màu được click
  const handleColorClick = (color: string) => {
    setSelectedColor(color)
  }
  const [selectedSize, setSelectedSize] = useState('')

  // Hàm xử lý sự kiện khi một nút kích thước được click
  const handleSizeClick = (size: string) => {
    // Kiểm tra xem size được click có giống với size đã được chọn hay không
    if (size === selectedSize) {
      // Nếu giống, thì xóa size đã chọn bằng cách gán giá trị rỗng
      setSelectedSize('')
    } else {
      // Nếu không, thì chọn size mới bằng cách gán giá trị mới
      setSelectedSize(size)
    }
  }

  return (
    <>
      <div className='mx-auto max-w-screen-2xl px-4'>
        <div className='flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black'>
          <div className='h-full w-full basis-full lg:basis-4/6'>
            <div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden'>
              <img
                className='h-full w-full object-contain transition duration-300 ease-in-out transform hover:scale-105'
                sizes='(min-width: 1024px) 66vw, 100vw'
                // src={product?.image}
                // viết điều kiện nếu handleSlider được click thì hiển thị itemSliderChild đã được set ở trên nếu không thì hiển thị product?.image và cứ ngược lại như thế cho tôi
                src={itemSliderChild.length > 0 ? itemSliderChild[0] : product?.image}
                alt={product?.title}
              />
              {/* slider item arrow  */}
              <div className='absolute bottom-[15%] flex w-full justify-center'>
                <div className='mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80'>
                  <Link
                    to=''
                    aria-label='Previous product image'
                    className='h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                      data-slot='icon'
                      className='h-5'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'></path>
                    </svg>
                  </Link>
                  <div className='mx-1 h-6 w-px bg-neutral-500'></div>
                  <Link
                    to=''
                    aria-label='Previous product image'
                    className='h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                      data-slot='icon'
                      className='h-5'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'></path>
                    </svg>
                  </Link>
                </div>
              </div>
              {/* end  */}
            </div>
            {/* slider item img  */}
            <ul className='my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0'>
              {imagesSliderItem.map((item, index) => (
                <li className='h-20 w-20' key={index}>
                  <Link to='' className='h-full w-full' onClick={() => handleSlider(index)}>
                    <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800'>
                      <img
                        className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                        src={item}
                        alt=''
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            {/* end slider item img    */}
          </div>
          <div className='basis-full lg:basis-2/6'>
            <div className='mb-6 flex flex-col border-b pb-6 dark:border-neutral-700'>
              <h1 className='mb-2 text-5xl font-medium'>{product?.title}</h1>
              <div className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
                <p>
                  $20.00 <span className='ml-1 inline'>USD</span>
                </p>
              </div>
            </div>
            <dl className='mb-8'>
              <dt className='mb-4 text-sm uppercase tracking-wide'>Color</dt>
              <dd className='flex flex-wrap gap-3'>
                <button
                  aria-disabled={selectedColor === 'black'}
                  title='Color Black'
                  className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ${
                    selectedColor === 'black' ? 'ring-2 ring-blue-600' : 'ring-1 ring-transparent'
                  } transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 `}
                  onClick={() => handleColorClick('black')}
                >
                  Black
                </button>
                <button
                  aria-disabled={selectedColor === 'white'}
                  title='Color White'
                  className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ${
                    selectedColor === 'white' ? 'ring-2 ring-blue-600' : 'ring-1 ring-transparent'
                  } transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 `}
                  onClick={() => handleColorClick('white')}
                >
                  White
                </button>
                <button
                  aria-disabled={selectedColor === 'blue'}
                  disabled
                  title='Color Blue (Out of Stock)'
                  className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700 ${
                    selectedColor === 'blue' ? 'ring-2 ring-blue-600' : 'ring-1 ring-transparent'
                  }`}
                  onClick={() => handleColorClick('blue')}
                >
                  Blue
                </button>
              </dd>
            </dl>
            <dl className='mb-8'>
              <dt className='mb-4 text-sm uppercase tracking-wide'>Size</dt>
              <dd className='flex flex-wrap gap-3'>
                <button
                  aria-disabled={selectedSize === 'XS'}
                  title='Size XS'
                  className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ${
                    selectedSize === 'XS' ? 'ring-2 ring-blue-600' : 'ring-1 ring-transparent'
                  } transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 `}
                  onClick={() => handleSizeClick('XS')}
                >
                  XS
                </button>
                <button
                  aria-disabled={selectedSize === 'S'}
                  title='Size S'
                  className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ${
                    selectedSize === 'S' ? 'ring-2 ring-blue-600' : 'ring-1 ring-transparent'
                  } cursor-default ring-2`}
                  onClick={() => handleSizeClick('S')}
                >
                  S
                </button>
                <button
                  aria-disabled={selectedSize === 'M'}
                  title='Size M'
                  className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ${
                    selectedSize === 'M' ? 'ring-2 ring-blue-600' : 'ring-1 ring-transparent'
                  } transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 `}
                  onClick={() => handleSizeClick('M')}
                >
                  M
                </button>
                <button
                  aria-disabled={selectedSize === 'L'}
                  title='Size L (Out of Stock)'
                  className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700 ${
                    selectedSize === 'L' ? 'ring-2 ring-blue-600' : 'ring-1 ring-transparent'
                  }`}
                  disabled
                  onClick={() => handleSizeClick('L')}
                >
                  L
                </button>
                <button
                  aria-disabled={selectedSize === 'XL'}
                  title='Size XL'
                  className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ${
                    selectedSize === 'XL' ? 'ring-2 ring-blue-600' : 'ring-1 ring-transparent'
                  } transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 `}
                  onClick={() => handleSizeClick('XL')}
                >
                  XL
                </button>
                <button
                  aria-disabled={selectedSize === 'XXL'}
                  title='Size XXL'
                  className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ${
                    selectedSize === 'XXL' ? 'ring-2 ring-blue-600' : 'ring-1 ring-transparent'
                  } transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 `}
                  onClick={() => handleSizeClick('XXL')}
                >
                  XXL
                </button>
                <button
                  aria-disabled={selectedSize === 'XXXL'}
                  title='Size XXXL'
                  className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ${
                    selectedSize === 'XXXL' ? 'ring-2 ring-blue-600' : 'ring-1 ring-transparent'
                  } transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 `}
                  onClick={() => handleSizeClick('XXXL')}
                >
                  XXXL
                </button>
              </dd>
            </dl>
            <div className='prose mx-auto max-w-6xl text-base leading-7 text-black prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-black prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-strong:text-white mb-6 text-sm leading-tight dark:text-white/[60%]'>
              60% combed ringspun cotton/40% polyester jersey tee.
            </div>
            <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
              <button
                aria-label='Add to cart'
                aria-disabled='false'
                className='relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90'
              >
                <div className='absolute left-0 ml-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                    data-slot='icon'
                    className='h-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15'></path>
                  </svg>
                </div>
                Add To Cart
              </button>
              <p aria-live='polite' className='sr-only' role='status'></p>
            </form>
          </div>
        </div>
        <Slider sliderItem={sliderItem} />
      </div>
    </>
  )
}

export default ProductDetail
