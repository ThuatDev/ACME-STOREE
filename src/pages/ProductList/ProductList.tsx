import React from 'react'

export default function ProductList() {
  return (
    <div className='container-2xl'>
      <div className='grid grid-cols-12'>
        <div className='col-span-2 bg-slate-800'>sadasdasdsadasd</div>
        <div className='col-span-8 bg-slate-800 text-center'>
          <div className='grid grid-cols-3 gap-2'>
            {/* Sản phẩm 1 */}
            <div className='p-2  rounded-lg border'>
              <img src='https://via.placeholder.com/376' className='w-full' alt='Product 1' />
              {/* Thêm thông tin sản phẩm 1 tại đây */}
            </div>

            {/* Sản phẩm 2 */}
            <div className=' p-2  rounded-lg border  rounded-lg border'>
              <img src='https://via.placeholder.com/376' alt='Product 2' />
              {/* Thêm thông tin sản phẩm 2 tại đây */}
            </div>

            {/* Sản phẩm 3 */}
            <div className='b p-2  rounded-lg border  rounded-lg border'>
              <img src='https://via.placeholder.com/376' alt='Product 3' />
              {/* Thêm thông tin sản phẩm 3 tại đây */}
            </div>
            <div className='p-2  rounded-lg border  rounded-lg border '>
              <img src='https://via.placeholder.com/376' alt='Product 1' />
              {/* Thêm thông tin sản phẩm 1 tại đây */}
            </div>

            {/* Sản phẩm 2 */}
            <div className=' p-2  rounded-lg border  rounded-lg border'>
              <img src='https://via.placeholder.com/376' alt='Product 2' />
              {/* Thêm thông tin sản phẩm 2 tại đây */}
            </div>

            {/* Sản phẩm 3 */}
            <div className='b p-2  rounded-lg border'>
              <img src='https://via.placeholder.com/376' alt='Product 3' />
              {/* Thêm thông tin sản phẩm 3 tại đây */}
            </div>
          </div>
        </div>
        <div className='col-span-2 bg-slate-800'>sadasdasdsadasd</div>
      </div>
    </div>
  )
}
