"use client"
import React, { useEffect, useRef } from 'react';
import Aboutus from '@/public/aboutus.webp';
import Image from 'next/image';
import Link from 'next/link';
import { Textmovement } from './Textmovement';

const About = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5, 
    };

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(-${scrollY * 0.2}px)`; 
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <>
        <div className='position-relative col-12 float-start'>
        <div className={`aboutus col-12 float-start sm-overflow`}>
          <div className='row'>
            <div className='col-lg-1 col-12'></div>
            <div className='col-lg-4 col-12'>
             <div className='lefspace aboutus'>
             <div className='heading p-0 h-auto border-0 mb-2'>
                <h1 className='effectheading' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>BUILT ON VALUES</h1>
              </div>
              <div className='col-12 float-start'>
                <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-once='true'>Trust is not bestowed easily but is the result of consistent adherence to promises and a dedication to excellence. SS Group, the foremost real estate developer in Gurugram with nearly three decades of steadfast dedication, enjoys an impressive history of successfully executed residential and commercial projects within the city. This accomplishment stems from a blend of financial acumen, engineering proficiency, and innovative design.</p>
                <Link className="btns rounded" href='/ss-group' data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in" data-aos-once='true'><span className="text-green">Know More</span></Link>
              </div>
             </div>
            </div>
            <div className={`col-lg-7 col-12`}>
              <div className='aboutimg col-11 float-end effectlayer position-relative'>
              <Image src={Aboutus} alt='SS Group' priority width='1500' height='1000' />
              </div>
            </div>
          </div>
        </div>
        <Textmovement />
        </div>
    </>
  );
};
export default About;