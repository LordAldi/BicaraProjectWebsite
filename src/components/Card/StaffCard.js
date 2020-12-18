import image from "../../assets/images/raya.png";
const StaffCard = ({ data }) => {
  const { name, desc, role, img } = data;
  return (
    <div className="px-10 ">
      <figure className="bg-gray-100 rounded-xl p-8">
        <img
          className="w-32 h-32 rounded-full mx-auto object-cover"
          src={img}
        />
        <div class="pt-6  text-center  space-y-4">
          <blockquote>
            <p class="text-lg font-semibold">“{desc}”</p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-indigo-600">{name}</div>
            <div class="text-gray-500">{role}</div>
            <div class="text-gray-500">at Bicara Project</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};
export default StaffCard;
