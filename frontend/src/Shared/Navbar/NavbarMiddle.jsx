import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import SmallMenu from "./Partial/SmallMenu";
import { useState } from "react";
import { Link } from "react-router";
import HoverCart from "@/Pages/Cart/HoverCart";

const NavbarMiddle = () => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="bg-slate-200 px-2 lg:px-0">
      <div className="max-w-7xl mx-auto flex justify-between py-4">
        <div className="flex-1 lg:flex-0 lg:hidden">
          <MdOutlineMenu onClick={() => setOpen(!open)} className="text-2xl" />
        </div>
        <div className="lg:flex-1 flex justify-center lg:justify-start">
          <Link to='/' className="lg:text-7xl font-bold text-black">LOGO</Link>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-full lg:flex-1">
          <div className="relative w-full">
            <input
              type="search"
              id="phone"
              //   onChange={(e) => setPhone(e.target.value)}
              className="px-2 border w-full py-3 border-gray-700 focus:outline-none"
              placeholder="Search Your Product"
            />
            <button
              //   onClick={handleSearch}
              className="absolute bg-color_1 h-full px-4 right-0"
            >
              <FaMagnifyingGlass className="text-xl text-white" />
            </button>
          </div>
        </div>
        <div className="flex lg:hidden items-center gap-4 flex-1 justify-end relative">
          <div
            className="relative mr-6 lg:mr-0"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <span className="absolute -top-2 -right-3 h-6 w-6 z-50 rounded-full bg-color_1 border-white border-2 text-xs font-medium flex items-center justify-center text-white">
              00
            </span>
            <FaCartShopping className="text-2xl text-color_1 hover:cursor-pointer hover:scale-105" />
          </div>
          <HoverCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        </div>
      </div>
      <div
        className={`lg:hidden absolute top-0 ${
          open ? "left-0" : "-left-[100%]"
        } duration-300 z-30 w-full`}
      >
        <SmallMenu setOpen={setOpen} open={open} />
      </div>
    </div>
  );
};

export default NavbarMiddle;
