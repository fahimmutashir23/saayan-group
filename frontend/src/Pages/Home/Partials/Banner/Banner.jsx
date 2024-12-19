import banner_1 from "../../../../assets/Banner/banner_1.jpg";
// import banner_2 from "../../../../assets/Banner/banner_2.jpg";
import banner_3 from "../../../../assets/Banner/banner_3.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 lg:h-[70vh] overflow-hidden">
      <div
        className="border lg:w-3/4 bg-cover bg-center bg-no-repeat p-2 lg:p-10 flex items-center"
        style={{ backgroundImage: `url(${banner_1})` }}
      >
        <div className="space-y-3">
          <h1 className="text-2xl lg:text-5xl font-semibold text-white bg-color_3/40 max-w-fit p-4">
            BEST THEME
          </h1>
          <p className="lg:text-lg font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            doloremque nostrum ducimus ex necessitatibus. Amet placeat hic atque
            suscipit veritatis.
          </p>
          <button className="bg-color_4/20 p-2 border border-white text-xl text-white font-medium flex items-center">
            Read More
            <MdKeyboardArrowRight className="mt-1 text-2xl" />
          </button>
        </div>
      </div>
      <div className="border lg:w-1/4">
        <img src={banner_3} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default Banner;
