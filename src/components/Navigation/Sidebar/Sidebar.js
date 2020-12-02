import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";

const Sidebar = ({ open, closed }) => {
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div
        className={` md:hidden h-screen bg-primary fixed w-9/12 top-0 left-0 z-50 py-8 px-4 box-border transition transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="flex flex-col items-center">
          <div className="h-10 mb-8">
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
