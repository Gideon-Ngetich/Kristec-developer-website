"use client";
import {React, Link} from 'react'
// import Link from "next/link";
import Logo from '../assets/kristec-logo.png'
import { Navbar } from "flowbite-react";

const Nav = () => {
    return (
        <div>
            <Navbar fluid rounded className='bg-blue-400'>
                <Navbar.Brand as={Link} href="/">
                    <img src={Logo} className="w-24 h-24" alt="kristec Logo" />
                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">KRISTEC DEVELOPERS</span> */}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/" className='text-xl text-black font-semibold'>
                        Home
                    </Navbar.Link>
                    <Navbar.Link as={Link} href="/about" className='text-xl text-black font-semibold'>
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/services" className='text-xl text-black font-semibold'>Services</Navbar.Link>
                    <Navbar.Link href="/packages" className='text-xl text-black font-semibold'>Packages</Navbar.Link>
                    <Navbar.Link href="/contacts" className='text-xl text-black font-semibold'>Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Nav