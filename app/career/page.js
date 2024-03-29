"use client"
import Jobs from '@/component/Jobs'
import Banner from '@/component/Banner'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const page = () => {
  const careerUsImage = '/career-banner.webp';
  const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
       const response = await axios.get('https://triverseadvertising.com/ss-group/admin_new/api/career.php');
       if(mounted){
        console.log(response.data);
           setPagedata(response.data);
       }
    }

    loadData();

    return () => {
        mounted = false;
      };
}, []);

console.log(pagedata);

if (pagedata.length===0) {
    console.log('no data');
    return null;
}
  return (
    <>
    <Header />
    <main className="d-flex flex-wrap float-start col-12">
    <Banner imageSrc={careerUsImage} pagename="career"/>
    {pagedata.career?
      <section >
        <div className='container'>
            <div className='row'>
                <div className='web-container'>
                    <div className='col-lg-12 text-center'>
                        <div className='heading border-0 text-uppercase p-0'>
                            <h1 className='headingh2 effectheading' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>Career</h1>
                            </div>
                    </div>
                    {/* Loop Start */}
                    {pagedata.career.map((careerdesc, index) => (
  <div className={`col-lg-11 m-auto col-12 text-center ${index === pagedata.career.length - 1 ? '' : 'mb-5'}`} key={index}>
    <div className='title mb-4'>
      <h2 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="800" data-aos-once='true'>{careerdesc.heading}</h2>
    </div>
    <div dangerouslySetInnerHTML={{ __html: careerdesc.description }} data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="900" data-aos-once='true'/>
  </div>
))}


                    {/* Loop End */}
                </div>
                </div>
        </div>
    </section>    
    : null}
    <Jobs jobsdata={pagedata.careerjobs}/>
    </main>
    <Footer />
    </>
  )
}

export default page