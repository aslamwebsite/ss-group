import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = (brochure) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      alert("Name is required");
      isValid = false;
    }

    if (formData.phone.trim() === "") {
      alert("Mobile number is required");
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Invalid mobile number format (should be 10 digits)");
      isValid = false;
    }

    if (showThankYou) {
      const element = document.getElementById("dataLayer_submit_btn");
      if (element) {
        element.click();
      }
    }

    // setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      // Include the URL in the form data
      const formDataWithUrl = {
        ...formData,
        url: currentUrl,
      };
      // alert(currentUrl);
      console.log("Form data:", formData);
      setShowThankYou(true);
      resetForm();

      fetch("https://ssgroup-india.com/admin_new/api/submit_form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsSubmitting(false);

          console.log("Server response:", data);
          if (data.success) {
            // setShowThankYou(true);
            setShowThankYou(true);
            resetForm();
          }
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.error("Error:", error);
        });
      if (brochure) {
        window.open(brochure.brochure, "_blank");
      }
    }
  };

  // console.log("this si the from data from the form", brochure);
  // Submit API code end
  useEffect(() => {
    // Set the state to false after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowThankYou(false);
    }, 4000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <>
      {showThankYou && (
        <div className="thank-you-overlay">
          <div className="thank-you-popup">
            <p className="text-center text-white col-lg-8 col-12 m-auto">
              Thank you for submitting the form!
            </p>
            {/* Add any other content you want to show in the pop-up */}
          </div>
        </div>
      )}
      <div
        className="col-12 d-inline"
        data-aos="fade-up"
        data-aos-easing="ease-in"
        data-aos-offset="50"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4 col-12">
                <TextField
                  name="name"
                  label="Name"
                  className="modifiedinput"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </div>
              <div className="col-lg-4 col-12">
                <TextField
                  name="email"
                  label="Email"
                  className="modifiedinput"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </div>
              <div className="col-lg-4 col-12">
                <TextField
                  name="phone"
                  label="Phone"
                  className="modifiedinput"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </div>
              <div className="col-12 mt-5 text-center">
                <div className="col-lg-3 col-12 m-auto ssgroupbtn">
                  {/* <Button type="submit" variant="contained" color="primary" className='col-12 realstatebtn'>
       <span className='text-white'> Submit</span>
      </Button> */}

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="col-12 realstatebtn"
                    disabled={isSubmitting} // Disable the button when submitting
                  >
                    {isSubmitting ? (
                      <span className="text-white">Submitting...</span>
                    ) : (
                      <span className="text-white">Submit</span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
