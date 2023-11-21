"use client"
import CustomCursor from '@/component/CustomCursor'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'
import axios from 'axios';
import AdvanceBanner from '@/component/AdvanceBanner';
import GallerySlider from '@/component/GallerySlider';
import LocationMap from '@/component/LocationMap';
import Accordian from '@/component/Accordian';
import Image from 'next/image';

const page = () => {
  const [project, setprojectData] = useState([]);
  const params = useParams();
  const slug = params.project;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.ssgroup-india.com/admin_new/api/fetch_product.php');
        console.log(response);
        const project = response.data.projects.find((p) => p.slug === slug);
        console.log(project);
        setprojectData(project);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  if (!project) {
    return <p>No project found!</p>;
    return false;
  }
  const [showH1, setShowH1] = useState(false);
  const [showH2, setShowH2] = useState(false);
  const [showP, setShowP] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setShowH1(true);
    }, 100);

    const fadeTimeout = setTimeout(() => {
      setShowH2(true);
    }, 1000);

    const fadePTimer = setTimeout(() => {
      setShowP(true);
    }, 1500);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(fadePTimer);
    };
  }, []);
  return (
    <>
    <CustomCursor />
    <Header className='blackheader' />
      <main className="d-flex flex-wrap float-start col-12">
      <section>
          <div className='overview col-12 float-start pt-5'>
            <div className='container'>
            <div className='col-12 float-start'>
                    <div className="container">
                        <div className="row">
                        <div className="breadcumtab"><ul><li><a href="/">Home</a></li><li><a href="/">Homes</a></li><li>{slug}</li></ul></div>
                        </div>
                    </div>
                    </div>
              <div className="col-lg-4 col-12 m-auto text-center">
                <div className="heading">
                  {showH1 && <h1 className="runtext lh-1 text-uppercase">{project.ProjectName}</h1>}
                  {showH2 && <h2>{project.Location}</h2>}
                </div>
                <div className="col-12 float-start">
                  <p className={showP ? "fade-up show" : "fade-up"}>
                    {project.Overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='projectwrap'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 float-start'>
                  <div className='bannerwrap d-flex flex-wrap'>
                    <AdvanceBanner bannerData={project.sections} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GallerySlider galleryData={project.sliderContent}/>
        <LocationMap locationData={project.locationData} />
        <section>
          <div className='quicklink col-12 float-start'>
            <div className='container'>
              <div className='web-container'>
              <div className='col-12 flaot-start flex-center'>
                                <div className='heading text-center border-0'>
                                    <h3 className='effectheading' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>quick link</h3>
                                    </div>
                            </div>
                <div className='col-lg-10 col-12 m-auto'>
                  <div className='row'>
                    <div className='col-lg-4 col-12'>
                      <button className="realstatebtn text-white" data-aos="fade-left" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'><span className="text-white">BROCHURE</span></button>
                    </div>
                    <div className='col-lg-4 col-12'>
                      <button className="realstatebtn text-white" data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'><span className="text-white">FLOOR PLANS</span></button>
                    </div>
                    <div className='col-lg-4 col-12'>
                      <button className="realstatebtn text-white" data-aos="fade-right" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'><span className="text-white">CONSTRUCTION UPDATES</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Accordian faqData={project.faq}/>
        </main>
      <Footer />
    </>
  )
}

export default page