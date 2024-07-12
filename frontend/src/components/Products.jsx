import React, { Image } from 'react'
import { Card } from 'flowbite-react'

const Products = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className='text-2xl font-bold'>Our Products</div>
                <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-7 px-10 py-16'>
                    <div className="relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-64 overflow-hidden rounded-md">
                        <img
                            src="https://mikrotik.ci/wp-content/uploads/2023/03/home-mtk.png"
                            alt=""
                            className="w-full h-full hover:scale-110 duration-500"
                        />
                        <span className="absolute bottom-0 left-0 z-10 bg-blue-600 font-bold text-xl bg-opacity-60 text-white w-full text-center p-5 rounded-t-xl">
                            Networking
                        </span>
                    </div>

                    <div className="relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-64 overflow-hidden rounded-md">
                        <img
                            src="https://www.hubtech.co.ke/wp-content/uploads/blog-surveillance.jpg"
                            alt=""
                            className="w-full h-full hover:scale-110 duration-500"
                        />
                        <span className="absolute bottom-0 left-0 z-10 bg-blue-600 font-bold text-xl bg-opacity-60 text-white w-full text-center p-5 rounded-t-xl">
                            CCTV
                        </span>
                    </div>

                    <div className="relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-64 overflow-hidden rounded-md">
                        <img
                            src="https://cdn.rushordertees.com/design/ZoomImage.php?src=NTUyMTM2Mw_f&style=RT2000&colorCode=WHT&x=240&y=300&width=880&height=880&scale=1.7&watermark=false&autoInvertDesign=true"
                            alt=""
                            className="w-full h-full hover:scale-110 duration-500"
                        />
                        <span className="absolute bottom-0 left-0 z-10 bg-blue-600 font-bold text-xl bg-opacity-60 text-white w-full text-center p-5 rounded-t-xl">
                            Branding
                        </span>
                    </div>

                    <div className="relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-64 overflow-hidden rounded-md">
                        <img
                            src="https://5.imimg.com/data5/SO/HN/MY-11250422/luminous-solar-system-500x500.jpg"
                            alt=""
                            className="w-full h-full hover:scale-110 duration-500"
                        />
                        <span className="absolute bottom-0 left-0 z-10 bg-blue-600 font-bold text-xl bg-opacity-60 text-white w-full text-center p-5 rounded-t-xl">
                            Solar
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Products