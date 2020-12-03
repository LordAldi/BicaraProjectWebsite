const CourselItem = ({ source }) => {
  // lg:w-1000
  return (
    <div className="transition duration-500 ease-in-out  w-60 sm:w-72 md:w-700 xl:w-1000 cursor-pointer transform hover:-translate-y-1 hover:scale-110">
      <img src={source} className="hover:animate-pulse" />
    </div>
  );
};
export default CourselItem;
