import React from 'react'
import Logo_scroll from './Logo_scroll'
import Footer from './Footer'

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
      <div className="">
        <div className="flex justify-center items-center text-[30px] mt-5">
          <h1 className="font-bold">From Our Blog </h1>
        </div>
        <div className="flex justify-center items-center mt-2">
          <p>
            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
            primis eget
          </p>
        </div>

        <div>
          <div className="flex justify-evenly items-center p-12 gap-9">
            <div className="text-start">
              <div className="flex">
                <img
                  className="h-[280px]"
                  src="public/image/interior1.jpg"
                  alt=""
                />
                <h1 className="ml-4 mt-4 absolute w-36 text-center text-white text-bold bg-orange-500 rounded-md">
                  CONSTRUCTION
                </h1>
                <h1 className="ml-44 mt-4 absolute w-28 text-center text-white text-bold bg-orange-500 rounded-md">
                  FURNITURE
                </h1>
              </div>
              <div className="flex mt-6">
                <p className="absolute font-bold text-orange-500">Admin</p>
                <p className="absolute ml-14 font-bold">.</p>
                <p className="text-gray-500 ml-16">December 21,2020</p>
              </div>
              <h1 className="font-bold text-2xl">
                Anteposuerit litterarum formas.
              </h1>
              <p className="text-gray-500">
                Ut suscipit velit ultrices dui tempus accumsan. Donec in metus
                et enim sagittis malesuada id ut eros. Nullam dictum in...
              </p>
              <div className="mt-6 flex h-12 w-36 text-center justify-center border-2 cursor-pointer rounded-md items-center hover:text-white bg-white hover:bg-[#ba933e]">
                <p>Read More</p>
              </div>
            </div>

            <div className="text-start">
              <div className="flex">
                <img
                  className="h-[280px]"
                  src="public/image/interior2.jpg"
                  alt=""
                />
                <h1 className="ml-4 mt-4 absolute w-36 text-center text-white text-bold bg-orange-500 rounded-md">
                  CONSTRUCTION
                </h1>
                <h1 className="ml-44 mt-4 absolute w-20 text-center text-white text-bold bg-orange-500 rounded-md">
                  TRAVEL
                </h1>
              </div>
              <div className="flex mt-6">
                <p className="absolute font-bold text-orange-500">Admin</p>
                <p className="absolute ml-14 font-bold">.</p>
                <p className="text-gray-500 ml-16">December 20,2020</p>
              </div>
              <h1 className="font-bold text-2xl">
                Stylish color scheme in interior
              </h1>
              <p className="text-gray-500">
                Ut suscipit velit ultrices dui tempus accumsan. Donec in metus
                et enim sagittis malesuada id ut eros. Nullam dictum in...
              </p>
              <div className="mt-6 flex h-12 w-36 text-center justify-center border-2 cursor-pointer rounded-md items-center hover:text-white bg-white hover:bg-[#ba933e]">
                <p>Read More</p>
              </div>
            </div>

            <div className="text-start">
              <div className="flex">
                <img
                  className="h-[280px]"
                  src="public/image/interior3.jpg"
                  alt=""
                />
                <h1 className="ml-4 mt-4 absolute w-28 text-center text-white text-bold bg-orange-500 rounded-md">
                  EDUCATION
                </h1>
                <h1 className="ml-36 mt-4 absolute w-28 text-center text-white text-bold bg-orange-500 rounded-md">
                  FURNITURE
                </h1>
              </div>
              <div className="flex mt-6">
                <p className="absolute font-bold text-orange-500">Admin</p>
                <p className="absolute ml-14 font-bold">.</p>
                <p className="text-gray-500 ml-16">December 19,2020</p>
              </div>
              <h1 className="font-bold text-2xl">
                The color scheme for bedrooms
              </h1>
              <p className="text-gray-500">
                Ut suscipit velit ultrices dui tempus accumsan. Donec in metus
                et enim sagittis malesuada id ut eros. Nullam dictum in...
              </p>
              <div className="mt-6 flex h-12 w-36 text-center justify-center border-2 cursor-pointer rounded-md items-center hover:text-white bg-white hover:bg-[#ba933e]">
                <p>Read More</p>
              </div>
            </div>
          </div>

          <Logo_scroll/>
          <Footer/>
        </div>
      </div>
    </div>


  )
}

export default Page2