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
          title: 'SS CENDANA',
          text: 'Sector 83 Meets Gracious Living',
        },
        {
          imageSrc: '/history-banner02.webp',
          heading: '2022',
          title: 'SS KIAVASA',
          text: 'Arise to a higher level of living in Sector - 83, Gurugram',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2020',
          title: 'SS LINDEN',
          text: 'Exquisite living awaits you in Sector 84-85, New Gurugram',
        },
        {
          imageSrc: '/history-banner02.webp',
          heading: '2019',
          title: 'SS THE LEAF',
          text: 'This is the greenest place you will find in New Gurugram',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2018',
          title: 'SS STRADA',
          text: 'The mojo of neighbourhood shopping is back',
        },
        {
          imageSrc: '/history-banner02.webp',
          heading: '2017',
          title: 'SS HIGHPOINT',
          text: 'All roads lead to SS Highpoint in Sector - 86, Gurugram',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2016',
          title: 'SS 100',
          text: 'Work and play with a view in Sector - 49, Gurugram',
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
