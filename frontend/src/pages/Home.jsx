import React from 'react'
import Nav from '../components/Navbar'
import { Parallax } from 'react-scroll-parallax'
import Slider from '../components/Carousel'
import Logo from '../assets/kristec-logo.png'

const Home = () => {
    return (
        <div>
            <div>
                <Nav />
                <Parallax strength={-500}>
                    <Slider />
                </Parallax>

                <Parallax speed={15} className='aspect-[2/1]'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmiaNysgPkw7QYvvvpPV6IArqzL9ZzzfIW9w&usqp=CAU' alt="" className='w-full h-screen'/>
                    <div className='w-96'>TEST</div>
                </Parallax>
            </div>
        </div>
    )
}

export default Home