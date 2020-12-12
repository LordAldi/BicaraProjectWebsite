import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const ClassCard = ({ data, hide, rounded, editor }) => {
  return (
    <Link to={`/class/${data.slug}`}>
      <div
        className={`w-full ${
          hide && "hidden sm:block"
        } p-2 transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-110`}
      >
        <LazyLoad
          height={200}
          placeholder={
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
          }
        >
          <img
            src={data.thumbnail.url}
            alt="images"
            className={`${rounded && "rounded-t-2xl"} shadow-lg`}
          />
        </LazyLoad>
        <div
          className={`bg-white h-15 ${
            rounded && "rounded-b-2xl"
          } p-2 shadow-lg flex flex-col`}
        >
          <h4 className="self-center text-lg md:text-2xl	font-semibold pb-3 pt-1">
            {data.name}
          </h4>
          <p className={`text-xxs md:text-xs text-gray-400`}>
            {data.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ClassCard;
