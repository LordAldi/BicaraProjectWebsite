import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import ig from "../../assets/images/ig.png";
import yt from "../../assets/images/yt.png";
const Footer = () => {
  return (
    <footer className="bg-primary p-4 flex flex-col text-white">
      <div className="flex justify-around content-center	 conatiner">
        <div className=" flex items-center content-center justify-center">
          <Logo height={`50px`} />
        </div>

        <p className="w-96 hidden	lg:flex items-center content-center justify-center">
          Jl. Pinang Raya No. 41, Kel. Curug Mekar, Kec. Bogor Barat, 16113,
          Bogor
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
          <div className="flex items-center">
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
      </div>
      <p className="self-center mt-4">©bicaraproject.com 2021</p>
    </footer>
  );
};

export default Footer;
