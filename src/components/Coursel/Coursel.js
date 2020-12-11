import Slider from "react-slick";
import CourselItem from "./CourselItem/CourselItem";
import React from "react";

function Coursel({ data }) {
  const settings = {
    className: "center min-h-96",
    centerMode: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: "60px",
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // adaptiveHeight: true,
    //   adaptiveHeight: true,
    speed: 500,
  };

  let coursels = data.map((coursel) => {
    return (
      <a href={coursel.Link} key={coursel.id}>
        <CourselItem source={coursel.picture.url} />
      </a>
    );
  });
  return <Slider {...settings}>{data && coursels}</Slider>;
}

export default Coursel;
