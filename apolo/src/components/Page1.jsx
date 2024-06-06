import React from 'react'
import { CiHeart } from "react-icons/ci";
import { HiAdjustments } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi2";
import { BsHandbag } from "react-icons/bs";


const Page1 = () => {
    return (
        <div className=''>
            <div className=''>
                <div className='mt-16'>
                    <h1 className='flex justify-center font-bold text-3xl'>Trending Products</h1>
                    <p className='flex justify-center items-center mt-2'>Top View In This Week</p>
                </div>
            </div>

            <div className='mt-4 flex justify-center gap-[30px]'>
                <div className=''>
                    <div className='relative'>
                        <img className='h-[400px] rounded-sm' src="./public/image/1.jpg" alt="" />
                        <div className='inner absolute'>
                            <img className='h-[400px] rounded-sm' src="./public/image/1.2.jpg" alt="" />
                            <div className='bg-white h-11 w-11 absolute top-4 left-[260px]'>
                                <div className='hover:bg-[#ba933e] h-11 w-11 flex justify-center items-center rounded-md'>
                                    <CiHeart className='h-8 w-8 hover:text-white' />
                                </div>
                            </div>
                            <div className='bg-white h-11 w-11 absolute top-[70px] left-[260px] rounded-md'>
                                <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                                    <HiAdjustments className='h-8 w-8 hover:text-white' />
                                </div>
                            </div>
                            <div className='bg-white h-11 w-11 absolute top-[122px] left-[260px] rounded-md'>
                                <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                                    <HiOutlineEye className='h-8 w-8 hover:text-white' />
                                </div>
                            </div>
                            <div className='absolute bottom-4 left-6 bg-black text-white h-[50px] w-[270px] rounded-md '>
                                <div className='h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold'>
                                    <BsHandbag className='h-4 w-4 mr-2' />
                                    <button className=''>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <button className='top-[20px] left-5 absolute h-7 w-14 rounded-md bg-[#ba933e] text-white'>Sale!</button>
                    </div>

                    <div className='mt-3'>
                        <p className='font-bold'>Turning Table</p>
                        <div className='flex text-sm'>
                            <p className='line-through text-gray-500'>$57.00</p>
                            <p className='text-[#ba933e] ml-2'>$52.00</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className=' relative'>
                        <img className='h-[400px] rounded-sm' src="./public/image/2.jpg" alt='' />
                        <div className='inner absolute'>
                            <img className='h-[400px] rounded-sm' src="./public/image/2.2.jpg" alt="" />
                            <div className='bg-white h-11 w-11 absolute top-4 left-[260px]'>
                                <div className='hover:bg-[#ba933e] h-11 w-11 flex justify-center items-center rounded-md'>
                                    <CiHeart className='h-8 w-8 hover:text-white' />
                                </div>
                            </div>
                            <div className='bg-white h-11 w-11 absolute top-[70px] left-[260px] rounded-md'>
                                <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                                    <HiAdjustments className='h-8 w-8 hover:text-white' />
                                </div>
                            </div>
                            <div className='bg-white h-11 w-11 absolute top-[122px] left-[260px] rounded-md'>
                                <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                                    <HiOutlineEye className='h-8 w-8 hover:text-white' />
                                </div>
                            </div>
                            <div className='absolute bottom-4 left-6 bg-black text-white h-[50px] w-[270px] rounded-md '>
                                <div className='h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold'>
                                    <BsHandbag className='h-4 w-4 mr-2' />
                                    <button className=''>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <button className='top-[20px] left-5 absolute h-7 w-14 rounded-md bg-[#ba933e] text-white'>Sale!</button>
                    </div>

                    <div className='mt-3'>
                        <p className='font-bold'>Beoplay A1</p>
                        <div className='flex text-sm'>
                            <p className='line-through text-gray-500'>$49.00</p>
                            <p className='text-[#ba933e] ml-2'>$32.00</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[400px] rounded-sm' src="public/image/3.jpg" alt="" />
                    <div className='inner absolute'>
                        <div className='bg-white h-11 w-11 absolute top-4 left-[260px]'>
                            <div className='hover:bg-[#ba933e] h-11 w-11 flex justify-center items-center rounded-md'>
                                <CiHeart className='h-8 w-8 hover:text-white' />
                            </div>
                        </div>
                        <div className='bg-white h-11 w-11 absolute top-[70px] left-[260px] rounded-md'>
                            <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                                <HiAdjustments className='h-8 w-8 hover:text-white' />
                            </div>
                        </div>
                        <div className='bg-white h-11 w-11 absolute top-[122px] left-[260px] rounded-md'>
                            <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                                <HiOutlineEye className='h-8 w-8 hover:text-white' />
                            </div>
                        </div>
                        <div className='absolute top-[330px] left-6 bg-black text-white h-[50px] w-[270px] rounded-md '>
                            <div className='h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold'>
                                <BsHandbag className='h-4 w-4 mr-2' />
                                <button className=''>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-3'>
                        <p className='font-bold'>Stainless steel teapot</p>
                        <div className='flex text-sm'>
                            <p className='text-gray-500'>$18.00</p>
                            <p className='ml-1'>-</p>
                            <p className='ml-1 text-gray-500'>$39.00</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='relative'>
                        <img className='h-[400px] rounded-sm' src="public/image/4.jpg" alt="" />
                        <div className='inner absolute'>
                            <img className='h-[400px] rounded-sm' src="./public/image/4.2.jpg" alt="" />
                            <div className='bg-white h-11 w-11 absolute top-4 left-[260px]'>
                                <div className='hover:bg-[#ba933e] h-11 w-11 flex justify-center items-center rounded-md'>
                                    <CiHeart className='h-8 w-8 hover:text-white' />
                                </div>
                            </div>
                            <div className='bg-white h-11 w-11 absolute top-[70px] left-[260px] rounded-md'>
                                <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                                    <HiAdjustments className='h-8 w-8 hover:text-white' />
                                </div>
                            </div>
                            <div className='bg-white h-11 w-11 absolute top-[122px] left-[260px] rounded-md'>
                                <div className='hover:bg-[#ba933e] flex justify-center items-center rounded-md h-11 w-11'>
                                    <HiOutlineEye className='h-8 w-8 hover:text-white' />
                                </div>
                            </div>
                            <div className='absolute top-[330px] left-6 bg-black text-white h-[50px] w-[270px] rounded-md '>
                                <div className='h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold'>
                                    <BsHandbag className='h-4 w-4 mr-2' />
                                    <button className=''>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-3'>
                        <p className='font-bold'>Pilke 60 Pendant Lamp</p>
                        <div className='flex text-sm'>
                            <p className='text-gray-500'>$39.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page1 