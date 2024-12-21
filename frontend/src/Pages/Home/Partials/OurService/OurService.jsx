import trade from "../../../../assets/Service/trade.jpg";
import agro from "../../../../assets/Service/agro.jpg";
import travel from "../../../../assets/Service/travel.jpg";

const OurService = () => {
  return (
    <div className="">
      <h1 className="uppercase text-xl lg:text-4xl text-center font_title">
        Our services
      </h1>
      <p className="text-center">The best service we provide in Bangladesh</p>
      <div className="mt-4 mx-0 lg:mx-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="shadow-lg border-2 border-white lg:hover:border-color_3 duration-300 lg:hover:scale-105">
          <div className="w-full h-40 overflow-hidden">
            <img src={trade} className="h-full w-full object-cover" alt="" />
          </div>
          <div className="p-3">
            <h1 className="text-2xl font-semibold text-color_3">
              Saayan Traders
            </h1>
            <div className="h-[2px] w-1/4 bg-color_1"></div>
            <p className="mt-2">
              Saayan Traders bridges the gap between buyers and suppliers,
              specializing in import and export services across Bangladesh.
              Trusted for quality, reliability.
            </p>
          </div>
        </div>
        <div className="shadow-lg border-2 border-white lg:hover:border-color_3 duration-300 lg:hover:scale-105">
          <div className="w-full h-40 overflow-hidden">
            <img src={agro} className="h-full w-full object-cover" alt="" />
          </div>
          <div className="p-3">
            <h1 className="text-2xl font-semibold text-color_3">
              Saayan Consultancy
            </h1>
            <div className="h-[2px] w-1/4 bg-color_1"></div>
            <p className="mt-2">
              Connecting talent with opportunity, Saayan Consultancy Services
              specializes in manpower recruitment for Malaysia, Saudi Arabia,
              Dubai, Qatar, Oman, and beyond. Your trusted partner in
              Bangladesh.
            </p>
          </div>
        </div>
        <div className="shadow-lg border-2 border-white lg:hover:border-color_3 duration-300 lg:hover:scale-105">
          <div className="w-full h-40 overflow-hidden">
            <img src={travel} className="h-full w-full object-cover" alt="" />
          </div>
          <div className="p-3">
            <h1 className="text-2xl font-semibold text-color_3">Saayan Agro</h1>
            <div className="h-[2px] w-1/4 bg-color_1"></div>
            <p className="mt-2">
              Dedicated to sustainable farming and innovative food processing,
              Saayan Agro cultivates quality from the field to your table. Our
              commitment to excellence ensures fresh, healthy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
