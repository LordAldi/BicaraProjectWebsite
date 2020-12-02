const CourselItem = ({ source }) => {
  // lg:w-1000
  return (
    <div className="  w-60 sm:w-72 md:w-700 xl:w-1000">
      <img src={source} />
    </div>
  );
};
export default CourselItem;
