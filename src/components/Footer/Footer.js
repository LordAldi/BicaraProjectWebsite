import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavigationItem from "../Navigation/NavigationItems/NavigationItem/NavigationItem";
import ig from "../../assets/images/ig.png";
import fb from "../../assets/images/fb.png";
import tw from "../../assets/images/tw.png";
const Footer = () => {
  return (
    <footer className="bg-primary p-4 flex flex-col text-white">
      <div className="flex justify-around content-center	 conatiner">
        <div className=" flex items-center content-center justify-center">
          <Logo height={`50px`} />
        </div>

        <p className="w-96 hidden	lg:flex items-center content-center justify-center">
          Graha Edukasi, Jl. MP. Mangkunegara No.5, Bukit sangkal, Kec.
          Kalidoni, Kota Palembang, Sumatera Selatan, 30114
        </p>
        <ul className="m-0 p-0 hidden	lg:flex list-none flex-col h-full items-center content-center justify-center">
          <li>
            <NavLink to="/" exact className="" activeClassName="font-bold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" exact activeClassName="font-bold">
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/class" exact activeClassName="font-bold">
              Class
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeClassName="font-bold">
              About
            </NavLink>
          </li>
        </ul>
        <div className="flex flex-col content-center justify-center	">
          <h5 className="self-center py-1">Social Media</h5>
          <div className="flex">
            <img src={ig} className="px-2" />
            <img src={fb} className="px-2" />
            <img src={tw} className="px-2" />
          </div>
        </div>
      </div>
      <p className="self-center mt-4">©bicaraproject.com 2021</p>
    </footer>
  );
};

export default Footer;
