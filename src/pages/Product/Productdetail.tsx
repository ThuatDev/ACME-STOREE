/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom'

const Productdetail = () => {
  return (
    <>
      <div className='mx-auto max-w-screen-2xl px-4'>
        <div className='flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black'>
          <div className='h-full w-full basis-full lg:basis-4/6'>
            <div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden'>
              <img
                className='h-full w-full object-contain'
                sizes='(min-width: 1024px) 66vw, 100vw'
                src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1200&q=75'
                alt=''
              />
              <div className='absolute bottom-[15%] flex w-full justify-center'>
                <div className='mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80'>
                  <Link
                    to='/'
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
                    to='/'
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
            </div>
            <ul className='my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0'>
              <li className='h-20 w-20'>
                <Link to='/' className='h-full w-full'>
                  <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800'>
                    <img
                      className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                      src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=96&q=75'
                      alt=''
                    />
                  </div>
                </Link>
              </li>
              <li className='h-20 w-20'>
                <Link to='/' className='h-full w-full'>
                  <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800'>
                    <img
                      className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                      src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=96&q=75'
                      alt=''
                    />
                  </div>
                </Link>
              </li>
              <li className='h-20 w-20'>
                <Link to='/' className='h-full w-full'>
                  <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800'>
                    <img
                      className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                      src='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=96&q=75'
                      alt=''
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className='basis-full lg:basis-2/6'>
            <div className='mb-6 flex flex-col border-b pb-6 dark:border-neutral-700'>
              <h1 className='mb-2 text-5xl font-medium'>Acme Circles T-Shirt</h1>
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
                  aria-disabled='false'
                  title='Color Black'
                  className='flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 '
                >
                  Black
                </button>
                <button
                  aria-disabled='false'
                  title='Color White'
                  className='flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 cursor-default ring-2 ring-blue-600'
                >
                  White
                </button>
                <button
                  aria-disabled='true'
                  disabled
                  title='Color Blue (Out of Stock)'
                  className='flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700'
                >
                  Blue
                </button>
              </dd>
            </dl>
            <dl className='mb-8'>
              <dt className='mb-4 text-sm uppercase tracking-wide'>Size</dt>
              <dd className='flex flex-wrap gap-3'>
                <button
                  aria-disabled='false'
                  title='Size XS'
                  className='flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 '
                >
                  XS
                </button>
                <button
                  aria-disabled='false'
                  title='Size S'
                  className='flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 cursor-default ring-2 ring-blue-600'
                >
                  S
                </button>
                <button
                  aria-disabled='false'
                  title='Size M'
                  className='flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 '
                >
                  M
                </button>
                <button
                  aria-disabled='true'
                  title='Size L (Out of Stock)'
                  className='flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700'
                  disabled
                >
                  L
                </button>
                <button
                  aria-disabled='false'
                  title='Size XL'
                  className='flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 '
                >
                  XL
                </button>
                <button
                  aria-disabled='false'
                  title='Size XXL'
                  className='flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 '
                >
                  XXL
                </button>
                <button
                  aria-disabled='false'
                  title='Size XXXL'
                  className='flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 '
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
        <div className='py-8'>
        <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
        <ul className='flex  gap-4 overflow-x-auto'>
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
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
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
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
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
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
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
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
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
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
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
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
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
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
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
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
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
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
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
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
          <li className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
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
      </div>
    </>
  )
}

export default Productdetail
