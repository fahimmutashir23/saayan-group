/* eslint-disable react/prop-types */
import { IoIosCloseCircle } from "react-icons/io";
import img from "../../assets/watch.png";
import { button } from "@/Utils/Class/button";
const HoverCart = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <div
      className={`absolute right-0 top-[40px] lg:top-[68px] w-72 lg:w-80 bg-white border border-color_2 border-t-0 transition-all duration-300 transform origin-top z-50 ${
        isCartOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
      }`}
      onMouseEnter={() => setIsCartOpen(true)}
      onMouseLeave={() => setIsCartOpen(false)}
    >
      <div className="divide-y-2">
        <div className="flex gap-4 p-4 w-full">
            <div className="w-20 h-20 p-1 border">
                <img src={img} className="w-full h-full object-contain" alt="" />
            </div>
            <div className="w-full space-y-2">
                <h1 className="flex items-start justify-between w-full font-medium text-black">
                    <span> <span className="text-gray-500">2x</span> Watch </span>
                    <span> <IoIosCloseCircle className="text-red-500 text-xl" /> </span>
                </h1>
                <h2 className="text-color_2 font-semibold">500৳</h2>
            </div>
        </div>
        <div className="flex gap-4 p-4 w-full">
            <div className="w-20 h-20 p-1 border">
                <img src={img} className="w-full h-full object-contain" alt="" />
            </div>
            <div className="w-full space-y-2">
                <h1 className="flex items-start justify-between w-full font-medium text-black">
                    <span> <span className="text-gray-500">2x</span> Watch </span>
                    <span> <IoIosCloseCircle className="text-red-500 text-xl" /> </span>
                </h1>
                <h2 className="text-color_2 font-semibold">500৳</h2>
            </div>
        </div>
        <div className="p-4 w-full">
            <p className="flex justify-between text-gray-600 font-medium">
                <span>Total</span>
                <span>100৳</span>
            </p>
            <p className="flex justify-between text-gray-600 font-medium">
                <span>Shipping</span>
                <span>90৳</span>
            </p>
            <div className="h-[1px] bg-black w-full my-2"></div>
            <p className="flex justify-between text-gray-600 font-medium">
                <span>Sub Total</span>
                <span>190৳</span>
            </p>
        </div>
        <div className="mt-4">
          <button className={button.form}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoverCart;
