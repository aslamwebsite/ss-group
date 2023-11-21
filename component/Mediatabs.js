'use client'
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Mediagallery from '@/component/Mediagallery';
import Event from '@/component/Event'

// Sample image data with years and months
const imageGalleryData = [
  { id: 1, year: 2023, month: 'Jan', imageUrl: 'your_image_url_1' },
  { id: 2, year: 2023, month: 'Feb', imageUrl: 'your_image_url_2' },
  // Add more image data here...
  { id: 12, year: 2022, month: 'Dec', imageUrl: 'your_image_url_12' },
];

function Mediatabs() {
  const [tabValue, setTabValue] = useState(0);
  const [activeButton, setActiveButton] = useState(2023);
  const [activeMonth, setActiveMonth] = useState('Jan'); // Default to January

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleYearButtonClick = (year) => {
    setActiveButton(year);
  };

  const handleMonthTabClick = (month) => {
    setActiveMonth(month);
  };

  // Filter images based on the active year and month
  const filteredImages = imageGalleryData.filter(
    (image) => image.year === activeButton && image.month === activeMonth
  );

  return (
    <>
      <div className="galleryfilterstn col-12 float-start">
        <div className="filtertabtopmenu flex-center justify-content-start gap-3 mb-3">
          {[2023, 2022, 2021, 2020, 2019, 2018, 2017].map((year) => (
            <div className="menubtn" key={year}>
              <span
                className={activeButton === year ? 'activemenu' : ''}
                onClick={() => handleYearButtonClick(year)}
              >
                {year}
              </span>
            </div>
          ))}
        </div>
        <div className="filterbottommenu">
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
              <Tab
                key={month}
                label={month}
                style={tabValue === index ? { color: '#f58634' } : {}}
                onClick={() => handleMonthTabClick(month)}
              />
            ))}
          </Tabs>

          <Mediagallery gallery_data={filteredImages} />
          <Event />
        </div>
      </div>
    </>
  );
}

export default Mediatabs;
