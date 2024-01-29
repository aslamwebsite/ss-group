"use client";
import React from "react";
import Link from "next/link";
import Enquiry from "./Enquiry";
import BrochureForm from "./BrochureForm";
import { useState } from "react";

const QuickLinks = ({
  ebroucher,
  application,
  slug,
  const_status,
  virtualtour,
}) => {
  const anyLinkAvailable =
    ebroucher || application || virtualtour || (const_status === "1" && slug);
  if (!anyLinkAvailable) {
    return null;
  }
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null); // State to hold selected data

  const togglePopup = (data) => {
    setSelectedData(data);
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <section className="quicklink col-12 float-start">
        <BrochureForm
          isPopupOpen={isPopupOpen}
          togglePopup={togglePopup}
          requestCallbackText={
            selectedData
              ? `Fill The Form To Download ${selectedData.label}`
              : ""
          }
          brochure={selectedData ? selectedData.data : null}
        />
        <div className="container">
          <div className="web-container">
            <div className="col-12 flaot-start flex-center">
              <div className="heading text-center border-0">
                <h3
                  className="effectheading"
                  data-aos="fade-in"
                  data-aos-easing="ease-in"
                  data-aos-offset="150"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  Quick link
                </h3>
              </div>
            </div>
            <div
              className="col-lg-10 col-12 m-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <div className="row flex-center">
                {ebroucher && (
                  <>
                    <div className="col-lg-4 col-12">
                      <button
                        className="realstatebtn text-white"
                        onClick={() =>
                          togglePopup({ label: "Brochure", data: ebroucher })
                        }
                      >
                        <span className="text-white">BROCHURE</span>
                      </button>
                    </div>
                  </>
                )}
                {application && (
                  <div className="col-lg-4 col-12">
                    <button
                      className="realstatebtn text-white"
                      onClick={() =>
                        togglePopup({ label: "Floor Plans", data: application })
                      }
                    >
                      <span className="text-white">FLOOR PLANS</span>
                    </button>
                  </div>
                )}
                {virtualtour && (
                  <div className="col-lg-4 col-12">
                    <a href={virtualtour} target="_blank">
                      <button className="realstatebtn text-white">
                        <span className="text-white">
                          360<sup>0</sup> View
                        </span>
                      </button>
                    </a>
                  </div>
                )}
                {const_status === "1" && slug && (
                  <div className="col-lg-4 col-12">
                    <Link href={"/construction/" + slug}>
                      <button className="realstatebtn text-white">
                        <span className="text-white">CONSTRUCTION UPDATES</span>
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuickLinks;
