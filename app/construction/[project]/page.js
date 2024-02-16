"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import ConstructionUpdates from '@/component/ConstructionUpdates';
import React, {useState, useEffect, useRef} from 'react'
import { useParams } from "next/navigation";
import { useRouter } from 'next/router';
import axios from "axios";

const page = () => {
    // Const Image Code Start
  const params = useParams();
  const slug = params.project;

  const url = window.location.href;
  const queryString = url.split("?")[1];
  const queryParams = new URLSearchParams(queryString);
  const yearVal = queryParams.get("year") || "";
  const monthVal = queryParams.get("month") || "";
  console.log(slug);
  const slug2 = yearVal ? yearVal : "";
  const slug3 = monthVal ? monthVal : "";
  const [pagedataVal, setPagedata] = useState([]);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const response = await axios.get(
        `https://triverseadvertising.com/ss-group/admin_new/algorithms/modify_construction_json.php?url=${slug}&url2=${slug2}&url3=${slug3}`
      );
      if (mounted) {
        console.log(response);
        console.log(response.data);
        setPagedata(response.data);
        // setData(response.data.products.accordions);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  console.log(pagedataVal);
  if (pagedataVal.length == 0) {
    console.log("no data");
    return null;
  }

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
                <li><a href={'/projects/' + pagedataVal.projects[0].construction.cname + '/' + pagedataVal.projects[0].construction.slug}>{pagedataVal.projects[0].construction.proname}</a></li>
                <li>Construction Updates
                </li>
               
              </ul>
            </div>
                               <div className="col-12 flaot-start flex-center mt-5">
                               <div className='heading text-center border-0 mb-2'>
                                    <h1 className='headingh2 effectheading' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'> {slug.replace(/-/g, " ")} <br/>Construction Updates</h1>
                                </div>
                               </div>
                        </div>
                               <div className='col-lg-10 col-12 m-auto '>
                               <div className='row'>
                                    <div className='col-lg-12 col-12'>
                                        <div className='mediasection m-0'>
                                              <ConstructionUpdates pagedata={pagedataVal} year={yearVal} month={monthVal}/>                                        
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