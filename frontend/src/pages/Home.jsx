import React from 'react'
import Nav from '../components/Navbar'
import { Parallax } from 'react-scroll-parallax'
import Slider from '../components/Carousel'
import Services from '../components/Services'
import Products from '../components/Products'
import CustomerReview from '../components/CustomerReview'
import PageFooter from '../components/Footer'

const Home = () => {
    const bgImg = 'https://wallpapers.com/images/hd/abstract-soft-lines-white-screen-fb9bbohx0315k4d1.jpg'
    return (
        <div className='bg-repeat-y' style={{backgroundImage: `url(${bgImg})`}}>
            <div>
                <Nav />               
            </div>
            <div>
                <Slider />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <Products />
            </div>
            <div>
                <CustomerReview />
            </div>
            <div>
                <PageFooter />
            </div>
        </div>
        
    )
}

export default Home