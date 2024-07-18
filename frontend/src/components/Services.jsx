import React from 'react'
import Nav from './Navbar'
import ServiceData from '../../Data/ServicesData.json'

const Services = () => {
    return (
        <>
            <div className='flex flex-col py-16 px-8 justify-center  items-center'>
                <div className='text-2xl font-bold' style={{ fontFamily: 'pacifico' }}>~ Our Services ~</div>
                <div className='flex flex-col lg:grid md:grid xl:grid grid-rows-2 grid-cols-2 gap-5 md:gap-5 w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4 py-10'>
                    {
                        ServiceData && ServiceData.map((content) => {
                            return (
                                <div className='flex flex-col gap-2 lg:gap-5 pb-10 px-0 rounded-md h-[580px] w-full shadow-xl'>
                                    <div className='h-[300px]'>
                                        <img src={content.image} alt="" className='w-full h-60' />
                                    </div>
                                    <div className='flex flex-col gap-5 md:gap-2 h-3/4 px-5'>

                                        <span className='font-bold text-xl'>
                                            {content.title}
                                        </span>
                                        <span className='text-sm lg:text-lg xl:text-lg'>
                                            {content.body}
                                        </span>
                                        <span className='flex justify-start items-center py-8 lg:py-3 xl:py-3'>
                                            <a href='/services' className='px-5 text-blue-700 cursor-pointer hover:text-blue-800 duration-75'>Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                        </span>
                                    </div>
                                </div>



                            )
                        })
                    }
                </div>
                {/* <div className='flex flex-col lg:grid md:grid xl:grid grid-rows-2 grid-cols-2 gap-5 md:gap-5 w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4 py-10'>
                    <div className='flex flex-col gap-2 lg:gap-5 pb-10 px-0 rounded-md h-[580px] w-full shadow-xl'>

                        <div className='h-[300px]'>
                            <img src="https://www.seekpng.com/png/detail/991-9914803_who-we-are-network-infrastructure.png" alt="" className='w-full h-60' />
                        </div>
                        <div className='flex flex-col gap-5 md:gap-2 h-3/4 px-5'>

                            <span className='font-bold text-xl'>
                                Network design, impementation and Management
                            </span>
                            <span className='text-sm lg:text-lg xl:text-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis labore eligendi, consequatur a facere mollitia commodi voluptatem? Commodi expedita possimus tempore doloribus! Totam, deserunt harum possimus consectetur provident corrupti earum!
                            </span>
                            <span className='flex justify-start items-center py-8 lg:py-3 xl:py-3'>
                                <a className='px-5 text-blue-700 cursor-pointer hover:text-blue-800 duration-75'>Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 lg:gap-5 pb-10 px-0 rounded-md h-[580px] w-full shadow-xl'>
                        <div className='h-[300px]'>
                            <img src="https://img.freepik.com/free-vector/surveillance-camera-futuristic-illustration_1284-62476.jpg" alt="" className='w-full h-60' />
                        </div>
                        <div className='flex flex-col gap-5 md:gap-2 h-3/4 px-5'>
                            <span className='font-bold text-xl'>
                                CCTV Installation
                            </span>
                            <span className='text-sm lg:text-xl xl:text-xl'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis labore eligendi, consequatur a facere mollitia commodi voluptatem? Commodi expedita possimus tempore doloribus! Totam, deserunt harum possimus consectetur provident corrupti earum!
                            </span>
                            <span className='flex justify-start items-center py-8 lg:py-3 xl:py-3'>
                                <a className='px-5 text-blue-700 cursor-pointer hover:text-blue-800 duration-75'>Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 lg:gap-5 pb-10 px-0 rounded-md h-[580px] w-full shadow-xl'>
                        <div className='h-[300px]'>
                            <img src="https://e1.pxfuel.com/desktop-wallpaper/345/167/desktop-wallpaper-solar-panels-solar-energy.jpg" alt="" className='w-full h-60' />
                        </div>
                        <div className='flex flex-col gap-5 md:gap-2 h-3/4 px-5'>
                            <span className='font-bold text-xl'>
                                Solar Installation and Maintenance
                            </span>
                            <span className='text-sm lg:text-xl xl:text-xl'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis labore eligendi, consequatur a facere mollitia commodi voluptatem? Commodi expedita possimus tempore doloribus! Totam, deserunt harum possimus consectetur provident corrupti earum!
                            </span>
                            <span className='flex justify-start items-center py-8 lg:py-3 xl:py-3'>
                                <a className='px-5 text-blue-700 cursor-pointer hover:text-blue-800 duration-75'>Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 lg:gap-5 pb-10 px-0 rounded-md h-[580px] w-full shadow-xl'>
                        <div className='h-[300px]'>
                            <img src="https://w0.peakpx.com/wallpaper/948/459/HD-wallpaper-seo-lietuva-lithuanian-seo-company-digital-marketing-agency-lithuania.jpg" alt="" className='w-full h-60' />
                        </div>
                        <div className='flex flex-col gap-5 md:gap-2 h-3/4 px-5'>
                            <span className='font-bold text-xl'>
                                Marketing and Branding
                            </span>
                            <span className='text-sm lg:text-xl xl:text-xl'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis labore eligendi, consequatur a facere mollitia commodi voluptatem? Commodi expedita possimus tempore doloribus! Totam, deserunt harum possimus consectetur provident corrupti earum!
                            </span>
                            <span className='flex justify-start items-center py-8 lg:py-3 xl:py-3'>
                                <a className='px-5 text-blue-700 cursor-pointer hover:text-blue-800 duration-75'>Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            </span>
                        </div>
                    </div>




                </div> */}
            </div>
        </>

    )
}

export default Services