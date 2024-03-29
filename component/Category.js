import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Ssdelivered from "@/component/Ssdelivered";

const Category = ({ categoryToShow, filtersearchResult, slugValue }) => {
  const projectSliders = useRef([]);
  
  return (
    <>
      {!filtersearchResult ? (
        <>
          {categoryToShow.NewLaunch ? (
            <section className="category-section">
              <div className="container">
                <div className="web-container">
                  <div className="title col-12 float-start text-center">
                    <h2
                      data-aos="zoom-in"
                      data-aos-easing="ease-in"
                      data-aos-offset="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      NEW LAUNCH
                    </h2>
                  </div>
                  <div className="row">
                    {Object.keys(categoryToShow.NewLaunch).map(
                      (pd1, index) => (
                        <div
                          key={index}
                          className="col-12 categoryimage"
                          data-aos="fade-in"
                          data-aos-easing="ease-in"
                          data-aos-offset="50"
                          data-aos-duration="500"
                          data-aos-once="true"
                        >
                          {/* <Link href={"/projects/" + slugValue + "/" + categoryToShow.NewLaunch[index].slug}> */}
                          {/* <Link
                            href={
                              categoryToShow.NewLaunch[index]
                                .linkActive != 0
                                ? "/projects/" +
                                  slugValue +
                                  "/" +
                                  categoryToShow.NewLaunch[index].slug
                                : ""
                            }
                          > */}
                            <div
                              className={`projectslider m-0`}
                              ref={(el) => projectSliders.current.push(el)}
                            >
                              <figure className="snip00161 m-0">
                                {categoryToShow.NewLaunch[index]
                                  .imageSrc ? (
                                  <Image
                                    src={
                                      categoryToShow.NewLaunch[index]
                                        .imageSrc
                                    }
                                    width="1200"
                                    height="597"
                                    alt={
                                      categoryToShow.NewLaunch[index]
                                        .ProjectName
                                    }
                                  />
                                ) : null}
                                <div className='col-12 float-start d-flex align-items-center p-4 justify-content-between d-none' data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in" data-aos-once='true'>
                                <figcaption>
                                  <h3 className='m-0'>
                                    {
                                      categoryToShow.NewLaunch[index]
                                        .ProjectName
                                    }
                                  </h3>
                                  <p className='fw-normal'>
                                    {
                                      categoryToShow.NewLaunch[index]
                                        .location
                                    }
                                  </p>
                                  
                                </figcaption>
                                <span className="btns rounded m-0"><span className="text-green">Coming Soon</span></span>
                                </div>
                              </figure>
                            </div>
                          {/* </Link> */}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          ) : null}
          {categoryToShow.LuxuryResidences ? (
            <section className="category-section">
              <div className="container">
                <div className="web-container">
                  <div className="title col-12 float-start text-center">
                    <h2
                      data-aos="zoom-in"
                      data-aos-easing="ease-in"
                      data-aos-offset="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      Ongoing
                    </h2>
                  </div>
                  <div className="row">
                    {Object.keys(categoryToShow.LuxuryResidences).map(
                      (pd1, index) => (
                        <div
                          key={index}
                          className="col-lg-6 col-sm-6 col-12 categoryimage"
                          data-aos="fade-in"
                          data-aos-easing="ease-in"
                          data-aos-offset="50"
                          data-aos-duration="500"
                          data-aos-once="true"
                        >
                          {/* <Link href={"/projects/" + slugValue + "/" + categoryToShow.LuxuryResidences[index].slug}> */}
                          <Link
                            href={
                              categoryToShow.LuxuryResidences[index]
                                .linkActive != 0
                                ? "/projects/" +
                                  slugValue +
                                  "/" +
                                  categoryToShow.LuxuryResidences[index].slug
                                : ""
                            }
                          >
                            <div
                              className={`projectslider`}
                              ref={(el) => projectSliders.current.push(el)}
                            >
                              <figure className="snip0016">
                                {categoryToShow.LuxuryResidences[index]
                                  .imageSrc ? (
                                  <Image
                                    src={
                                      categoryToShow.LuxuryResidences[index]
                                        .imageSrc
                                    }
                                    width="655"
                                    height="597"
                                    alt={
                                      categoryToShow.LuxuryResidences[index]
                                        .ProjectName
                                    }
                                  />
                                ) : null}
                                <figcaption>
                                  <h3>
                                    {
                                      categoryToShow.LuxuryResidences[index]
                                        .ProjectName
                                    }
                                  </h3>
                                  <p>
                                    {
                                      categoryToShow.LuxuryResidences[index]
                                        .location
                                    }
                                  </p>
                                  <p>Know More</p>
                                </figcaption>
                              </figure>
                            </div>
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          ) : null}
          {categoryToShow.PremiumResidences ? (
            <section className="category-section">
              <div className="container">
                <div className="web-container">
                  <div className="title col-12 float-start text-center">
                    <h2
                      data-aos="zoom-in"
                      data-aos-easing="ease-in"
                      data-aos-offset="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      Ready To Move
                    </h2>
                  </div>
                  <div className="row">
                    {Object.keys(categoryToShow.PremiumResidences).map(
                      (pd1, index) => (
                        <div
                          key={index}
                          className="col-lg-6 col-sm-6 col-12 categoryimage"
                          data-aos="fade-in"
                          data-aos-easing="ease-in"
                          data-aos-offset="50"
                          data-aos-duration="500"
                          data-aos-once="true"
                        >
                          <Link
                            href={
                              categoryToShow.PremiumResidences[index]
                                .linkActive != 0
                                ? "/projects/" +
                                  slugValue +
                                  "/" +
                                  categoryToShow.PremiumResidences[index].slug
                                : ""
                            }
                          >
                            <div
                              className={`projectslider`}
                              ref={(el) => projectSliders.current.push(el)}
                            >
                              <figure className="snip0016">
                                {categoryToShow.PremiumResidences[index]
                                  .imageSrc ? (
                                  <Image
                                    src={
                                      categoryToShow.PremiumResidences[index]
                                        .imageSrc
                                    }
                                    width="655"
                                    height="597"
                                    alt={
                                      categoryToShow.PremiumResidences[index]
                                        .ProjectName
                                    }
                                  />
                                ) : null}
                                <figcaption>
                                  <h3>
                                    {
                                      categoryToShow.PremiumResidences[index]
                                        .ProjectName
                                    }
                                  </h3>
                                  <p>
                                    {
                                      categoryToShow.PremiumResidences[index]
                                        .location
                                    }
                                  </p>
                                  <p>Know More</p>
                                </figcaption>
                              </figure>
                            </div>
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          ) : null}
          {categoryToShow.Completed ? (
            <section className="category-section">
              <div className="container">
                <div className="web-container">
                  <div className="title col-12 float-start text-center">
                    <h2
                      data-aos="zoom-in"
                      data-aos-easing="ease-in"
                      data-aos-offset="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      Completed
                    </h2>
                  </div>
                  <div className="row">
                    {Object.keys(categoryToShow.Completed).map(
                      (pd1, index) => (
                        <div
                          key={index}
                          className="col-lg-6 col-sm-6 col-12 categoryimage"
                          data-aos="fade-in"
                          data-aos-easing="ease-in"
                          data-aos-offset="50"
                          data-aos-duration="500"
                          data-aos-once="true"
                        >
                          <Link
                            href={
                              categoryToShow.Completed[index]
                                .linkActive != 0
                                ? "/projects/" +
                                  slugValue +
                                  "/" +
                                  categoryToShow.Completed[index].slug
                                : ""
                            }
                          >
                            <div
                              className={`projectslider`}
                              ref={(el) => projectSliders.current.push(el)}
                            >
                              <figure className="snip0016">
                                {categoryToShow.Completed[index]
                                  .imageSrc ? (
                                  <Image
                                    src={
                                      categoryToShow.Completed[index]
                                        .imageSrc
                                    }
                                    width="655"
                                    height="597"
                                    alt={
                                      categoryToShow.Completed[index]
                                        .ProjectName
                                    }
                                  />
                                ) : null}
                                <figcaption>
                                  <h3>
                                    {
                                      categoryToShow.Completed[index]
                                        .ProjectName
                                    }
                                  </h3>
                                  <p>
                                    {
                                      categoryToShow.Completed[index]
                                        .location
                                    }
                                  </p>
                                  <p>Know More</p>
                                </figcaption>
                              </figure>
                            </div>
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          ) : null}
          {categoryToShow.DeliveredProjects ? (
            <Ssdelivered deliveredData={categoryToShow.DeliveredProjects}  slugValue={slugValue}/>
          ) : null}
        </>
      ) : (
        <section className="category-section fitleroption">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center">
                  <h2 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {filtersearchResult.length > 0
                      ? "Search Result"
                      : "No Data Found"}
                  </h2>
                </div>
                {filtersearchResult.map((searchResult, index) => (
                  <div
                    key={index}
                    className="col-lg-6 col-sm-6 col-12 categoryimage"
                    data-aos="fade-in"
                    data-aos-easing="ease-in"
                    data-aos-offset="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                      <Link
                            href={
                              searchResult.linkActive != 0
                                ? "/projects/" +
                                  slugValue +
                                  "/" +
                                  searchResult.slug
                                : ""
                            }
                          >
                    <div
                      className={`projectslider`}
                      ref={(el) => projectSliders.current.push(el)}
                    >
                      <figure className="snip0016">
                        {searchResult.imageSrc ? (
                          <Image
                            src={searchResult.imageSrc}
                            width="655"
                            height="597"
                            alt={searchResult.ProjectName}
                          />
                        ) : null}
                        <figcaption>
                          <h3>{searchResult.ProjectName}</h3>
                          <p>{searchResult.location}</p>
                          <p>Know More</p>
                        </figcaption>
                      </figure>
                    </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Category;
