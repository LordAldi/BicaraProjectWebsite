import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import ig from "../../assets/images/ig.png";
import yt from "../../assets/images/yt.png";
import wa from "../../assets/images/wa.png";
import loc from "../../assets/images/loc.png";
import email from "../../assets/images/email.png";
const Footer = () => {
  return (
    <footer className="bg-primary p-4 flex flex-col text-white">
      <div className="flex-col md:flex-row flex justify-around content-center	 conatiner">
        <div className=" hidden	lg:flex items-center content-center justify-center">
          <Logo height={`50px`} />
        </div>
        <div className="w-96 flex flex-col  content-center justify-center ">
          <div className="flex">
            <img src={loc} className="w-4 object-contain	mr-4" alt="yt" />
            <a
              href="https://www.google.com/maps/place/Jl.+Pinang+Raya+No.41,+RT.02%2FRW.09,+Curugmekar,+Kec.+Bogor+Bar.,+Kota+Bogor,+Jawa+Barat+16113/@-6.5598849,106.7616504,14.88z/data=!4m13!1m7!3m6!1s0x2e69c488a32f736d:0xb744bf2648e14951!2sJl.+Pinang+Raya+No.41,+RT.02%2FRW.09,+Curugmekar,+Kec.+Bogor+Bar.,+Kota+Bogor,+Jawa+Barat+16113!3b1!8m2!3d-6.5581277!4d106.765996!3m4!1s0x2e69c488a32f736d:0xb744bf2648e14951!8m2!3d-6.5581277!4d106.765996"
              target="_blank"
              className="hover:text-gray-200"
            >
              Jl. Pinang Raya No. 41, Kel. Curug Mekar, Kec. Bogor Barat, 16113,
              Bogor
            </a>
          </div>
          <div className="flex md:mt-4">
            <img src={email} className="w-4 object-contain	mr-4" alt="yt" />
            <p className="">Joinbicara@gmail.com</p>
          </div>
        </div>
        <ul className="m-0 p-0 hidden	lg:flex list-none flex-col h-full items-center content-center justify-center">
          <li>
            <NavLink to="/" exact className="" activeClassName="font-bold">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/class" exact activeClassName="font-bold">
              Class
            </NavLink>
          </li>
          <li>
            <NavLink to="/content" exact activeClassName="font-bold">
              Content
            </NavLink>
          </li>
          <li>
            <NavLink to="/event" exact activeClassName="font-bold">
              Event
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeClassName="font-bold">
              About Us
            </NavLink>
          </li>
        </ul>
        <div className="flex flex-row md:flex-col md:content-center mt-4 md:mt-0 md:justify-center	">
          <div className="flex w-full md:flex-col items-center justify-around">
            <div className="flex flex-col items-center">
              <h5 className="self-center py-1">Social Media</h5>
              <div className="flex ">
                <a href="https://www.instagram.com/bicara.project/">
                  <img
                    src={ig}
                    className="px-2 transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-110"
                    alt="ig"
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCtpWWxLpX4cyXQO-y3wQCag">
                  <img
                    src={yt}
                    className="px-2 transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-110"
                    alt="yt"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h5 className="self-center py-1">Contact Us</h5>
              <a href="https://api.whatsapp.com/send?phone=6281282021730">
                <img
                  src={wa}
                  className="px-2 transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-110"
                  alt="yt"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="self-center mt-4">©bicaraproject.com 2021</p>
    </footer>
  );
};

export default Footer;
