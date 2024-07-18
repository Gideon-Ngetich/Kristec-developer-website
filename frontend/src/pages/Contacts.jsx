import React from 'react'
import Nav from '../components/Navbar'
import PageFooter from '../components/Footer'
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Contacts = () => {
    const bgImg = 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMThiYXRjaDQta2F0aWUtMTcuanBn.jpg'
    const bckImg = 'https://static.vecteezy.com/system/resources/previews/008/084/574/non_2x/telecommunication-tower-with-5g-cellular-network-antenna-on-city-background-global-connection-and-internet-network-concept-free-photo.JPG'
    const backImg = 'https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2021/09/White-abstract-background-wallpaper-illustration-e1656162692761.jpg'

    // const [loading, setLoading] = useState(true);

    // useEffect(() =>{
    //     const timer = setTimeout(() =>{
    //         setLoading(false)
    //     }, 3000)

    //     return () => clearTimeout(timer)
    // }, [])

    // if(loading){
    //     return <Loader />
    // }

    return (
        <>
            <div>
                <div>
                    <Nav />
                </div>
                <div>
                    <div>
                        <div
                            className="bg-cover bg-no-repeat bg-opacity-100 h-80 md:h-96 lg:h-120 xl:h-160 w-full flex justify-center items-center"
                            style={{ backgroundImage: `url(${bgImg})` }}
                        >
                            <p className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-center font-extrabold text-white" style={{fontFamily: 'DM Serif Display'}}>
                                Contact Us
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-cover h-auto ' style={{backgroundImage: `url(${backImg})`}}>
                        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-10 p-10 h-96 justify-center items-start md:items-center lg:items-center xl:items-center 2xl:items-center'>
                            <div className='flex justify-center items-center font-bold text-xl'>
                                <img width="100" height="100" src="https://img.icons8.com/bubbles/100/phone--v2.png" alt="phone--v2" />
                                <span>0718889923</span>
                            </div>
                            <div className='flex justify-center items-center font-bold text-xl'>
                                <img width="100" height="100" src="https://img.icons8.com/bubbles/100/apple-mail.png" alt="apple-mail" />
                                <span>info@kristec.co.ke</span>
                            </div>
                            <div className='flex justify-center items-center font-bold text-xl'>
                                <img width="100" height="100" src="https://img.icons8.com/bubbles/100/map-marker.png" alt="map-marker" />
                                <span>Kabarak</span>


                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center w-full h-96 lg:h-96 bg-cover md:bg-fixed lg:bg-fixed xl:bg-fixed 2xl:bg-fixed bg-no-repeat bg-opacity-100' style={{backgroundImage: `url(${bckImg})`}}>
                            <span className='text-4xl font-extrabold text-orange-500'>WORK WITH US</span>
                            <span className='font-semibold'>Get the quality services from us.</span>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <PageFooter />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Contacts