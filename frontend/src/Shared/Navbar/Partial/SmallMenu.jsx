/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router";
import { navItem } from "./navItem";

const SmallMenu = ({ setOpen, open }) => {
  // Disable body scroll when the menubar is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
      return () => {
        document.body.classList.remove("no-scroll");
      };
    }
  }, [open]);
  
  return (
    <div className="bg-white h-screen overflow-y-auto">
      <div className="flex justify-between items-center p-3">
        <h1>Logo</h1>
        <IoCloseSharp onClick={() => setOpen(!open)} className="text-2xl" />
      </div>
      <hr />
      <div className="py-3">
        <ul className=" text-xl space-y-4">
          {navItem.map((item, idx) => (
            <li key={idx} className="px-3">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SmallMenu;
