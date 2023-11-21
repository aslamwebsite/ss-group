import React from 'react';
import { Integrity } from './svg-components/Integrity';
import { Sustainable } from './svg-components/Sustainable';
import { Innovative } from './svg-components/Innovative';
import { Excellence } from './svg-components/Excellence';

const circleData = [
    {
        title: 'INTEGRITY',
        description: 'As professionals, we are dedicated to doing the right thing in every action and decision we make. Not just for us, but for the benefit of all the involved parties.',
        icon: <Integrity />,
    },
    {
        title: 'SUSTAINABLE',
        description: 'In addition to the unparalleled quality buildings and facilities of our projects, we are committed to enhancing their social and environmental value by embracing features that meet long-term sustainability needs.',
        icon: <Sustainable />,
    },
    {
        title: 'INNOVATIVE',
        description: 'We are dedicated to bringing innovative technologies to planning, design and construction to improve building reliability, functionality and value.',
        icon: <Innovative />,
    },
    {
        title: 'EXCELLENCE',
        description: 'Every member of our team has a proactive attitude in making a substantial difference in their work, their community and their world.',
        icon: <Excellence />,
    },
];

export const Circleeffect = () => {
    return (
        <section>
            <div className="infographics">
                <div className="container">
                    <div className="col-lg-11 col-12 m-auto">
                        <div className="row">
                            {circleData.map((circle, index) => (
                                <div key={index} className="col-lg-3 col-12 text-center" data-aos="fade-left" data-aos-easing="ease-in" data-aos-offset="300" data-aos-duration="800" data-aos-once='true'>
                                    <div className="circle">
                                        <span>{circle.icon}</span>
                                    </div>
                                    <div className="circlecont">
                                        <h4>{circle.title}</h4>
                                        <p>{circle.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Circleeffect;