import React from 'react'
import { Carousel } from "flowbite-react"
// import Carousel from 'react-bootstrap/Carousel'

const Nevbar1 = () => {
  return (
    <div>
      <header className=' header1 w-[1525px] flex  justify-between h-[55px] items-center'>
        <div className='flex ml-7'>
          <div className='flex'>
            <img src="https://img.icons8.com/?size=100&id=yx83MQcqGF8s&format=png&color=000000" alt="" className='h-4 w-4 ml-1 mr-1 justify-center mt-2' />
            <h1 className=' '> (+39) 35 2568 4593</h1>
          </div>
          <div className='flex'>
            <img src="https://img.icons8.com/?size=100&id=Ww1lcGqgduif&format=png&color=000000  " alt="" className=' h-4 w-4 ml-5 mr-1 justify-center mt-2' />
            <h1 className=''>  hello@domain.com</h1>
          </div>
        </div>
        <div className='flex'>
          <h1 className=''>Free shipping on all orders over $79</h1>
          <button className='rounded-md h-[25px] w-[90px] ml-2 bg-orange-400 text-teal-50'>Shop Now!</button>
        </div>
        <div className='flex mr-6'>
          <div className='flex '>
            <p>English</p>
            <img className='size-3 ml-1 ' src="https://img.icons8.com/?size=100&id=40021&format=png&color=000000" alt="" />
          </div>
          <div className='flex  ml-4'>
            <p>Usd</p>
            <img className='size-3 ml-1 ' src="https://img.icons8.com/?size=100&id=40021&format=png&color=000000" alt="" />
          </div>
          <div className='flex ml-2 space-x-2'>
            <img className='size-5  ' src="https://img.icons8.com/?size=100&id=108776&format=png&color=000000" alt="" />
            <img className='size-5  ' src="https://img.icons8.com/?size=100&id=1bj89U1Ansyb&format=png&color=000000" alt="" />
            <img className='size-5  ' src="https://img.icons8.com/?size=100&id=1gjVGtsb2rxp&format=png&color=000000" alt="" />
            <img className='size-5  ' src="https://img.icons8.com/?size=100&id=uR8RO7t3oWlP&format=png&color=000000" alt="" />
            <img className='size-5  ' src="https://img.icons8.com/?size=100&id=xYhJGMNtK1SW&format=png&color=000000" alt="" />
          </div>
        </div>
      </header>
      <div className='header-2'>
        <div className='ml-7'>
          <img src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/05/logo_x2.png" alt="" className='logo' />
        </div>
        <div className='flex'>
          <h1 className=' text-10 ml-[230px] mr-12'>Home</h1>
          <h1 className=' text-10 mr-12'>Shop</h1>
          <h1 className=' text-10 mr-12'>Page</h1>
          <h1 className=' text-10 mr-12'>Blog</h1>
          <h1 className=' text-10'>Contact</h1>
          <img src="https://img.icons8.com/?size=100&id=60662&format=png&color=000000" alt="" className='h-4 w-4 mt-1 ml-1' />
        </div>
        <div className='flex'>
          <img src="https://img.icons8.com/?size=100&id=23264&format=png&color=000000" alt="" className='h-5 w-5 mr-1' />
          <h1 className='bbt1'>Login</h1>
          <h1 className='ml-1 mr-1'>/</h1>
          <h1 className='bbt1'>Register</h1>
          <h1 className='ml-6 mr-6 '>|</h1>
          <img src="https://img.icons8.com/?size=100&id=DxIsF9smUsRE&format=png&color=000000" alt="" className='h-6 w-6' />
          <img src="https://img.icons8.com/?size=100&id=21823&format=png&color=000000" alt="" className='h-5 w-5 ml-5' />
          <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="" className='h-5 w-5 ml-4 mr-10' />
        </div>
      </div>
      <div className='header-3'>
        <div className='line'></div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel className='h-[500px] '>

            {/* ****************** slide-1 ****************** */}

            <div className=''>
              <div className='absolute px-20 py-32 textmain1 textmain'>
                <div className=' '>
                  <div className='flex mb-2'>
                    <p className='font-bold'>Quick parcel delivery,</p>
                    <p className='text-yellow-600 font-bold'>from $25</p>
                  </div>
                  <h1 className='text-[45px] font-bold'>Normann Copenhagen -<br></br>Craft salt and pepper gririder</h1>
                  <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
                </div>
              </div>
              <div className="flex h-[500px] items-center justify-center  dark:text-white">
                <img className='h-[500px] w-screen' src="./public/slide1.jpg" alt="" />
              </div>
            </div>

            {/* ****************** slide-2 ****************** */}

            <div className=''>
              <div className='absolute px-20 py-32 textmain2 textmain'>
                <div className=' '>
                  <div className='flex mb-2'>
                    <p className='font-bold'>Quick parcel delivery,</p>
                    <p className='text-yellow-600 font-bold'>from $25</p>
                  </div>
                  <h1 className='text-[45px] font-bold'>Wood Minimal Office Chair<br></br>Extra 40% off now.</h1>
                  <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
                </div>
              </div>

              <div className="flex h-[500px]items-center justify-center dark:text-white">
                <img img className='h-[500px] w-screen' src="./public/slide2.jpg" alt="" />
              </div>
            </div>

            {/* ****************** slide-3 ****************** */}
            <div className=''>
              <div className='absolute px-20 py-32 textmain3 textmain'>
                <div className=' '>
                  <div className='flex mb-2'>
                    <p className='font-bold'>Quick parcel delivery,</p>
                    <p className='text-yellow-600 font-bold'>from $25</p>
                  </div>
                  <h1 className='text-[45px] font-bold'>Everyone's Talking About<br></br>Sweeper and funnel.</h1>
                  <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
                </div>
              </div>
              <div className="flex h-[500px] items-center justify-center dark:text-white">
                <img className='h-[500px] w-screen' src="./public/slide3.jpg" alt="" />
              </div>
            </div>
          </Carousel>
        </div>
      </div >
    </div >
  )
}

export default Nevbar1
