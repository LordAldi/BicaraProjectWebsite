import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidebar/DrawerToggle/DrawerToggle";

export default function Navbar({ drawerToggleClicked }) {
  return (
    <header className="bg-primary h-14 w-full flex  items-center box-border px-6 z-30 justify-between md:justify-start">
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className="h-4/5">
        <Logo />
      </div>
      <nav className="h-full hidden md:block">
        <NavigationItems />
      </nav>
    </header>
  );
}
