import { FaRocket } from "react-icons/fa";
import { FaGear, FaMagnifyingGlass } from "react-icons/fa6";

const Help = () => {
  return (
    <div>
      <h1 className="text-color_3 text-2xl lg:text-4xl font-bold text-center">
        How Can We Help
      </h1>
      <div className="w-28 h-1 rounded-full mx-auto bg-black mb-10"></div>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
        <div className="flex flex-col items-center space-y-5 p-5 lg:p-10 rounded-md shadow-sm shadow-color_3/50 duration-300 hover:scale-105 group">
          <div className="bg-color_2 p-3 rounded-full max-w-fit">
            <FaMagnifyingGlass className="text-2xl group-hover:scale-110 duration-300 text-white" />
          </div>
          <h1 className="text-2xl font-semibold">Find Out What Your Need</h1>
        </div>
        <div className="flex flex-col items-center space-y-5 p-5 lg:p-10 rounded-md shadow-sm shadow-color_3/50 duration-300 hover:scale-105 group">
          <div className="bg-color_2 p-3 rounded-full max-w-fit">
            <FaGear className="text-2xl group-hover:scale-110 duration-300 text-white" />
          </div>
          <h1 className="text-2xl font-semibold">Work Out The Details</h1>
        </div>
        <div className="flex flex-col items-center space-y-5 p-5 lg:p-10 rounded-md shadow-sm shadow-color_3/50 duration-300 hover:scale-105 group">
          <div className="bg-color_2 p-3 rounded-full max-w-fit">
            <FaRocket className="text-2xl group-hover:scale-110 duration-300 text-white" />
          </div>
          <h1 className="text-2xl font-semibold">We Get To Work Fast</h1>
        </div>
      </section>
    </div>
  );
};

export default Help;
