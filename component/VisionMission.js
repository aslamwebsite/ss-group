import React from 'react'
import CoreValues from '@/component/svg-components/CoreValues';
import Vision from '@/component/svg-components/Vision';

const VisionMission = () => {
  return (
    <>
      <section>
            <div className="vimision sm-overflow" data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
                <div className="container">
                        <div className="col-lg-11 m-auto col-12">
                            <div className="row">
                            <div className="col-lg-6 col-12 row align-items-center abstractshape">
                                <div className="col-lg-9 col-12">
                                <h4>VISION</h4>
                                <p>Our vision is to become an organization synonymous with quality, innovation and integrity in the field of real estate development and to be number one when it comes to customer preference.</p>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <Vision />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 row align-items-center abstractshape">
                                <div className="col-lg-9 col-12 flex-direction-row">
                                <h4>MISSION</h4>
                                <p>Our mission is to create an enduring and sustainable lifestyle for the new urban India.</p>
                                </div>
                                <div className="col-lg-3 col-12">
                                <CoreValues />                                
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
       </section>
    </>
  )
}

export default VisionMission