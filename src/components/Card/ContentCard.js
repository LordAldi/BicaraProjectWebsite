import image from "../../assets/images/ban2.png";

const ContentCard = ({ data, hide }) => {
  console.log(hide);
  return (
    <div
      className={`w-full ${
        hide && "hidden sm:block"
      } p-2 transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-110`}
    >
      <img
        src={data.thumbnail.url}
        alt="images"
        className="rounded-t-2xl shadow-lg "
      />
      <div className="bg-white h-15 rounded-b-2xl p-2 shadow-lg">
        <p className="text-xxs truncate">{data.judul}</p>
      </div>
    </div>
  );
};

export default ContentCard;
