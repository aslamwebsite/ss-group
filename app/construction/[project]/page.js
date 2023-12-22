"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import ConstructionUpdates from '@/component/ConstructionUpdates';
import React from 'react'
import { useParams } from "next/navigation";
import { useRouter } from 'next/router';

const page = () => {
    const params = useParams();
    const slug = params.project;
  return (
    <>
        <Header className='blackheader' />
        <main className="d-flex flex-wrap float-start col-12">
        <section>
                <div className='media m-0'>
                    <div className='container'>
                        <div className='row'>
                            <div className="breadcumtab">
              <ul>
              <li>
                  <a href="/">Home</a>
                </li>
                <li><a href='/'>{slug.replace(/-/g, " ")}</a></li>
                <li>Construction Updates
                </li>
               
              </ul>
            </div>
                               <div className="col-12 flaot-start flex-center mt-5">
                               <div className='heading text-center border-0 mb-2'>
                                    <h3 className='effectheading' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'> {slug.replace(/-/g, " ")} <br/>Construction Updates</h3>
                                </div>
                               </div>
                        </div>
                               <div className='col-lg-10 col-12 m-auto '>
                               <div className='row'>
                                    <div className='col-lg-12 col-12'>
                                        <div className='mediasection m-0'>
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