import NavigationItem from "./NavigationItem/NavigationItem";

export default function NavigationItems() {
  return (
    <ul>
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
