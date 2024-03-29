"use client";
import React, { useState } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function Gallerybox({ gallery_data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  // Calculate the starting and ending index of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGalleryData = gallery_data.projects.flatMap(
    (project) => project.construction.gallery.flatMap((gallery) => gallery.galData)
  ).slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  
    // Scroll to top
    if (window.scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="Gallerybox mt-5 float-start col-12">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        className="col-12 float-start"
      >
        <>
          {currentGalleryData.map((galData, dataIndex) => (
            <a
              key={dataIndex}
              href={galData.limg}
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-offset="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="galleryimage">
                <img src={galData.simg} alt={galData.title} />
              </div>
            </a>
          ))}
        </>
      </LightGallery>
      {gallery_data.projects.flatMap(
        (project) => project.construction.gallery.flatMap((gallery) => gallery.galData)
      ).length > itemsPerPage && (
        <ul className="pagination col-12 float-start flex-center mt-5">
          {/* "Start" button */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a onClick={() => paginate(1)} className="page-link">
              «
            </a>
          </li>

          {/* Numbered pages */}
          {Array.from({ length: Math.ceil(gallery_data.projects.flatMap(
            (project) => project.construction.gallery.flatMap((gallery) => gallery.galData)
          ).length / itemsPerPage) }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
              <a onClick={() => paginate(i + 1)} className="page-link">
                {i + 1}
              </a>
            </li>
          ))}

          {/* "End" button */}
          <li className={`page-item ${currentPage === Math.ceil(gallery_data.projects.flatMap(
            (project) => project.construction.gallery.flatMap((gallery) => gallery.galData)
          ).length / itemsPerPage) ? "disabled" : ""}`}>
            <a
              onClick={() => paginate(Math.ceil(gallery_data.projects.flatMap(
                (project) => project.construction.gallery.flatMap((gallery) => gallery.galData)
              ).length / itemsPerPage))}
              className="page-link"
            >
              »
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Gallerybox;
