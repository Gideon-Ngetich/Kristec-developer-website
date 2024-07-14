import React from 'react'
import Nav from '../components/Navbar'
import { Parallax } from 'react-scroll-parallax'
import Slider from '../components/Carousel'
import Services from '../components/Services'
import Products from '../components/Products'
import CustomerReview from '../components/CustomerReview'
import PageFooter from '../components/Footer'

const Home = () => {
    const bgImg = 'https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2021/09/White-abstract-background-wallpaper-illustration-e1656162692761.jpg'
    return (
        <div className='bg-repeat-round bg-cover' style={{backgroundImage: `url(${bgImg})`}}>
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