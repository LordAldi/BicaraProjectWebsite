import Slider from "react-slick";
import { Component } from "react";
import CourselItem from "./CourselItem/CourselItem";
import ban1 from "../../assets/images/ban1.png";
import ban2 from "../../assets/images/ban2.png";
import ban3 from "../../assets/images/ban3.png";
import ban4 from "../../assets/images/ban4.jpg";
class Coursel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      centerPadding: "60px",
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      adaptiveHeight: true,
      //   adaptiveHeight: true,
      speed: 500,
    };
    return (
      <Slider {...settings}>
        <CourselItem source={ban1} />
        <CourselItem source={ban2} />
        <CourselItem source={ban3} />
        {/* <CourselItem source={ban4} /> */}
      </Slider>
    );
  }
}

export default Coursel;
