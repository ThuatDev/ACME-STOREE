/* eslint-disable prettier/prettier */
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
  },
  {
    id:3,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
  }

  // More products...
]
const CartItem = ({ openDialog, handleClose }: { openDialog: boolean; handleClose: () => void }) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLElement) || !event.target.closest('.dialog-panel')) {
        handleClose();
      }
    };

    if (openDialog) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [openDialog, handleClose]);
  
  return (
    <Transition.Root show={openDialog} as={Fragment}>
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
          <div className='fixed inset-0 bg-black/30 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-300 sm:duration-300 '
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-300 sm:duration-300'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen '>
                  <div className='fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80 dark:text-white'>
                    <div className='flex-1 overflow-hidden  '>
                      <div className='flex items-start justify-between pt-2'>
                        <Dialog.Title className='text-lg font-semibold'>My cart</Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
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

                      <div className='flex h-full flex-col justify-between overflow-hidden py-3'>
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
                        <div className='py-4 text-sm text-neutral-500 dark:text-neutral-400'>
                          <div className='mb-3 flex items-center justify-between border-b border-neutral-700 pb-1 dark:border-neutral-7000'>
                            <p>Taxes</p>
                            <p className='text-right text-base text-black dark:text-white'>
                              $262.00 <span className='ml-1 inline'>USD</span>
                            </p>
                          </div>
                          <div className='mb-3 flex items-center justify-between border-b border-neutral-700 pb-1 dark:border-neutral-7000'>
                            <p>Shipping</p>
                            <p className='text-right'>Calculated at checkout</p>
                          </div>
                          <div className='mb-3 flex items-center justify-between border-b border-neutral-700 pb-1 dark:border-neutral-7000'>
                            <p>Total</p>
                            <p className='text-right text-base text-black dark:text-white'>
                              55,00 $ <span className='ml-1 inline'>USD</span>
                            </p>
                          </div>
                          <div className='mt-6'>
                            <Link
                              to='#'
                              className='block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100'
                            >
                              Proceed to Checkout
                            </Link>
                          </div>
                          <div className='mt-6 flex justify-center text-center text-sm text-gray-500'></div>
                        </div>
                        <Link to='/'></Link>
                      </div>
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
export default CartItem
