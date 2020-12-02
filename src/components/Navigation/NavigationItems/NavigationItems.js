import NavigationItem from "./NavigationItem/NavigationItem";

export default function NavigationItems() {
  return (
    <ul className="m-0 p-0 flex list-none flex-col md:flex-row items-center h-full">
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/explore" exact>
        Explore
      </NavigationItem>
      <NavigationItem link="/class" exact>
        Class
      </NavigationItem>
      <NavigationItem link="/about" exact>
        About
      </NavigationItem>
      <NavigationItem link="/signin" exact>
        SignIn
      </NavigationItem>
    </ul>
  );
}
