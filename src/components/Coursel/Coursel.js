import Slider from "react-slick";
import { Component } from "react";
import CourselItem from "./CourselItem/CourselItem";
import ban1 from "../../assets/images/ban1.png";
import ban2 from "../../assets/images/ban2.png";
import ban3 from "../../assets/images/ban3.png";
import { Link } from "react-router-dom";
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
