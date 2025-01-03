import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const NavbarTop = () => {
  return (
    <div className="bg-color_4 py-2 text-black px-2 lg:px-1">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="flex items-center gap-2 text-xs lg:text-sm">
          <h2 className="flex items-center gap-1">
            <FaPhone className="text-color_3" />
            <span className="text-black">+880 1757 489756</span>
            <span className="text-black">+880 1719 381825</span>
          </h2>
          <div className="h-4 w-[1px] bg-white"></div>
          <h2 className="flex items-center gap-1">
            <FaMailBulk className="text-color_3" />
            <span className="text-black">info@saayangroupbd.com</span>
          </h2>
        </div>
        <div className="flex items-center space-x-4 justify-center text-sm lg:text-base mt-2 lg:mt-0">
          <a href="https://www.facebook.com/profile.php?id=61571548554146&mibextid=ZbWKwL" className="bg-slate-200 p-1">
            <FaFacebook className="text-color_3 lg:text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/salman-sabuj-1365171a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-slate-200 p-1">
            <FaLinkedin className="text-color_3 lg:text-xl" />
          </a>
          <a href="https://wa.me/+880 1719-381825" className="bg-slate-200 p-1">
            <FaWhatsapp className="text-color_3 lg:text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
