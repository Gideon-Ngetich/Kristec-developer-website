"use client";
import React from 'react'
import { Carousel } from "flowbite-react";
import bg1 from '../assets/bg-1.jpg'

const Slider = () => {
    return (
        <div className="h-[500px] sm:h-[500px] xl:h-[500px] 2xl:h-[500px]">
            <Carousel>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="absolute w-full h-full flex flex-col items-center justify-center z-10 bg-black bg-opacity-50">
                        <p className="text-white">GET QUALITY</p>
                        <p className="text-bold text-5xl " style={{fontFamily: 'anton-sc'}}>Unlimited Home WI-FI</p>
                        <p className="text-bold text-5xl ">Solution</p>
                    </div>
                    <img src="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="carousel-img" className="w-full h-full object-cover relative" />
                </div>

                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="absolute w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-50">
                        <p className="text-white">Overlay Content</p>
                    </div>
                    <img src="https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="carousel-img" className="w-full h-full object-cover relative" />
                </div>

                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="absolute w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-50">
                        <p className="text-white">Overlay Content</p>
                    </div>
                    <img src="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="carousel-img" className="w-full h-full object-cover relative" />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider