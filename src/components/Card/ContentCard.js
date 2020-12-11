import LazyLoad from "react-lazyload";

const ContentCard = ({ data, hide, rounded, editor, popular }) => {
  return (
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
        className={`bg-white h-15 ${rounded && "rounded-b-2xl"} p-2 shadow-lg`}
      >
        <p
          className={`text-xxs truncate ${editor && "text-xs"} ${
            popular && "text-lg"
          }`}
        >
          {data.judul}
        </p>
      </div>
    </div>
  );
};

export default ContentCard;
