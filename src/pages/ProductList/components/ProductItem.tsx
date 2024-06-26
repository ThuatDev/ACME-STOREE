import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }: { product: any }) => {
  //   console.log('ProductItem.js', product)
  const slug = product.title
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Loại bỏ các ký tự đặc biệt
    .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch nối
    .replace(/-+/g, '-') // Loại bỏ các dấu gạch nối liên tiếp
    .trim() // Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
  return (
    <li key={product.id} className='aspect-square transition-opacity animate-fadeIn'>
      <Link to={`/product/${slug}-${product.id}`} className='relative inline-block h-full w-full'>
        <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
          <img
            className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
            src={product.image}
            alt={product.title}
          />
          <div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label'>
            <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white '>
              <h3 className=' mr-4 line-clamp-2 text-ellipsis flex pl-2 leading-none tracking-tight'>{product.title}</h3>
              <p className='flex-none rounded-full bg-blue-600 p-2 text-white'>
                ${product.price}
                <span className='ml-1 inline @[275px]/label:inline'>USD</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ProductItem
