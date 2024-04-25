/* eslint-disable prettier/prettier */
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const HomeMobile = ({
  openMenuDialog,
  handleClose,
  handleSearchChange,
  handleSearchSubmit,
  searchValue
}: {
  openMenuDialog: boolean
  handleClose: () => void
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  searchValue: any
}) => {
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
                        <form
                          action=''
                          className='w-max-[550px] relative w-full lg:w-80 xl:w-full'
                          onSubmit={handleSearchSubmit}
                        >
                          <input
                            type='text'
                            placeholder='Search for products...'
                            autoComplete='off'
                            onChange={handleSearchChange}
                            value={searchValue}
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
                        <li className='py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white'>
                          <Link to='/list-products' onClick={handleClose}>
                            All
                          </Link>
                        </li>
                        <li className='py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white'>
                          <Link to='/'>Shirts</Link>
                        </li>
                        <li className='py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white'>
                          <Link to='/'>Stickers</Link>
                        </li>
                      </ul>
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
