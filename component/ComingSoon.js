import React from 'react'
import Banner from '/public/ss-kiavasa.webp'
import Mbanner from '/public/mkiavasa.jpg'  
import Image from "next/image";
// import Enquiry from './Enquiry'

const ComingSoon = () => {
  return (
    <>
    <div className='full-height'>
        <div className='col-12 float-start position-absolute top-0'>
            <div className='comingsoon'>
                <Image src={Banner} alt='banner' width='1920' height='754' className='desktop-show'/>
                <Image src={Mbanner} alt='Mobile banner' width='1920' height='754' className='mobile-show'/>
                {/* <div className='text-center col-12 float-start position-absolute bottom-0'>
                  <Enquiry enquireText='Enquire' requestCallbackText='Request a Call Back' />
              </div> */}
            </div>
        </div>
        </div>
    </>
  )
}

export default ComingSoon