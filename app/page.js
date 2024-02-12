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
    { question: 'What is SS Group known for?', answer: 'SS Group is a leading real estate developer in Delhi NCR that focuses on creating luxury and community-driven residential and commercial properties in Gurugram. Recognized as one of the most trusted real estate developers in Delhi NCR, SS Group is committed to providing value to its customers with quality living spaces and commercial projects. It has an impressive track record, over 3 decades, of delivering group housing, low rise floors, high streets, and offices across Gurugram. ' },
    { question: 'What types of properties does SS Group offer?', answer: 'SS Group offers a wide range of residential and commercial properties, including apartments, floors, penthouses, villas, shops, high-street retail, and office spaces. Our properties are designed to cater to a variety of needs for end-users and investors, from affordable units to luxury, SS Group has a real estate asset for every need. Explore all our properties here.'},
    { question: 'What are the completed projects of SS Group?', answer: 'Our completed residential projects in Gurugram include The Hibiscus Sector 50, The Hibiscus Penthouse Sector 50,  Aaron Ville Sector 48, The Lilac Sector 49, Radiancy Residency Sector 49, Southend Floor (Block A, B and C) Sector 49, Southend Sector 48-49, Southend Elite Sector 49, Delight and Splendour Sector 57 and Mayfield Gardens Sector 47, 50, 51, 52 & 57. Our ready to move residential projects include SS The Leaf Sector 85, SS The Leaf Penthouse Sector 85, The Coralwood Sector 84 and Almeria Sector 84. We have also completed multiple commercial projects including SS Plaza Sector 47 and SS Omnia Sector 86.'},
    { question: 'What are the ongoing projects of SS Group?', answer: "SS Group has several ongoing and upcoming residential and commercial projects in New Gurugram including SS Cendana Sector 83, SS Linden Floors Sector 84-85, SS Strada Sector 84, SS Highpoint Sector 86 and SS100 Sector 49. To know more about SS Group's new launches, call 7053 109 109."},
    { question: 'Why should I buy an SS Group property?', answer: 'SS Group is renowned for its dedication to quality construction, innovative designs, and customer-centric approach. With every project delivering value to customers and profits to investors, an SS Group property is a proven good investment.'},
    { question: 'How does SS Group ensure the quality of its properties?', answer: 'SS Group follows a rigorous quality control process to ensure that our property development meets the highest standards. We use only the best materials and work with experienced contractors and architects to ensure that every property we build is of the highest quality.'},
    { question: 'Is SS Group committed to sustainability in real estate development?', answer: 'We are dedicated to creating sustainable practices and incorporating eco-friendly materials, energy-efficient designs and green building techniques into our projects.'},
    { question: "Does SS Group have tie-ups with banks?", answer: 'Yes, SS Group has tie-ups with leading banks and financial institutions to offer home loans and other financial assistance to property buyers.'},
    { question: "Where is the head office of SS Group located?", answer: 'The head office of SS Group is located at SS House, Sector 44, Gurugram.'},
    { question: "What is the process for booking a property with SS Group?", answer: 'To book a property with SS Group, you can visit our website to browse through our residential and commercial projects and finalize your choice. Once you have found a property that you are interested in, you can contact our sales team to schedule a site visit and discuss the details of the property.'},
    { question: "How can I contact SS Group?", answer: 'For property-related queries, you can fill out the online form on our website or call us at 7053 109 109.   '},
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
