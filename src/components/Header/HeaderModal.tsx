/* eslint-disable prettier/prettier */
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


const HomeMobile = ({ openMenuDialog, handleClose }: { openMenuDialog: boolean; handleClose: () => void }) => {
  return (
    <Transition.Root show={openMenuDialog} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0  ' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden md:hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-300 sm:duration-300 '
                enterFrom='translate-x-[-100%]'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-300 sm:duration-300'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-[-100%]'
              >
                <Dialog.Panel className='pointer-events-auto w-screen '>
                  <div className='fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black'>
                    <div className='p-4 '>
                      <div className='flex items-start justify-between pt-[0.55rem]'>
                        <div className='flex h-7 items-center'>
                          <button
                            type='button'
                            className='relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white'
                            onClick={handleClose}
                          >
                            <span className='absolute -inset-0.5' />
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>
                      <div className='mb-4 w-full pt-[1.5rem]'>
                        <form action='' className='w-max-[550px] relative w-full lg:w-80 xl:w-full'>
                          <input
                            type='text'
                            placeholder='Search for products...'
                            autoComplete='off'
                            className='w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:to-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400'
                          />
                          <div className='absolute right-0 top-0 mr-3 flex h-full items-center'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              aria-hidden='true'
                              data-slot='icon'
                              className='h-4'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                              ></path>
                            </svg>
                          </div>
                        </form>
                      </div>
                      <ul className=' gap-6 text-sm md:flex md:items-center'>
                        <li>
                          <Link
                            to='/list-products'
                            className='py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white'
                          >
                            All
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/'
                            className='py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white'
                          >
                            Shirts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/'
                            className='py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white'
                          >
                            Stickers
                          </Link>
                        </li>
                      </ul>
                      {/* <div className='flex h-full flex-col justify-between overflow-hidden py-3'>
                        <ul className='flex-grow overflow-auto py-4'>
                          {products.map((product) => (
                            <li
                              key={product.id}
                              className='flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700'
                            >
                              <div className='relative flex w-full flex-row justify-between px-1 py-4'>
                                <div className='absolute z-40 -mt-2 ml-[55px]'>
                                  <form action=''>
                                    <button className='ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        aria-hidden='true'
                                        data-slot='icon'
                                        className='hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black'
                                      >
                                        <path
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          d='M6 18 18 6M6 6l12 12'
                                        ></path>
                                      </svg>
                                    </button>
                                  </form>
                                </div>
                                <Link to='/' className='z-30 flex flex-row space-x-4'>
                                  <div className='relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800'>
                                    <img
                                      loading='lazy'
                                      width={64}
                                      height={64}
                                      className='h-full w-full object-cover'
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                    />
                                  </div>
                                  <div className='flex flex-1 flex-col text-base'>
                                    <span className='leading-tight'>Acme Circles T-Shirt</span>
                                    <p className='text-sm text-neutral-500 dark:text-neutral-400'>White / S</p>
                                  </div>
                                </Link>
                                <div className='flex h-16 flex-col justify-between'>
                                  <p className='flex justify-end space-y-2 text-right text-sm'>
                                    15,00 $ <span className='ml-1 inline'>USD</span>
                                  </p>
                                  <div className='ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700'>
                                    <form action=''>
                                      <button
                                        type='submit'
                                        aria-label='Reduce item quantity'
                                        aria-disabled='false'
                                        className='ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto'
                                      >
                                        <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          fill='none'
                                          viewBox='0 0 24 24'
                                          strokeWidth='1.5'
                                          stroke='currentColor'
                                          aria-hidden='true'
                                          data-slot='icon'
                                          className='h-4 w-4 dark:text-neutral-500'
                                        >
                                          <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14'></path>
                                        </svg>
                                      </button>
                                    </form>
                                    <p className='w-6 text-center'>1</p>
                                    <form action=''>
                                      <button
                                        type='submit'
                                        aria-label='Reduce item quantity'
                                        aria-disabled='false'
                                        className='ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto'
                                      >
                                        <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          fill='none'
                                          viewBox='0 0 24 24'
                                          strokeWidth='1.5'
                                          stroke='currentColor'
                                          aria-hidden='true'
                                          data-slot='icon'
                                          className='h-4 w-4 dark:text-neutral-500'
                                        >
                                          <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M12 4.5v15m7.5-7.5h-15'
                                          ></path>
                                        </svg>
                                      </button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                       
                        <Link to='/'></Link>
                      </div> */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default HomeMobile
