import React from 'react'

const Page2 = () => {
  return (
    <div className='mt-[90px] ml-20'>
      <div className='flex gap-[40px]'>
        <div className='image-container relative'>
          <img className='w-[670px] h-[380px]' src="public/image/banner1.jpg" alt="" />
          <div className='absolute top-14 flex left-10'>
            <h1 className='font-bold text-[22px]'>Quick parcel delivery ,</h1>
            <p className='text-[#ba933e] font-bold text-[22px]'> from $25</p>
          </div>
          <div className='absolute top-[90px] left-10 text-[35px]'>
            <h1 className='font-bold'>Up to 70% off</h1>
            <h1 className='font-bold'>Intrio Home Decor</h1>
          </div>
          <div className='absolute top-[190px] left-10'>
            <h1 className=''>Class aptent taciti socisoqu ad litora</h1>
          </div>
          <div className='absolute top-[230px] left-10 flex'>
            <button className='bg-black text-white h-14 w-56'>Shop Collection</button>
          </div>
        </div>
        <div className='image-container relative'>
          <img className='w-[670px] h-[380px]' src="public/image/banner2.jpg" alt="" />
          <div className='absolute top-14 flex left-10 '>
            <h1 className='font-bold text-[22px] text-white'>Quick parcel delivery ,</h1>
            <p className='text-[#ba933e] font-bold text-[22px]'> from $25</p>
          </div>
          <div className='absolute top-[90px] left-10 text-[35px] text-white'>
            <h1 className='font-bold'>Up to 70% Sale off</h1>
            <h1 className='font-bold'>Pendent Lamp</h1>
          </div>
          <div className='absolute top-[190px] left-10 text-white'>
            <h1 className=''>Class aptent taciti socisoqu ad litora torquent per</h1>
          </div>
          <div className='absolute top-[230px] left-10 flex'>
            <button className='bg-black text-white h-14 w-56'>Shop Collection</button>
          </div>
        </div>
      </div>
      <div className='flex mt-4'>
        <div className='flex'>
          <div className='image-container relative'>
            <img className='w-[325px] ' src="public/image/banner3.jpg" alt="" />
            <div className='absolute top-8 left-10'>
              <h1 className='font-bold text-[25px]' >Turing Table</h1>
              <p className='mt-1'>Class aptent taciti sociosqu</p>
              <h1 className='text-[#ba933e] font-bold mt-1 text-[16px] underline'>From$49.59</h1>
            </div>
          </div>
          <div className='image-container ml-5 relative'>
            <img className='w-[325px]' src="public/image/banner4.jpg" alt="" />
            <div className='absolute top-8 left-10'>
              <h1 className='font-bold text-[25px]' >Wood Chair</h1>
              <p className='mt-1'>Class aptent taciti sociosqu</p>
              <h1 className='text-[#ba933e] font-bold mt-1 text-[16px] underline'>Extra 40% off</h1>
            </div>
          </div>
          <div className='image-container ml-10 relative'>
            <img className='w-[670px]' src="public/image/banner5.jpg" alt="" />
            <div className='absolute top-8 left-10'>
              <h1 className='font-bold text-[25px]' >Modern Nutshell Lounge Chair</h1>
              <p className='mt-1'>Class aptent taciti sociosqu ad litora torquent per</p>
              <h1 className='text-[#ba933e] font-bold mt-1 text-[16px] underline'>Extra 20% off</h1>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Page2