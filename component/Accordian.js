import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordian = ( {faqData} ) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionChange = (accordionIndex) => {
    if (accordionIndex === openAccordion) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(accordionIndex);
    }
  };

  return (
    <section>
    {faqData!='' ?
      <div className='container'>
        <div className='row'>
          <div className='web-container'>
            <div className='col-12 float-start text-center title'>
              <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>Frequently Asked Questions</h3>
            </div>
            <div className='col-lg-10 m-auto col-12' data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
              <div className='col-12 float-start accordions'>
                {faqData?
                <>
                {faqData.map((faqItem, index) => (
                  <Accordion
                    key={index}
                    className={openAccordion === index ? 'remove-shadow' : 'remove-shadow'}
                    expanded={openAccordion === index}
                    onChange={() => handleAccordionChange(index)}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      {faqItem.question}
                    </AccordionSummary>
                    <AccordionDetails>
                      {faqItem.answer}
                    </AccordionDetails>
                  </Accordion>
                ))}
                </>
: null }
              </div>
            </div>
          </div>
        </div>
      </div>
    : null}
    </section>
  );
};

export default Accordian;
