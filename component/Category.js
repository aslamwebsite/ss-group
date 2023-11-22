import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Category = ({ categoryToShow, filtersearchResult, slugValue }) => {
    const projectSliders = useRef([]);
    return (
        <>
        {!filtersearchResult ?
        <>
         {categoryToShow.LuxuryResidences ?
        <section className='category-section'>
            <div className='container'>
                <div className='web-container'>
                    <div className='title col-12 float-start text-center'>
                        <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>On Going</h3>
                    </div>
                    <div className="row">
                    {Object.keys(categoryToShow.LuxuryResidences).map((pd1, index) => (
                            <div key={index} className='col-lg-6 col-12 categoryimage' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>
                                {/* <Link href={"/projects/" + slugValue + "/" + categoryToShow.LuxuryResidences[index].slug}> */}
                                <Link href={(categoryToShow.LuxuryResidences[index].linkActive==1) ? "/projects/" + slugValue + "/" + categoryToShow.LuxuryResidences[index].slug : ""}>
                                    <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                            {categoryToShow.LuxuryResidences[index].imageSrc ?
                                            <Image src={categoryToShow.LuxuryResidences[index].imageSrc} width='655' height='597' alt={categoryToShow.LuxuryResidences[index].ProjectName} />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryToShow.LuxuryResidences[index].ProjectName}</h4>
                                                <p>{categoryToShow.LuxuryResidences[index].location}</p>
                                                <p><a href="#">Know More</a></p>
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
        : null}
         {categoryToShow.PremiumResidences ?
        <section className='category-section'>
            <div className='container'>
                <div className='web-container row'>
               
                    <div className='title col-12 float-start text-center'>
                    <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>Ready To Move</h3>
                    </div>
                    {Object.keys(categoryToShow.PremiumResidences).map((pd1, index) => (
                            <div key={index} className='col-lg-6 col-12 categoryimage' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>
                                <Link href="">
                                    <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                            {categoryToShow.PremiumResidences[index].imageSrc ?
                                            <Image src={categoryToShow.PremiumResidences[index].imageSrc} width='655' height='597' alt={categoryToShow.PremiumResidences[index].ProjectName} />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryToShow.PremiumResidences[index].ProjectName}</h4>
                                                <p>{categoryToShow.PremiumResidences[index].location}</p>
                                                <p><a href="#">Know More</a></p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </section>
         : null}
          {categoryToShow.DeliveredProjects ?
        <section className='category-section completed'>
        <div className='container'>
            <div className='web-container'>
            <div className='title col-12 float-start text-center'>
                <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>Completed</h3>
                </div>
                </div>					             
        </div>
        <div class={(slugValue=='homes') ? "Marquee" : "Marquee flex-center"}>
        <div class={(slugValue=='homes') ? "Marquee-content" : ""}>
        <div className="col-12 float-start d-flex gap-2">
                {Object.keys(categoryToShow.DeliveredProjects).map((pd1, index) => (
                        <div key={index} className='Marquee-tag categoryimage' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>
                            <Link href="">
                                <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        {categoryToShow.DeliveredProjects[index].imageSrc ?
                                        <Image src={categoryToShow.DeliveredProjects[index].imageSrc} width='655' height='597' alt={categoryToShow.DeliveredProjects[index].ProjectName} />
                                        : null}
                                            <h4>{categoryToShow.DeliveredProjects[index].ProjectName}</h4>
                                            <p>{categoryToShow.DeliveredProjects[index].location}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
            </div>
            </div>
    </section>
        : null}
        </>
        : 
        <section className='category-section'>
            <div className='container'>
                <div className='web-container'>
                    <div className="row">
                    <div className='title col-12 float-start text-center'>
                    <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>{(filtersearchResult.length > 0) ? "Search Result" : "No Data Found" }</h3>
                    </div>
                    {filtersearchResult.map((searchResult, index) => (
                            <div key={index} className='col-lg-6 col-12 categoryimage' data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="500" data-aos-once='true'>
                                <Link href="">
                                    <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                            {searchResult.imageSrc ?
                                            <Image src={searchResult.imageSrc} width='655' height='597' alt={searchResult.ProjectName} />
                                            : null}
                                            <figcaption>
                                                <h4>{searchResult.ProjectName}</h4>
                                                <p>{searchResult.location}</p>
                                                <p><a href="#">Know More</a></p>
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
        }
        </>
    );
};

export default Category;
