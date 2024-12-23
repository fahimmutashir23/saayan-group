import { FaHeartbeat } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";

const Organic = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="p-10 lg:p-20 bg-color_4/30 space-y-5 group hover:shadow-lg duration-300">
        <div className="border-2 border-color_3 rounded-full p-4 max-w-fit group-hover:text-color_3 duration-300">
          <FaHeartbeat />
        </div>
        <h1 className="text-color_3 font-semibold text-2xl">100% Organic</h1>
        <p>
          Our products are 100% fresh, organic, and grown using natural,
          sustainable methods without any use of harmful chemicals or
          pesticides.
        </p>
      </div>
      <div className="p-10 lg:p-20 bg-color_4/30 space-y-5 group hover:shadow-lg duration-300">
        <div className="border-2 border-color_3 rounded-full p-4 max-w-fit group-hover:text-color_3 duration-300">
          <MdGroup />
        </div>
        <h1 className="text-color_3 font-semibold text-2xl">
          Sustainable Chain
        </h1>
        <p>
          We ensure sustainability and ethical practices throughout our supply
          chain, from sourcing to production, to minimize environmental impact
          and fair treatment of all parties involved.
        </p>
      </div>
      <div className="p-10 lg:p-20 bg-color_4/30 space-y-5 group hover:shadow-lg duration-300">
        <div className="border-2 border-color_3 rounded-full p-4 max-w-fit group-hover:text-color_3 duration-300">
          <GoGoal />
        </div>
        <h1 className="text-color_3 font-semibold text-2xl">Vision</h1>
        <p>
          Establish a sustainable, global brand in agriculture. known for
          providing top-quality, fresh products and being a leader in
          sustainability, customer satisfaction. and brand recognition.
        </p>
      </div>
      <div className="p-10 lg:p-20 bg-color_4/30 space-y-5 group hover:shadow-lg duration-300">
        <div className="border-2 border-color_3 rounded-full p-4 max-w-fit group-hover:text-color_3 duration-300">
          <IoStatsChart />
        </div>
        <h1 className="text-color_3 font-semibold text-2xl">Mission</h1>
        <p>
          Create a sustainable and responsible agriculture company that
          prioritizes local employment, tourism development, and providing
          high-quality, fresh products while preserving the environment.
        </p>
      </div>
    </div>
  );
};

export default Organic;
