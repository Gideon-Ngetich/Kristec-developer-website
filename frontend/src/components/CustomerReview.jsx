import React from 'react'
import { Carousel, Avatar } from 'flowbite-react';
import { FaStar } from "react-icons/fa6";

const CustomerReview = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-[450px] mb-20">
                <div className='text-2xl font-bold pb-10'>Customer Review</div>
                <Carousel className='shadow-lg w-3/4'>
                    <span className='w-full h-full overflow-hidden bg-gray-200'>
                        <span className='w-full flex justify-center m-5'>
                            <img className='w-28 h-28 rounded-full border-4 border-orange-500' src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                        </span>
                        <span>
                            <p className='text-center text-xl p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non provident quia magni sunt. Dolores odio beatae accusamus eveniet corporis minus quod reprehenderit nemo animi recusandae molestias inventore, laborum deleniti.</p>
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
                            <p className='text-center text-xl p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non provident quia magni sunt. Dolores odio beatae accusamus eveniet corporis minus quod reprehenderit nemo animi recusandae molestias inventore, laborum deleniti.</p>
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
                            <p className='text-center text-xl p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non provident quia magni sunt. Dolores odio beatae accusamus eveniet corporis minus quod reprehenderit nemo animi recusandae molestias inventore, laborum deleniti.</p>
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
        </>
    )
}

export default CustomerReview