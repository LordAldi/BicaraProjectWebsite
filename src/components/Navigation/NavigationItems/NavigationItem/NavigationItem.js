import { NavLink } from "react-router-dom";

export default function NavigationItem({ link, exact, children }) {
  return (
    <li>
      <NavLink to={link} exact={exact} activeClassName="bg-green-500">
        {children}
      </NavLink>
    </li>
  );
}
