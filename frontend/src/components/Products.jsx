import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProdactsData from '../../Data/ProductsData.json'


const Products = () => {
    const navigate = useNavigate();

    function handleClick(){
        navigate('/products')
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className='text-2xl font-bold' style={{ fontFamily: 'pacifico' }}>~ Our Products ~</div>
                <div onClick={handleClick} className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-7 px-10 py-16 cursor-pointer'>
                    {
                        ProdactsData && ProdactsData.map((content) => {
                            return (
                                <div className="relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-64 overflow-hidden rounded-md">
                                    <img
                                        src={content.image}
                                        alt=""
                                        className="w-full h-full hover:scale-110 duration-500"
                                    />
                                    <span className="absolute bottom-0 left-0 z-10 bg-blue-600 font-bold text-xl bg-opacity-60 text-white w-full text-center p-5 rounded-t-xl">
                                        {content.title}
                                    </span>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products