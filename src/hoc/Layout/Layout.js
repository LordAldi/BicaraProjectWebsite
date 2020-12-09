import Navbar from "../../components/Navigation/Navbar/Navbar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";

import { useState } from "react";
import Footer from "../../components/Footer/Footer";

export default function Layout({ children }) {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  return (
    <div className="bg-gray-50 pt-14">
      <Navbar
        drawerToggleClicked={() => {
          setShowSideDrawer(!showSideDrawer);
        }}
      />
      <Sidebar
        open={showSideDrawer}
        closed={() => {
          setShowSideDrawer(!showSideDrawer);
        }}
      />

      <main className="overflow-hidden mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
