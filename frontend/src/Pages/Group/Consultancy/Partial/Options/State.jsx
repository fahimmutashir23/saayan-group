import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import bg from "../../../../../assets/Service/bg_1.jpg";
import { LuBrain } from "react-icons/lu";
import { IoMdHappy } from "react-icons/io";
import { FaChartLine } from "react-icons/fa";

const State = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section
      ref={ref}
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center relative"
    >
      <div className="flex flex-col lg:flex-row items-center lg:justify-evenly bg-gray-900/60  py-3 lg:py-20 ">
        <div className="flex items-center gap-3">
          <div className="border-r-[3px] border-gray-500 pr-2">
            <FaChartLine className="text-2xl text-yellow-400 lg:text-7xl" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold uppercase text-white">
              Growing
            </h2>
            <div className="text-3xl lg:text-7xl font-bold text-yellow-400">
              {inView && <CountUp start={0} end={100} duration={3} />}
              <span className="text-xl">Business Daily</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="border-r-[3px] border-gray-500 pr-2">
            <LuBrain className="text-2xl text-yellow-400 lg:text-7xl" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold uppercase text-white">
              Experience
            </h2>
            <div className="text-3xl lg:text-7xl font-bold text-yellow-400">
              {inView && <CountUp start={0} end={10} duration={3} />}
              <span className="text-xl">Years</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="border-r-[3px] border-gray-500 pr-2">
            <IoMdHappy className="text-2xl text-yellow-400 lg:text-7xl" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold uppercase text-white">
              Clients
            </h2>
            <div className="text-3xl lg:text-7xl font-bold text-yellow-400">
              {inView && <CountUp start={0} end={580} duration={3} />}
              <span className="text-xl">Best Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default State;
