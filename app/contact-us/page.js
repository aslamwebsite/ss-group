"use client"
import Banner from '@/component/Banner'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import React from 'react'

const page = () => {
  const contactUsImage = '/contacus-banner.webp';
  return (
    <>
    <Header />
    <Banner imageSrc={contactUsImage} pagename="Contact Us"/>
      {/* <section id='contactus'>
          <div className="container">
            <div className="row">
            <div className='col-lg-12 text-center'>
                        <div className='heading border-0 text-uppercase p-0 mb-4'>
                            <h1 className='headingh2 effectheading' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>CONTACT US</h1>
                           
                            </div>
                    </div>
            </div>
          </div>
      </section> */}
    <Footer />    
    </>
  )
}

export default page