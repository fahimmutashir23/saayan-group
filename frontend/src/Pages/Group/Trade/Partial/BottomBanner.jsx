import { IoSync } from "react-icons/io5";
import { MdOutlineNetworkCell } from "react-icons/md";

const BottomBanner = () => {
  return (
    <div className="bg-color_2 py-5 lg:py-10 lg:px-20 flex flex-col lg:flex-row justify-around items-center gap-20">
      <div className="font-semibold text-2xl text-white">
        Purpose of a convoy is to keep your term
      </div>
      <div>
        <h1 className="flex items-center gap-2 text-xl font-semibold text-white">
          <span className="bg-color_3/90 p-3 rounded-full">
            <MdOutlineNetworkCell className="text-white" />
          </span>
          Build for the impact
        </h1>
        <p className="text-white text-md pl-14">
          we identify and nature a truly diverse team of designers developers
          and marketers.
        </p>
      </div>
      <div>
        <h1 className="flex items-center gap-2 text-xl font-semibold text-white">
          <span className="bg-color_3/90 p-3 rounded-full">
            <IoSync className="text-white" />
          </span>
          Build for the impact
        </h1>
        <p className="text-white text-md pl-14">
          we identify and nature a truly diverse team of designers developers
          and marketers.
        </p>
      </div>
    </div>
  );
};

export default BottomBanner;
