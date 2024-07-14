import React from 'react'
import Nav from '../components/Navbar'
import PageFooter from '../components/Footer'

const Services = () => {
    const bgImg = 'https://ashburnconsulting.com/wp-content/uploads/2022/10/network-eng-1.png'
    const bckImg = 'https://wallpapers.com/images/hd/abstract-soft-lines-white-screen-fb9bbohx0315k4d1.jpg'


    return (
        <>
            <div>
                <Nav />
            </div>
            <div className='bg-repeat-y' style={{backgroundImage: `url(${bckImg})`}}>
                {/* <div className='relative h-96 w-full'>
                <img src={bgImg} alt="" className='absolute right-0 w-1/2 h-full object-cover' />
                <span className='absolute flex justify-center items-center text-3xl font-bold w-1/2 h-full p-4 bg-white rounded-br-full rounded-tr-full' style={{ bottom: '0%', left: '15%' }}>
                    SERVICES
                </span>
            </div> */}
                <div
                    className="bg-cover bg-fixed bg-opacity-100 h-80 md:h-96 lg:h-120 xl:h-160 w-full flex justify-center items-center"
                    style={{ backgroundImage: `url(${bgImg})` }}
                >
                    <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">
                        SERVICES
                    </p>
                </div>

                <div className='my-24'>
                    <div className='w-full mx-3 md:mx-16 lg:mx-16 xl:mx-16 2xl:mx-16 border-l-4 p-2 text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold border-blue-600'>Network design, Implementation and Management</div>
                    <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row w-full gap-10 h-1/4  my-10 '>
                        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                            <img src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701554497.jpg' alt="" className='md:rounded-tr-full lg:rounded-tr-full xl:rounded-tr-full 2xl:rounded-tr-full md:rounded-br-full lg:rounded-br-full xl:rounded-br-full 2xl:rounded-br-full h-full w-full' />
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex flex-col gap-10 m-0 md:m-5 lg:m-5 xl:m-5 2xl:m-5 px-5 md:px-12 lg:px-12 xl:px-12 2xl:p-12'>
                            <span className=''>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatibus praesentium ut ad assumenda, nam excepturi? Ea numquam accusantium itaque facere cumque ab illum nihil eveniet dolor officiis? Veniam dicta atque, optio nihil numquam placeat. Nesciunt velit reprehenderit necessitatibus libero sint autem ullam voluptas nisi incidunt fugiat non, ipsum eveniet, dignissimos officia? Vel blanditiis odit beatae amet voluptatem, excepturi fugiat reprehenderit recusandae maiores ipsa, quia saepe quisquam eligendi incidunt eos cupiditate itaque. Dolor atque, sint et deserunt explicabo itaque delectus.
                            </span>
                            <span className='text-blue-700 font-bold font tracking-wide cursor-pointer hover:text-blue-800 duration-200 md:px-10 px-5 lg:px-10 xl:px-10 2xl:px-10'>
                                Get Service
                                <i class="fa fa-long-arrow-right pl-2" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='my-24'>
                    <div className='w-full mx-3 md:mx-16 lg:mx-16 xl:mx-16 2xl:mx-16 border-l-4 p-2 text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold border-blue-600'>CCTV Installation and Maintenance</div>
                    <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-col-reverse w-full gap-10 h-1/4  my-10' >
                        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                            <img src='https://img.freepik.com/premium-photo/group-security-cameras-cctv-cameras_1036975-56652.jpg' alt="" className='md:rounded-tr-full lg:rounded-tr-full xl:rounded-tr-full 2xl:rounded-tr-full md:rounded-br-full lg:rounded-br-full xl:rounded-br-full 2xl:rounded-br-full h-full w-full' />
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex flex-col gap-10 m-0 md:m-5 lg:m-5 xl:m-5 2xl:m-5 px-5 md:px-12 lg:px-12 xl:px-12 2xl:p-12'>
                            <span>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatibus praesentium ut ad assumenda, nam excepturi? Ea numquam accusantium itaque facere cumque ab illum nihil eveniet dolor officiis? Veniam dicta atque, optio nihil numquam placeat. Nesciunt velit reprehenderit necessitatibus libero sint autem ullam voluptas nisi incidunt fugiat non, ipsum eveniet, dignissimos officia? Vel blanditiis odit beatae amet voluptatem, excepturi fugiat reprehenderit recusandae maiores ipsa, quia saepe quisquam eligendi incidunt eos cupiditate itaque. Dolor atque, sint et deserunt explicabo itaque delectus.
                            </span>
                            <span className='text-blue-700 font-bold font tracking-wide cursor-pointer hover:text-blue-800 duration-200 md:px-10 px-5 lg:px-10 xl:px-10 2xl:px-10'>
                                Get Service
                                <i class="fa fa-long-arrow-right pl-2" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='my-24'>
                    <span className='mx-16 border-l-4 p-3 text-2xl font-bold border-blue-600'>Solar Installation and Maintenace</span>
                    <div className='flex w-full gap-10 h-1/4  my-10'>
                        <div className='w-1/2'>
                            <img src='https://5.imimg.com/data5/WE/DI/MY-6927948/58-kwp-solar-plant.jpg' alt="" className='rounded-tr-full rounded-br-full h-full w-full' />
                        </div>
                        <div className='w-1/2 flex flex-col gap-10 m-5 px-12'>
                            <span>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatibus praesentium ut ad assumenda, nam excepturi? Ea numquam accusantium itaque facere cumque ab illum nihil eveniet dolor officiis? Veniam dicta atque, optio nihil numquam placeat. Nesciunt velit reprehenderit necessitatibus libero sint autem ullam voluptas nisi incidunt fugiat non, ipsum eveniet, dignissimos officia? Vel blanditiis odit beatae amet voluptatem, excepturi fugiat reprehenderit recusandae maiores ipsa, quia saepe quisquam eligendi incidunt eos cupiditate itaque. Dolor atque, sint et deserunt explicabo itaque delectus.
                            </span>
                            <span className='text-blue-700 font-bold font tracking-wide cursor-pointer hover:text-blue-800 duration-200 px-10'>
                                Get Service
                                <i class="fa fa-long-arrow-right pl-2" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='my-24'>
                    <span className='mx-16 border-l-4 p-3 text-2xl font-bold border-blue-600'>Marketing and Branding</span>
                    <div className='flex flex-row-reverse w-full gap-10 h-1/4  my-10' >
                        <div className='w-1/2'>
                            <img src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm01MC0zNjAtdG9uZy0wMy1kaWdpdGFsLmpwZw.jpg' alt="" className='rounded-tl-full rounded-bl-full h-full w-full' />
                        </div>
                        <div className='w-1/2 flex flex-col gap-10 m-5 px-12'>
                            <span>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatibus praesentium ut ad assumenda, nam excepturi? Ea numquam accusantium itaque facere cumque ab illum nihil eveniet dolor officiis? Veniam dicta atque, optio nihil numquam placeat. Nesciunt velit reprehenderit necessitatibus libero sint autem ullam voluptas nisi incidunt fugiat non, ipsum eveniet, dignissimos officia? Vel blanditiis odit beatae amet voluptatem, excepturi fugiat reprehenderit recusandae maiores ipsa, quia saepe quisquam eligendi incidunt eos cupiditate itaque. Dolor atque, sint et deserunt explicabo itaque delectus.
                            </span>
                            <span className='text-blue-700 font-bold font tracking-wide cursor-pointer hover:text-blue-800 duration-200 px-10'>
                                Get Service
                                <i class="fa fa-long-arrow-right pl-2" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='my-24'>
                    <span className='mx-16 border-l-4 p-3 text-2xl font-bold border-blue-600'>Website and Web Application Development</span>
                    <div className='flex w-full gap-10 h-1/4 my-10'>
                        <div className='w-1/2'>
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/003/343/387/small_2x/desktop-source-code-and-wallpaper-by-coding-and-programming-free-photo.jpg' alt="" className='rounded-tr-full rounded-br-full h-full w-full' />
                        </div>
                        <div className='w-1/2 flex flex-col gap-10 m-5 px-12'>
                            <span>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatibus praesentium ut ad assumenda, nam excepturi? Ea numquam accusantium itaque facere cumque ab illum nihil eveniet dolor officiis? Veniam dicta atque, optio nihil numquam placeat. Nesciunt velit reprehenderit necessitatibus libero sint autem ullam voluptas nisi incidunt fugiat non, ipsum eveniet, dignissimos officia? Vel blanditiis odit beatae amet voluptatem, excepturi fugiat reprehenderit recusandae maiores ipsa, quia saepe quisquam eligendi incidunt eos cupiditate itaque. Dolor atque, sint et deserunt explicabo itaque delectus.
                            </span>
                            <span className='text-blue-700 font-bold font tracking-wide cursor-pointer hover:text-blue-800 duration-200 px-10'>
                                Get Service
                                <i class="fa fa-long-arrow-right pl-2" aria-hidden="true"></i>
                            </span>
                        </div>

                    </div>

                </div>

                <div>
                    <PageFooter />
                </div>
            </div>

        </>
    )
}

export default Services