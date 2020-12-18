import { useContext } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import { UserContext } from "../../../Provider/UserProvider/UserProvider";
export default function NavigationItems() {
  const { user, logout } = useContext(UserContext);

  return (
    <ul className="m-0 p-0 flex list-none flex-col md:flex-row items-center md:justify-center h-full">
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/entertainment" exact>
        Entertainment
      </NavigationItem>
      <NavigationItem link="/event" exact>
        Events
      </NavigationItem>
      <NavigationItem link="/class" exact>
        Class
      </NavigationItem>
      <NavigationItem link="/about" exact>
        About
      </NavigationItem>
      {/* {user.isAuth ? (
        <li className="m-0 flex  w-auto items-center md:my-3.5 md:box-border md:block md:w-full text-xl text-red-500">
          <button onClick={logout}>Logout</button>
        </li>
      ) : (
        <NavigationItem link="/signin" exact>
          SignIn
        </NavigationItem>
      )} */}
    </ul>
  );
}
