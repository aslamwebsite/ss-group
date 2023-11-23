import React from 'react'
import CoreValues from '@/component/svg-components/CoreValues';
import Vision from '@/component/svg-components/Vision';

const VisionMission = () => {
  return (
    <>
      <section>
            <div className="vimision sm-overflow " data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
                <div className="container">
                        <div className="col-lg-11 m-auto col-12">
                            <div className="row">
                            <div className="col-lg-6 col-12 row align-items-center abstractshape">
                                <div className="col-lg-9 col-12">
                                <h4>VISION</h4>
                                <p>Our vision includes becoming the progressive developer of Delhi NCR, that prides itself in identifying locations and transforming them into landmarks. With this transformation comes stakeholder and investor value and admiration. We will always be recognized for who we are and what we do in improving the quality of life of our customers through the implementation of our quality design-build-deliver process.</p>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <Vision />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 row align-items-center abstractshape">
                                <div className="col-lg-9 col-12 flex-direction-row">
                                <h4>CORE VALUES</h4>
                                <p>Our decisions and actions are guided by the Values we believe in. We are determined to create long-term worth for our customers, clients and partners, as well as our employees, community, and our environment.</p>
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