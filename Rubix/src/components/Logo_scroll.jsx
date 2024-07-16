import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Logo_scroll = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container">
            <div className='flex justify-center mt-14 '>
                <div className='w-[1340px] h-[226px] '>
                    <div className='flex border-y-[1px] '></div>
                    <Slider {...settings}>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/04/brand222.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/04/brand333.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/04/brand4.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/04/brand5.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/04/brand6.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/04/brand111.jpg" alt="" />
                            </div>
                        </div>
                    </Slider>
                    <div className='flex border-y-[1px] '></div>
                </div>
            </div>
        </div>
    );
}

export default Logo_scroll;