import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Count = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.3, // Start counting when 30% of the section is visible
  });

  return (
    <section
      ref={ref}
      className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-center justify-evenly bg-gray-200 py-5 lg:py-10"
    >
      <div className="">
        <h2 className="text-3xl lg:text-4xl font-semibold uppercase text-gray-600">
          Project
        </h2>
        <div className="text-7xl font-bold text-center text-color_3">
          {inView && <CountUp start={0} end={20} duration={3} />}
        </div>
      </div>
      <div className="">
        <h2 className="text-3xl lg:text-4xl font-semibold uppercase text-gray-600">
          Clients
        </h2>
        <div className="text-7xl font-bold text-center text-color_3">
          {inView && <CountUp start={0} end={50} duration={3} />}
        </div>
      </div>
      <div className="">
        <h2 className="text-3xl lg:text-4xl font-semibold uppercase text-gray-600">
          Years
        </h2>
        <div className="text-7xl font-bold text-center text-color_3">
          {inView && <CountUp start={0} end={4} duration={5} />}
        </div>
      </div>
    </section>
  );
};

export default Count;
