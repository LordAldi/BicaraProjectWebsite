// import image from "../../assets/images/raya.png";
const StaffCard = ({ data }) => {
  const { name, desc, role, photo } = data;
  return (
    <div className="px-10 ">
      <figure className="bg-gray-100 rounded-xl p-8">
        <img
          className="w-32 h-32 rounded-full mx-auto object-cover"
          src={photo.url}
          alt={name}
        />
        <div className="pt-6  text-center  space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">“{desc}”</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-indigo-600">{name}</div>
            <div className="text-gray-500">{role}</div>
            <div className="text-gray-500">at Bicara Project</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};
export default StaffCard;
