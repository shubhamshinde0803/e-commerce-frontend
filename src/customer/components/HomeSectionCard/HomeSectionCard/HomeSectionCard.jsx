import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>

        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src='https://assets.ajio.com/medias/sys_master/root/20231110/bOHE/654e4d82ddf77915197dd666/-473Wx593H-466728451-green-MODEL.jpg' alt=''/>

        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>URBAN BUCCACHI</h3>
            <p className='mt-2 text-sm text-gray-500'>Men Striped Regular Fit Shirt</p>
        </div>
    </div>
  )
}

export default HomeSectionCard