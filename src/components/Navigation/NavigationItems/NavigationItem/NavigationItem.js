import { NavLink } from "react-router-dom";

export default function NavigationItem({ link, exact, children }) {
  return (
    <li className="m-0 flex  w-auto items-center md:my-3.5 md:box-border md:block  text-xl	">
      <NavLink
        to={link}
        exact={exact}
        className="text-white items-center h-full px-4 py-3  md:box-border md:block"
        activeClassName="font-bold"
      >
        {children}
      </NavLink>
    </li>
  );
}
