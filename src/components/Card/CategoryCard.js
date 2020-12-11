import LazyLoad from "react-lazyload";
import React from "react";
const CategoryCard = ({ category }) => {
  return (
    <div className="transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-110">
      <LazyLoad
        height={200}
        placeholder={
          <div className="h-60 bg-secondary w-full animate-pulse"></div>
        }
      >
        <img
          src={category.thumbnail.url}
          alt={category.name}
          className="shadow-lg"
        />
      </LazyLoad>
    </div>
  );
};

export default CategoryCard;
