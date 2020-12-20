import Slider from "react-slick";
import React from "react";
import CourselItemCoba from "./CourselItem/CourselItemCoba";

function CourselCoba({ data }) {
  const settings = {
    className: "center",
    infinite: true,
    dots: true,
    centerPadding: "100px",
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    pauseOnHover: true,
  };

  let coursels = data.map((coursel) => {
    return (
      <CourselItemCoba
        link={coursel.Link}
        source={coursel.picture.url}
        key={coursel.id}
      />
    );
  });
  return <Slider {...settings}>{data && coursels}</Slider>;
}

export default CourselCoba;
