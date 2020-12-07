import LazyLoad from "react-lazyload";
const CourselItem = ({ source }) => {
  // lg:w-1000
  return (
    <div className="transition duration-500 ease-in-out  w-60 sm:w-72 md:w-700 xl:w-1000 cursor-pointer transform hover:-translate-y-1 hover:scale-110">
      <LazyLoad
        placeholder={
          <div className="h-60 bg-secondary w-full animate-pulse"></div>
        }
      >
        <img src={source} className="hover:animate-pulse" alt="img" />
      </LazyLoad>
    </div>
  );
};
export default CourselItem;
