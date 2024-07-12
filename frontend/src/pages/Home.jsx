import React from 'react'
import Nav from '../components/Navbar'
import { Parallax } from 'react-scroll-parallax'
import Slider from '../components/Carousel'
import Services from '../components/Services'
import Products from '../components/Products'
import CustomerReview from '../components/CustomerReview'
import PageFooter from '../components/Footer'

const Home = () => {
    return (
        <div>
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