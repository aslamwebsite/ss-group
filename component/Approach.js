import React from "react";
import Image from "next/image";

const Approach = () => {
  // Array of objects containing data for each approach
  const approaches = [
    {
      imageSrc: '/app-01.jpg',
      title: 'IN-DEPTH MARKET ANALYSIS',
      content: 'Our design team, in collaboration with renowned architects, interior designers, and landscapists, helps envision the architectural and interior concept for each development. The SS Group team studies innovative designs and products from around the globe and incorporates them into our projects. Every detail is scrutinized, from wall designs to floor plans and luxurious interior finishes.',
    },
    {
      imageSrc: '/app-02.jpg',
      title: 'INNOVATIVE DESIGN',
      content: 'We take an integrated approach with thoughtful planning in each of our project design processes and its construction. Be it residential, commercial, or retail, we make every decision with our valued customer requirements in mind.',
    },
    {
      imageSrc: '/app-03.jpg',
      title: 'RESPONSIBLE DEVELOPMENTS',
      content: 'Our dedicated team focuses on making a responsible and sustainable development, across all our projects, continually striving to create real estate solutions that have the least of impact on our environment.',
    },
    {
      imageSrc: '/app-04.jpg',
      title: 'CUSTOMER SATISFACTION',
      content: 'We strive for a client-centric approach that’s based on putting customer-first by offering a great experience. Our approach is to maintain transparency and integrity throughout the development process.',
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="web-container">
            <div className="col-12 float-start">
              <div className="col-12 float-start text-center title">
                <h3
                  data-aos="zoom-in"
                  data-aos-easing="ease-in"
                  data-aos-offset="100"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  Our Approach
                </h3>
              </div>
              <div className="flex-center col-12">
                <div className="heading p-0 h-auto border-0">
                  <h3
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-easing="ease-in"
                    data-aos-offset="100"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    A DISTINCTIVE APPROACH TO CREATE BETTER, SMARTER PLACES
                  </h3>
                  <p className="text-center" data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
                    What we do as an organization is only made possible by the
                    way we actively collaborate with our clients and partners,
                    consultants, architects, and expert subcontractors. Working
                    jointly, we see every project as an opportunity to create
                    enduring developments and deliver something remarkable,
                    leaving a positive legacy for generations to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 float-start">
            {approaches.map((approach, index) => (
               <div
               key={index}
               className={`approachrow ${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}
               data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
               data-aos-easing="ease-in"
               data-aos-offset="100"
               data-aos-duration="500"
               data-aos-once='true'
             >
                <div className="approachimg">
                  <Image src={approach.imageSrc} alt="" width={500} height={500} />
                </div>
                <div className="approachcontent">
                  <h4>{approach.title}</h4>
                  <p>{approach.content}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
