import HoverCart from "@/Pages/Cart/HoverCart";
import { useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const NavbarMain = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="bg-color_1 hidden lg:block relative">
      <div className="max-w-7xl mx-auto text-white flex justify-between">
        <div>
          <ul className="flex items-center gap-3 text-xl">
            <NavLink
              to={"/shop"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "px-4 py-5 bg-color_4/20"
                  : "px-4 py-5"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "px-4 py-5 bg-color_4/20"
                  : "px-4 py-5"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "px-4 py-5 bg-color_4/20"
                  : "px-4 py-5"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <Link to="/cart" className="flex items-stretch group relative">
          <div 
          onMouseEnter={() => setIsCartOpen(true)}
          onMouseLeave={() => setIsCartOpen(false)}
          className="flex items-center gap-2 bg-color_2/50 px-4 py-5 text-xl">
            <IoCartSharp className="text-2xl" />
            My Cart
          </div>
          <div className="bg-color_2 px-4 py-5 text-xl">00</div>
          <HoverCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        </Link>
      </div>
    </div>
  );
};

export default NavbarMain;
