import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from "../img/1.jpg";
import two from "../img/2.jpg";
import three from "../img/3.jpg";
import four from "../img/4.jpg";
import five from "../img/5.jpg";
import six from "../img/6.jpg";
import seven from "../img/7.jpg";
import eight from "../img/8.jpg";
import nine from "../img/9.jpg";
import ten from "../img/10.jpg";

export default class Images extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };

    return (
      <div id="images">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 ">                     
                    <div id="element-1" class="element text-center">Images</div>
                    <div id="element-2" class="element">Images</div>
                  </div>
              </div>
          </div>
        <div>
          <Carousel
            partialVisible={true}
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 10"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-right-10-px"
          >
            <div className="carousel_images">
              <img src={one} alt="" className="img-fluid" />
            </div>
            <div className="carousel_images">
              <img src={two} alt="" className="img-fluid" />
            </div>
            <div className="carousel_images">
              <img src={three} alt="" className="img-fluid" />
            </div>
            <div className="carousel_images">
              <img src={four} alt="" className="img-fluid" />
            </div>
            <div className="carousel_images">
              <img src={five} alt="" className="img-fluid" />
            </div>
            <div className="carousel_images">
              <img src={six} alt="" className="img-fluid" />
            </div>
            <div className="carousel_images">
              <img src={seven} alt="" className="img-fluid" />
            </div>
            <div className="carousel_images">
              <img src={eight} alt="" className="img-fluid" />
            </div>
            <div className="carousel_images">
              <img src={nine} alt="" className="img-fluid" />
            </div>
            <div className="carousel_images">
              <img src={ten} alt="" className="img-fluid" />
            </div>
          </Carousel>
          ;
        </div>
      </div>
    );
  }
}
