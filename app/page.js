"use client";
import React, { useEffect, useState, useRef } from "react";
import Slick from "@/component/Slider";
import ScrollDown from "@/component/ScrollDown";
import About from "@/component/About";
import News from "@/component/News";
import Numbers from "@/component/Numbers";
import Projectslider from "@/component/Projectslider";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Accordian from "@/component/Accordian";
import Loader from "@/component/Loader";
import axios from "axios";
import Cookies from "js-cookie";
import ChatboxWidget from "@/component/ChatboxWidget"

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const smoothRef = useRef(null);
  const botId = 'bf3bc593-8a20-460f-8f79-7e1b5a5fb9d7';


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.ssgroup-india.com/admin_new/api/fetch_cat.php"
        );
        setCategoryData(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const showLoader = !Cookies.get("loaderHidden");

    if (showLoader) {
      const loaderTimeout = setTimeout(() => {
        setLoading(false);
        Cookies.set("loaderHidden", true, { expires: 10 / (24 * 60) }); 
      }, 3000);

      return () => clearTimeout(loaderTimeout);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      const loaderElement = document.querySelector(".loader");
      if (loaderElement) {
        loaderElement.classList.add("hideloader");
      }
    }
  }, [loading]);
  const numberData = [
    { startValue: 5, endValue: 30, speed: 400, label: "YEARS", Plus: "+" },
    {
      startValue: 50,
      endValue: 173,
      speed: 400,
      label: "LAKH SQ.FT. DELIVERED",
    },
    {
      startValue: 7000,
      endValue: 75000,
      speed: 200,
      label: "CUSTOMERS",
      Plus: "+",
    },
  ];
  const homeFaqData = [
    { question: 'What is SS Group?', answer: 'SS Group Group is a leading real estate developer in Gurugram, India, that focuses on creating luxury and community-driven residential and commercial properties.' },
    { question: 'What are the different type of properties offered by SS Group?', answer: 'SS Group offers a wide range of residential and commercial properties, including apartments, penthouses, villas, shops, anchor stores and office spaces. Explore all our properties here at <a href="http://www.ssgroup-india.com" target="_blank">www.ssgroup-india.com</a>'},
    { question: 'Where are SS Group projects currently located?', answer: 'Our projects are strategically located in prime areas of Gurugram, offering easy access, excellent connectivity, and excellent growth. Find details about our residential or commercial project locations here at <a href="http://www.ssgroup-india.com/" target="_blank">ssgroup-india.com </a>.'},
    { question: 'What is the expected completion timeline for your projects?', answer: 'Completion timelines vary by project. Please visit the individual project pages <a href="http://www.ssgroup-india.com/" target="_blank">ssgroup-india.com</a> for specific information.'},
    { question: 'What sets SS Group apart from other real estate developers?', answer: 'SS Group is renowned for its dedication to quality construction, innovative designs, and customer-centric approach. Learn more about us at the ABOUT US page on <a href="http://www.ssgroup-india.com/ss-group" target="_blank">ssgroup-india.com</a>'},
    { question: 'Does SS Group have any ongoing or upcoming projects?', answer: 'Yes, SS Group has several ongoing and upcoming residential and commercial projects in New Gurugram. To know more about SS Groups new launches, <a href="tel:7053109109">call 7053 109 109</a>'},
    { question: 'Are SS Group projects approved by banks?', answer: 'Yes, SS Group has tie-ups with leading banks and financial institutions to offer home loans and other financial assistance to property buyers.'},
    { question: "What is SS Group's commitment to sustainability in real estate development?", answer: 'We are dedicated to creating sustainable practices, incorporating eco-friendly materials, energy-efficient designs, and green building techniques into our projects.'},
    { question: "How can I contact SS Group? ", answer: 'For property-related queries, you can fill out the online form on the website or call us at <a href="tel:7053109109.">7053 109 109.</a>'},
];
  return (
    <>
      <Loader />
      {/* <ChatboxWidget /> */}
      <Header />
      <main className="d-flex flex-wrap float-start col-12">
        <section id="slider">
          <div className="col-12 float-start homeslider position-relative">
            <Slick />
            <ScrollDown targetRef={smoothRef} />
          </div>
          <News />
        </section>
        <section id="about" ref={smoothRef}>
          <About />
        </section>
        <Numbers countersData={numberData} />
        <Projectslider categoryData={categoryData} />
        <Accordian faqData={homeFaqData} />
      </main>
      <Footer />
    </>
  );
}
