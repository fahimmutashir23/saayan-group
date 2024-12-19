import { FaHeart, FaShoppingCart } from "react-icons/fa";

const HoverCard = () => {
  return (
    <div className="w-0 absolute top-0 right-0 z-50 h-full group-hover:w-16 bg-color_4 duration-500 flex flex-col justify-evenly items-center">
      <div className="cursor-pointer flex justify-center items-center w-full h-full">
        <FaShoppingCart className="text-3xl text-white" />
      </div>
      <div className="h-[2px] w-full bg-white"></div>
      <div className="cursor-pointer flex justify-center items-center w-full h-full">
        <FaHeart className="text-3xl text-white" />
      </div>
    </div>
  );
};

export default HoverCard;
