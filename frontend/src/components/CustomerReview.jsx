import React from 'react'
import { Carousel, Avatar } from 'flowbite-react';
import { FaStar } from "react-icons/fa6";

const CustomerReview = () => {
    const bg_image = 'https://static.vecteezy.com/system/resources/previews/008/311/935/non_2x/the-illustration-graphic-consists-of-abstract-background-with-a-blue-gradient-dynamic-shapes-composition-eps10-perfect-for-presentation-background-website-landing-page-wallpaper-vector.jpg'


    return (
        <>
            <div className='h-[600px]' style={{ backgroundImage: `url(${bg_image})` }}>
                <div className="flex flex-col justify-center items-center w-full h-[570px] mb-20" >
                    <div className='text-3xl font-bold p-10 text-white'>Customer Review</div>
                    <Carousel className='shadow-lg md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 pb-14 bg-gray-200 rounded-lg'>
                        <span className='w-full h-full overflow-hidden '>
                            <span className='w-full flex justify-center items-center m-5'>
                                <img className='w-28 h-28 rounded-full border-4 border-orange-500' src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                            </span>
                            <span>
                                <p className='text-center text-sm lg:text-xl p-3 lg:p-5 xl:p-5 2xl-p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non provident quia magni sunt. Dolores odio beatae accusamus eveniet corporis minus quod reprehenderit nemo animi recusandae molestias inventore, laborum deleniti.</p>
                            </span>
                            <span className='flex justify-center items-center text-xl m-5'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                            <span className='flex justify-center items-center'>
                                <p>John Doe</p>
                            </span>
                        </span>

                        <span className='w-full h-full overflow-hidden bg-gray-200'>
                            <span className='w-full flex justify-center m-5'>
                                <img className='w-28 h-28 rounded-full border-4 border-orange-500' src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
                            </span>
                            <span>
                                <p className='text-center ttext-sm lg:text-xl p-3 lg:p-5 xl:p-5 2xl-p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non provident quia magni sunt. Dolores odio beatae accusamus eveniet corporis minus quod reprehenderit nemo animi recusandae molestias inventore, laborum deleniti.</p>
                            </span>
                            <span className='flex justify-center items-center text-xl m-5'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                            <span className='flex justify-center items-center'>
                                <p>John Doe</p>
                            </span>
                        </span>
                        <span className='w-full h-full overflow-hidden bg-gray-200'>
                            <span className='w-full flex justify-center m-5'>
                                <img className='w-28 h-28 rounded-full border-4 border-orange-500' src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="" />
                            </span>
                            <span>
                                <p className='text-center text-sm lg:text-xl p-3 lg:p-5 xl:p-5 2xl-p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non provident quia magni sunt. Dolores odio beatae accusamus eveniet corporis minus quod reprehenderit nemo animi recusandae molestias inventore, laborum deleniti.</p>
                            </span>
                            <span className='flex justify-center items-center text-xl m-5'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                            <span className='flex justify-center items-center'>
                                <p>John Doe</p>
                            </span>
                        </span>


                    </Carousel>
                </div>
            </div>

        </>
    )
}

export default CustomerReview