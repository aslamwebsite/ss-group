import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Suitecase from './svg-components/Suitecase'
import Location from './svg-components/Location'

const Jobs = ({ jobsdata }) => {
    console.log(jobsdata);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionChange = (accordionIndex) => {
    if (accordionIndex === openAccordion) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(accordionIndex);
    }
  };

  // Check if faqData exists and has at least one item
  if (!jobsdata || jobsdata.length === 0) {
    return null; // Hide the section if there is no content
  }

  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='web-container'>
            <div className='col-12 float-start text-center title'>
              <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>Current Openings</h3>
            </div>
            <div className='col-lg-11 m-auto col-12' data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
              <div className='col-12 float-start accordions' data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
                {jobsdata.map((jobItem, index) => (
                  jobItem.title.trim() !== '' && (
                    <Accordion
                      key={index}
                      className={openAccordion === index ? 'remove-shadow' : 'remove-shadow'}
                      expanded={openAccordion === index}
                      onChange={() => handleAccordionChange(index)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} className='text-uppercase'>
                       <h3> {jobItem.title}</h3>
                      </AccordionSummary>
                      <AccordionDetails>
                       <div className='jobheading d-flex flex-wrap'>
                       <span><Suitecase /></span> <p dangerouslySetInnerHTML={{ __html: jobItem.description }} className='m-0'/>
                       </div>
                       <div className='jobdescription d-flex flex-wrap'>
                       <span><Location /></span> <p className='m-0'>{jobItem.location}</p>
                       </div>
                        <p className='m-0'>Please send your updated resume, mentioning your current CTC, expected salary and notice period to <a href="mailto:hr@ssgroup-india.com">hr@ssgroup-india.com</a></p>
                      </AccordionDetails>
                    </Accordion>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
