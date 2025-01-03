import React from 'react'
import Home from '@/sections/HomePage'
import WhyUs from '@/sections/WhyUs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import BlogPost from '@/sections/BlogPost'
const page = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <WhyUs />
            <BlogPost/>
            <Footer />
        </div>
    )
}

export default page
