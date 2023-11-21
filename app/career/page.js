"use client"
import Accordian from '@/component/Accordian'
import Banner from '@/component/Banner'
import CustomCursor from '@/component/CustomCursor'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import React from 'react'

const page = () => {
  const careerUsImage = '/career-banner.webp';
  return (
    <>
    <CustomCursor />
    <Header />
    <main className="d-flex flex-wrap float-start col-12">
    <Banner imageSrc={careerUsImage} pagename="career"/>
      <section >
        <div className='container'>
            <div className='row'>
                <div className='web-container'>
                    <div className='col-lg-12 text-center'>
                        <div className='heading border-0 text-uppercase p-0'>
                            <h3 className='effectheading' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>Career</h3>
                            </div>
                    </div>
                    <div className='col-12 float-start text-center mb-5'>
                        <div className='title mb-4'>
                      <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="800" data-aos-once='true'>WORK CULTURE</h3>
                      </div>
                        <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="900" data-aos-once='true'>SS Group offers a progressive work culture and professional growth that represents the industry&apos;s best and teams that are at the very forefront of construction best practice.</p>
                        <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="1000" data-aos-once='true'>The organization&apos;s work culture is stimulating and challenging which offers a whole spectrum of career prospects across a variety of functions. Work alongside imaginative and brilliant minds, and will always be inspired. Join SS Group to achieve the goals you've always set out for yourself, and we promise to make the journey along the way exciting, joyous and satisfying.</p>
                    </div>
                    <div className='col-12 float-start text-center'>
                    <div className='title mb-4'>
                      <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="800" data-aos-once='true'>GROWTH OPPORTUNITY</h3>
                      </div>
                        <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="900" data-aos-once='true'>When our employees thrive, so does our organization. As we talk about our progressive work culture, we ensure that our employees embrace the complex situations and manage them with exceptional pace and coordination.</p>
                        <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="1000" data-aos-once='true'>The company engages in training, coaching and mentoring of employees for their all-round development along the way exciting, joyous and satisfying.</p>
                    </div>
                </div>
                </div>
        </div>
    </section>    
    <Accordian />
    </main>
    <Footer />
    </>
  )
}

export default page