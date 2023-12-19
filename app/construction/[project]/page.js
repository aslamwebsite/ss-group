"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import ConstructionUpdates from '@/component/ConstructionUpdates';
import React from 'react'

const page = () => {
  return (
    <>
        <Header className='blackheader' />
        <main className="d-flex flex-wrap float-start col-12 mt-5">
        <section>
                <div className='media'>
                    <div className='container'>
                        <div className='row'>
                               <div className="col-12 flaot-start flex-center">
                               <div className='heading text-center border-0'>
                                    <h3 className='effectheading' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>Construction Updates</h3>
                                </div>
                               </div>
                        </div>
                               <div className='col-lg-10 col-12 m-auto '>
                               <div className='row'>
                                    <div className='col-lg-12 col-12'>
                                        <div className='mediasection col-12 float-start'>
                                              <ConstructionUpdates />                                        
                                        </div>
                                </div>
                            </div>
                               </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default page