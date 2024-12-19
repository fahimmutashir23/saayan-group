import { Link } from "react-router";

const NavbarTop = () => {
  return (
    <div className="bg-color_1 py-2 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex items-center gap-2 text-xs lg:text-sm">
          <h2>
            <span>Welcome </span>
            <span className="text-color_4">Poster Hub</span>
          </h2>
          <div className="h-4 w-[1px] bg-white"></div>
          <h2>
            <span>Currency </span>
            <span className="text-color_4">BDT</span>
          </h2>
          <div className="h-4 w-[1px] bg-white"></div>
          <h2>
            <span>Language </span>
            <span className="text-color_4">English</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 justify-center text-sm lg:text-base mt-2 lg:mt-0">
          <Link to="/account">Account</Link>
          <div className="h-4 w-[1px] bg-white"></div>
          <Link to="/cart">My Cart</Link>
          <div className="h-4 w-[1px] bg-white"></div>
          <Link to="/register">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;