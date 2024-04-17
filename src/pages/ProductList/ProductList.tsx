import React from 'react'

export default function ProductList() {
  return (
    <div className='container-2xl'>
      <div className='grid grid-cols-12'>
        <div className='col-span-2 bg-black'>
          sadasdasdsadas <br />
          sdasdsad <br />
          dasdsaasdsad <br />
          asdasdsad
        </div>
        <div className='col-span-8 bg-black text-center'>
          <div className='grid grid-cols-3 gap-2'>
            {/* Sản phẩm 1 */}
            <div className='p-2   w-376 h-[376px]'>
              <img
                src='https://cdn.pixabay.com/photo/2023/09/17/22/25/witch-8259351_1280.jpg'
                className='block w-full h-full object-cover'
                alt='Product 1'
              />
              {/* Thêm thông tin sản phẩm 1 tại đây */}
            </div>

            {/* Sản phẩm 2 */}
            <div className=' p-2   w-376 h-[376px]'>
              <img
                src='https://cdn.pixabay.com/photo/2023/11/09/09/05/unicorn-8376844_1280.jpg'
                className='block w-full h-full object-cover'
                alt='Product 2'
              />
              {/* Thêm thông tin sản phẩm 2 tại đây */}
            </div>

            {/* Sản phẩm 3 */}
            <div className='b p-2   w-376 h-[376px]'>
              <img
                src='https://cdn.pixabay.com/photo/2020/03/09/02/22/jellyfish-4914197_1280.jpg'
                alt='Product 3'
                className='block w-full h-full object-cover'
              />
              {/* Thêm thông tin sản phẩm 3 tại đây */}
            </div>
            <div className='p-2  rounded-lg border w-376 h-[376px]'>
              <img
                src='https://cdn.pixabay.com/photo/2023/12/22/09/51/ai-generated-8463482_1280.jpg'
                alt='Product 1'
                className='block w-full h-full object-cover'
              />
              {/* Thêm thông tin sản phẩm 1 tại đây */}
            </div>

            {/* Sản phẩm 2 */}
            <div className=' p-2  rounded-lg border  rounded-lg border w-376h h-[376px]'>
              <img
                src='https://cdn.pixabay.com/photo/2015/07/16/12/29/beach-847641_1280.jpg'
                alt='Product 2'
                className='block w-full h-full object-cover'
              />
              {/* Thêm thông tin sản phẩm 2 tại đây */}
            </div>

            {/* Sản phẩm 3 */}
            <div className='b p-2  rounded-lg border w-376 h-376'>
              <img src='https://via.placeholder.com/376' alt='Product 3' className='block w-full h-full object-cover' />
              {/* Thêm thông tin sản phẩm 3 tại đây */}
            </div>
          </div>
        </div>
        <div className='col-span-2 bg-black'>
          sadasdasdsadasd <br />
          sadasdasdsadasd <br />
          dasdsad <br />
          adsadasdas <br />
          sdasdsa
        </div>
      </div>
    </div>
  )
}
