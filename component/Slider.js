"use client"
import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import Link from "next/link"

const Slick = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isZoomIn, setIsZoomIn] = useState(true);

    const toggleZoomClass = () => {
        setIsZoomIn((prev) => !prev);
    };

    useEffect(() => {
        const intervalId = setInterval(toggleZoomClass, 6000);

        return () => clearInterval(intervalId);
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplaySpeed: 8000, 
        autoplay: true,
        arrows: false,
        afterChange: (index) => setCurrentSlide(index),
    };

    const sliderContent = [
        {
            imageSrc: '/banner-01.webp',
            altText: 'The Hibiscus',
            heading: 'CRAFTING LIFESTYLE FOR EXQUISITE LIVING',
        },
        {
            imageSrc: '/banner-02.webp',
            altText: 'SS Cendana',
            heading: 'A LUXURY CALLED HOME',
            subHeading: 'SS Cendana, Sector 83, New Gurugram',
            link: '/projects/homes/ss-cendana'
        },
        {
            imageSrc: '/banner-03.webp',
            altText: 'SS Strada',
            heading: 'THE MOJO OF NEIGHBOURHOOD',
            subHeading: 'SS Strada, Sector 84, New Gurugram',
            link: '/projects/homes/ss-strada'
        },
        {
            imageSrc: '/banner-04.webp',
            altText: 'SS Linden Floors',
            heading: 'EXQUISITE LIVING AWAITS YOU',
            subHeading: 'SS Linden Floors, Sector 84-85, New Gurugram',
            link: '/projects/homes/ss-linden'
        },
    ];

    const sectionRef = useRef();
    const [inView, setInView] = useState(false);
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setInView(true);
            }
        });
    };

    const isOddSlide = currentSlide % 2 === 1; 
    return (
        <>
          
                            
                                <Slider {...settings}>
                                    {sliderContent.map((slide, index) => (
                                        <div key={index}>
                                             <div className='swiperslider position-relative'>
                                    <div className={`projectbanner ${isOddSlide ? 'zoom-in' : 'zoom-out'}`}>
                                    <img src={slide.imageSrc} width='1920' height='954'  alt={slide.altText} />
                                    </div>
                                    <div className='home_slidertext position-absolute top-55 text-center text-white col-12 flex-center d-grid'>
                                        <h4>{slide.heading}</h4>
                                        {slide.subHeading && <p>{slide.subHeading}</p>}
                                        {slide.link && (
    <span><Link href={slide.link} className='fw-500'>
    KNOW MORE
</Link></span>
)}
                                    </div>
                                </div>
                                        </div>
                                    ))}
                                </Slider>
            
        </>
    );
}
export default Slick;