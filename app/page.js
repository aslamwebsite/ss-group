"use client"
import React, { useEffect, useState, useRef } from 'react';
import Slick from '@/component/Slider'
import ScrollDown from '@/component/ScrollDown'
import About from '@/component/About'
import News from '@/component/News';
import Numbers from '@/component/Numbers';
import Projectslider from '@/component/Projectslider';
// import projectData from '@/json/project.json';
import Footer from '@/component/Footer';
import Header from '@/component/Header';
import Accordian from '@/component/Accordian';
import CustomCursor from '@/component/CustomCursor';
import Loader from '@/component/Loader';
import axios from 'axios';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  // const categoryData = projectData.categories;
  // console.log(categoryData);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.ssgroup-india.com/admin_new/api/fetch_cat.php');
        setCategoryData(response.data.categories);
        // console.log(response.data.categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!categoryData) {
    return <p>Error</p>;
  }
  const smoothRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!loading) {
      const loaderElement = document.querySelector('.loader');
      if (loaderElement) {
        loaderElement.classList.add('hideloader'); 
      }
    }
  }, [loading]);
  const numberData = [
    { startValue: 5, endValue: 29, speed: 400, label: 'YEARS', Plus:'+' },
    { startValue: 50, endValue: 173, speed: 400, label: 'LAKH SQ.FT. DELIVERED' },
    { startValue: 7000, endValue: 75000, speed: 200, label: 'CUSTOMERS', Plus:'+'  },
  ];
  const justifyData = 'justify-space-between';

  return (
    <>
    <Loader />
    <CustomCursor />
    <Header />
    <main className="d-flex flex-wrap float-start col-12">
    <section id='slider'>
      <div className='col-12 float-start homeslider position-relative'>
        <Slick />
        <ScrollDown targetRef={smoothRef} />   
        </div>
        <News />
        </section>
        <section id="about" ref={smoothRef}>
         <About />
       </section>
       <Numbers countersData={numberData} className={justifyData} />
       <Projectslider categoryData={categoryData} />
       <Accordian faqData={""}/>
    </main>
    <Footer />
    </>
  )
}
