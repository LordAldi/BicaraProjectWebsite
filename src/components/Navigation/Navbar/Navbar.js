import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidebar/DrawerToggle/DrawerToggle";

export default function Navbar({ drawerToggleClicked }) {
  return (
    <header className="bg-primary h-14 w-full flex  items-center box-border px-6 z-30 justify-between md:justify-start fixed top-0 left-0">
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className="h-4/5">
        <Logo />
      </div>
      <nav className="h-full w-full justify-center hidden md:block">
        <NavigationItems />
      </nav>
    </header>
  );
}
