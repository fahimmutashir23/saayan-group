import { Link, NavLink } from "react-router";
import SmallMenu from "./Partial/SmallMenu";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { navItem } from "./Partial/navItem";

const NavbarMain = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-color_1 relative px-2 lg:px-1 py-2 lg:py-0">
      <div className="max-w-7xl mx-auto text-white flex justify-between">
        <div className="lg:flex-1 flex justify-center items-center lg:justify-start">
          <Link to="/" className="lg:text-4xl font-bold text-white">
            LOGO
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center text-xl">
            {navItem.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.link}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-5 bg-color_4/20"
                    : "px-4 py-5"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <MdOutlineMenu onClick={() => setOpen(!open)} className="text-2xl" />
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

export default NavbarMain;
