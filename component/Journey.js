import React, { Component } from "react";
import Slider from "react-slick";

export default class DynamicSliders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      circleContent: [
        {
          imageSrc: '/history-banner01.webp',
          heading: '2023',
          title: 'SS STRADA',
          text: 'Sector – 84, Gurugram\nThe next-door go-to-shopping destination',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2023',
          title: 'SS CENDANA',
          text: 'Sector – 83, Gurugram\nThe perfect blend of luxury and comfort',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2021',
          title: 'SS LINDEN FLOORS',
          text: 'Sector – 84-85, Gurugram\nIndependent living floors for your exclusive lifestyle',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2020',
          title: 'SS 100',
          text: 'Sector – 49, Gurugram\nA premium commercial hub of shop, dine and work',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2019',
          title: 'SS HIGHPOINT',
          text: 'Sector – 86, Gurugram\nOne-of-its-kind neighborhood shopping & leisure destination',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2014',
          title: 'SS OMNIA',
          text: 'Sector – 86, Gurugram\nAn open market retail-cum-office destination',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2013',
          title: 'THE LEAF',
          text: 'Sector – 85, Gurugram\nExquisite homes above all else',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2011',
          title: 'THE CORALWOOD',
          text: 'Sector – 84, Gurugram\nAn upscale yet affordable residential township',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2011',
          title: 'ALMERIA',
          text: 'Sector – 84, Gurugram\nAn exclusive low-rise independent residential lifestyle',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2011',
          title: 'SS PLAZA',
          text: 'Sector – 50, Gurugram\nAn address where business meets pleasure',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2009',
          title: 'THE HIBISCUS',
          text: 'Sector – 50, Gurugram\nA luxury township low in density and high on esteem',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2009',
          title: 'AARON VILLE',
          text: 'Sector – 48, Gurugram\nPremium villas with unparalleled luxury, grace, and sophistication',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2009',
          title: 'THE LILAC (I & 2)',
          text: 'Sector – 49, Gurugram\nAn affordable housing and comfortable living',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2008',
          title: 'DELIGHT AND SPLENDOURS',
          text: 'Sector – 57, Gurugram\nThe high rise condominium complex with modern amenities',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2008',
          title: 'THE PALLADIANS',
          text: 'Sector – 47-52, Gurugram\nAn independent luxury floors',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2004',
          title: 'GEORGIAL RESIDENCY',
          text: 'Sector – 50-51, Gurugram\nA distinctive residential lifestyle',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2004',
          title: 'SOUTHEND ELITE',
          text: 'Sector – 49, Gurugram\nExclusively designed premium floors',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2003',
          title: 'RADIANCE RESIDENCY',
          text: 'Sector – 49, Gurugram\nExtra spacious independent floors',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2002',
          title: 'SOUTHEND FLOORS',
          text: 'Sector – 49, Gurugram\nLimited floors ranging from 180 sq.yds. to 300 sq.yds.',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '1997',
          title: 'SOUTHEND',
          text: 'Sector – 48, Gurugram\nThe first-of-its-kind integrated township in Delhi NCR',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '1994',
          title: 'MAYFIELD GARDENS',
          text: 'Sector – 47, 50 & 51, Gurugram\nOne of the largest modern cosmopolitan townships in Gurugram',
        },
      ],      
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const { circleContent } = this.state;

    const autoplaySettings = {
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      fade: true,
    };

    return (
        <div className="col-12 float-start journey">
          <div className="container">
            <div className="col-12 text-center title">
              <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>OUR JOURNEY</h3>
            </div>
            <div className="col-lg-10 m-auto col-12 position-relative" data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="800" data-aos-once='true'>
              <Slider
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                {...autoplaySettings} 
              >
                {circleContent.map((circle, index) => (
                  <div key={index}>
                    <img src={circle.imageSrc} alt={circle.title} />
                  </div>
                ))}
              </Slider>
              <div className="position-absolute bottom-0 start-0 end-0 pb-5 thambnailslider overflow-hidden pt-3">
                <Slider
                  asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                  slidesToShow={5}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  {circleContent.map((circle, index) => (
                    <div key={index}>
                      <div className="circles">
                        <div className="circle">
                          <div className="circle-context">
                            <h4 className="m-0">{circle.heading}</h4>
                            <h5 className="m-0">{circle.title}</h5>
                            <p className="m-0">{circle.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
