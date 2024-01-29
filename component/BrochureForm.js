import { useState, useEffect } from "react";
import Form from "./Form";

const BrochureForm = ({
  isPopupOpen,
  togglePopup,
  enquireText,
  requestCallbackText,
  brochure,
}) => {
  useEffect(() => {
    // Move initialization logic here if needed
  }, []);

  const localTogglePopup = () => {
    togglePopup(); // Optionally, you can call the prop function to sync state with the parent
  };
  // console.log("this si the fnetbs",brochure)
  return (
    <>
      <div className="flex-center">
        <div className={`popup flex-center ${isPopupOpen ? "active" : ""}`}>
          <div className="popupContent col-12 pull-start">
            <a className="position-absolute col-12 start-1/2 top-0 py-5 cursor-pointer">
              <span onClick={togglePopup} className="p-2 text-center">
                Close -
              </span>
            </a>
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div className="col-12 float-start text-center title">
                  <span className="border-0 text-white">
                    {requestCallbackText}
                  </span>
                </div>
                <Form brochure={brochure} />
              </div>
              <div className="col-lg-3">
                <div className="ssgroupformtext position-relative col-12 float-start">
                  <div className="text-transform">
                    <p className="d-flex text-center">
                      <span>S</span>
                      <span>S</span>
                      <span className="px-2"></span>
                      <span>G</span>
                      <span>R</span>
                      <span>O</span>
                      <span>U</span>
                      <span>P</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrochureForm;
