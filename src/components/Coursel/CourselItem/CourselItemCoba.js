import LazyLoad from "react-lazyload";
const CourselItemCoba = ({ source, link }) => {
  // lg:w-1000
  return (
    <div className="transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-110 px-1 md:px-4">
      <a href={link}>
        <LazyLoad
          placeholder={
            <div className="h-60 bg-secondary w-full animate-pulse"></div>
          }
        >
          <img src={source} className="hover:animate-pulse" alt="img" />
        </LazyLoad>
      </a>
    </div>
  );
};
export default CourselItemCoba;
