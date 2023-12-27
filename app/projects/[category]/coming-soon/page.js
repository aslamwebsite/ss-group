'use client'
import React from 'react'
import Header from '/component/Header'
import ComingSoon from '/component/ComingSoon'
import Footer from '/component/Footer'

const page = () => {
  return (
    <>
       <Header className="blackheader position-absolute" />
       <div className="col-12 float-start position-absolute tbreadcrum">
        <div className="container">
          <div className="row">
            <div className="breadcumtab">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a>
                    Homes
                  </a>
                </li>
                <li>Kiavasa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ComingSoon />
      <Footer className="m-0" />
    </>
  )
}

export default page