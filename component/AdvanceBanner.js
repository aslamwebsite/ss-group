import React from 'react';
import { Parallax } from 'react-parallax';
import Image from "next/image";

export const AdvanceBanner = ({ bannerData, project }) => {
  const sections = bannerData;

  const getStrengthValue = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    const isMac = /MacIntel/.test(navigator.platform);

    return isIOS || isMac ? 100 : 300;
  };

  return (
    <>
                    <div className='projectlogo'>
                        <Image src={project.logo} width='300' height='140' alt={project.ProjectName}/>
                    </div>
      {sections && sections.map((section, index) => (
        <div key={index} className="parallaximage col-12 float-start" data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
          <Parallax bgImage={section.imageUrl} strength={getStrengthValue()} className='h-auto'>
            <div className='full-height'>
              <div className='projectcontent' data-aos="fade-left" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="800" data-aos-once='true'>
                <h3 className='text-uppercase'>{section.content.title}</h3>
                <ul>
  {section.content.points.map((point, pointIndex) => {
    const isUnique = new Set(section.content.points).size === 1;

    return (
      <li key={pointIndex} className={isUnique ? 'remove-border' : ''}>
        <strong>{point.split(' ')[0]}</strong> {point.slice(point.split(' ')[0].length)}
      </li>
    );
  })}
</ul>
              </div>
            </div>
          </Parallax>
        </div>
      ))}
    </>
  );
};

export default AdvanceBanner;
