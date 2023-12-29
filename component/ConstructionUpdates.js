"use client";
import React, { useState, useEffect, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Constructiongallery from "@/component/Constructiongallery";
import Event from "@/component/Event";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useParams } from "next/navigation";
import axios from "axios";
import FilterConstruction from "./FilterConstruction";

function ConstructionUpdates( {pagedata, year, month} ) {
  
  const handleFilterSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <div className="galleryfilterstn projectfilter bg-white col-12 float-start">
        <div
          className="col-12 float-start"
          data-aos="fade-left"
          data-aos-easing="ease-in"
          data-aos-offset="50"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <FilterConstruction
            filterData={pagedata}
            searchFyear={
              year
                ? year
                : pagedata.projects[0].construction.category[0]["year"]
            }
            searchFmonth={
              month
                ? month
                : pagedata.projects[0].construction.months[0]["month"]
            }
            onSubmit={handleFilterSubmit}
          />
        </div>
      </div>
      <Constructiongallery gallery_data={pagedata} />
    </>
  );
}

export default ConstructionUpdates;