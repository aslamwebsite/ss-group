// QuickLinks.js
import React from 'react';
import Link from 'next/link';

const QuickLinks = ({ ebroucher, application, slug }) => {
  return (
    <div className='quicklink col-12 float-start'>
      <div className='container'>
        <div className='web-container'>
          <div className='col-12 flaot-start flex-center'>
            <div className='heading text-center border-0'>
              <h3
                className='effectheading'
                data-aos="fade-in"
                data-aos-easing="ease-in"
                data-aos-offset="150"
                data-aos-duration="1000"
                data-aos-once='true'
              >
                Quick link
              </h3>
            </div>
          </div>
          <div className='col-lg-10 col-12 m-auto'>
            <div className='row flex-center'>
              <div className='col-lg-4 col-12'>
                {ebroucher && (
                  <a href={ebroucher} target='_blank'>
                    <button className="realstatebtn text-white">
                      <span className="text-white">BROCHURE</span>
                    </button>
                  </a>
                )}
              </div>
              <div className='col-lg-4 col-12'>
                {application && (
                  <a href={application} target='_blank'>
                    <button className="realstatebtn text-white">
                      <span className="text-white">FLOOR PLANS</span>
                    </button>
                  </a>
                )}
              </div>
              <div className='col-lg-4 col-12'>
                {slug && (
                  <Link href={"/construction/" + slug}>
                    <button className="realstatebtn text-white">
                      <span className="text-white">CONSTRUCTION UPDATES</span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
