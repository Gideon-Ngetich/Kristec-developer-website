"use client";
import React from 'react'
import { Carousel } from "flowbite-react";
import bg1 from '../assets/bg-1.jpg'

const Slider = () => {
    return (
        <div className="h-[500px] sm:h-[500px] xl:h-[500px] 2xl:h-[500px]">
            <Carousel className='rounded-none'>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="absolute w-full h-full flex flex-col gap-0 md:gap-2 lg:gap-3 xl:gap-3 items-start justify-center pl-12 lg:pl-24 xl:pl-24 2xl:pl-24 z-10 bg-black bg-opacity-50">
                        <p className="text-white text-lg md:text-xl lg:text-xl xl:text-xl  font-bold">GET QUALITY </p>
                        <p className="text-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-orange-600" style={{ fontFamily: 'kanit' }}>Unlimited Home WI-FI</p>
                        <p className="text-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white">Solution</p>
                    </div>
                    <img src="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="carousel-img" className="w-full h-full object-cover relative" />
                </div>

                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="absolute w-full h-full flex flex-col gap-0 md:gap-2 lg:gap-3 xl:gap-3 items-start justify-center pl-12 lg:pl-24 xl:pl-24 2xl:pl-24 z-10 bg-black bg-opacity-50">
                        <p className="text-white text-lg md:text-xl lg:text-xl xl:text-xl  font-bold">GET THE BEST </p>
                        <p className="text-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-orange-600" style={{ fontFamily: 'kanit' }}>WI-FI Hotspot</p>
                        <p className="text-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white">Solution</p>
                    </div>
                    <img src="https://img.freepik.com/free-vector/wireless-network-symbol-wifi-abstract-low-poly-wireframe-mesh-design-from-connecting-dot-line-vector-illustrationfuturistic-design-dark-blue-background_587448-958.jpg" alt="carousel-img" className="w-full h-full object-cover relative" />
                </div>

                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="absolute w-full h-full flex flex-col gap-0 md:gap-2 lg:gap-3 xl:gap-3 items-start justify-center pl-12 lg:pl-24 xl:pl-24 2xl:pl-24 z-10 bg-black bg-opacity-50">
                        <p className="text-white text-lg md:text-xl lg:text-xl xl:text-xl  font-bold">GET THE BEST </p>
                        <p className="text-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-orange-600" style={{ fontFamily: 'kanit' }}>Home and Business Security</p>
                        <p className="text-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white">Solution</p>
                    </div>
                    <img src="https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="carousel-img" className="w-full h-full object-cover relative" />
                </div>

                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="absolute w-full h-full flex flex-col gap-0 md:gap-2 lg:gap-3 xl:gap-3 items-start justify-center pl-12 lg:pl-24 xl:pl-24 2xl:pl-24 z-10 bg-black bg-opacity-50">
                        <p className="text-white text-lg md:text-xl lg:text-xl xl:text-xl  font-bold">GET THE BEST </p>
                        <p className="text-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-orange-600" style={{ fontFamily: 'kanit' }}>Personal and Company Website</p>
                        <p className="text-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white">Solution</p>
                    </div>
                    <img src="https://www.sectorlink.com/img/blog/web-devel-important.jpg" alt="carousel-img" className="w-full h-full object-cover relative" />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider