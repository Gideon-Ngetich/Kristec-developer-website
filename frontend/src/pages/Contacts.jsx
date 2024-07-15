import React from 'react'
import Nav from '../components/Navbar'
import PageFooter from '../components/Footer'
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Contacts = () => {
    const bgImg = 'https://ashburnconsulting.com/wp-content/uploads/2022/10/network-eng-1.png'

    return (
        <>
            <div>
                <div>
                    <Nav />
                </div>
                <div>
                    <div>
                        <div
                            className="bg-cover bg-fixed bg-opacity-100 h-80 md:h-96 lg:h-120 xl:h-160 w-full flex justify-center items-center"
                            style={{ backgroundImage: `url(${bgImg})` }}
                        >
                            <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">
                                Contact US
                            </p>
                        </div>
                    </div>
                    <div className='bg-no-repeat bg-cover h-96'>
                        <div>
                            <h2>Contacts</h2>
                            <div>
                                <FaPhone />
                                <span>0718889923</span>
                            </div>
                            <div>
                                <HiMail />
                                <span>info@kristec.co.ke</span>
                            </div>
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

export default Contacts