import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import Logo from '../assets/kristec-logo.png'

const PageFooter = () => {
    return (
        <div>
            <Footer container className='bg-slate-300 text-white'>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href="https://kristec.co.ke"
                                src={Logo}
                                alt="Kristec Logo"
                                name="Kristec Developers"
                                
                            />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="Links" className='text-black'/>
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#" className='text-black'>Services</Footer.Link>
                                    <Footer.Link href="#" className='text-black'>Products</Footer.Link>
                                    <Footer.Link href="#" className='text-black'>Shop</Footer.Link>
                                    <Footer.Link href="#" className='text-black'>About Us</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" className='text-black'/>
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#" className='text-black'>Instagram</Footer.Link>
                                    <Footer.Link href="#" className='text-black'>X</Footer.Link>
                                    <Footer.Link href="#" className='text-black'>Facebook</Footer.Link>
                                    <Footer.Link href="#" className='text-black'>WhatsApp</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            
                            <div>
                                <Footer.Title title="Legal" className='text-black'/>
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#" className='text-black'>Privacy Policy</Footer.Link>
                                    <Footer.Link href="#" className='text-black'>Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="Kristec Developers" year={2024} className='text-black'/>
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} className='text-black'/>
                            <Footer.Icon href="#" icon={BsInstagram} className='text-black'/>
                            <Footer.Icon href="#" icon={RiTwitterXFill} className='text-black'/>
                            <Footer.Icon href="#" icon={BsGithub} className='text-black'/>
                            <Footer.Icon href="#" icon={BsDribbble} className='text-black'/>
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}

export default PageFooter