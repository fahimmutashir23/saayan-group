import { Outlet } from "react-router";
import NavbarMain from "../Shared/Navbar/NavbarMain";
import NavbarTop from "../Shared/Navbar/NavbarTop";
import Footer from "../Shared/Footer/Footer";
import Copyright from "../Shared/Footer/Copyright";
import Service from "@/Shared/Footer/Service";


const Layout = () => {
  return (
    <div className="relative">
        <NavbarTop />
      <div className="sticky top-0 z-50">
        <NavbarMain />
      </div>
      <div className="bg-white pt-2 pb-4 max-w-7xl mx-auto px-1">
        <Outlet />
      </div>
      <Service />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Layout;
