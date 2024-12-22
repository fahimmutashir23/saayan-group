import banner_1 from "../../../../assets/Banner/banner_1.jpg";
import banner_2 from "../../../../assets/Banner/banner_2.jpg";
import banner_3 from "../../../../assets/Banner/banner_3.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
      >
        <CarouselContent className="">
          <CarouselItem className="">
            <div
              style={{ backgroundImage: `url(${banner_1})` }}
              className="flex flex-col lg:flex-row h-[80vh] lg:h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat relative"
            >
              <div className="w-full h-full bg-blue-700/70 flex flex-col justify-center items-center space-y-3">
                <h1
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="text-white font-bold text-2xl lg:text-7xl text-center"
                >
                  Saayan Traders <br />{" "}
                  <span className="text-xl lg:text-3xl">
                    Import & Export Bangladesh
                  </span>
                </h1>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="max-w-xl mx-auto text-justify text-white px-2"
                >
                  Saayan Traders bridges the gap between buyers and suppliers,
                  specializing in import and export services across Bangladesh.
                  Trusted for quality, reliability.
                </p>
                <Link to='/trades' className="flex items-center text-xl bg-color_2 py-1 lg:py-3 px-6 text-white font-semibold">
                  View Our Service
                  <MdKeyboardArrowRight className="text-3xl" />
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div
              style={{ backgroundImage: `url(${banner_2})` }}
              className="flex flex-col lg:flex-row h-[80vh] lg:h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat relative"
            >
              <div className="w-full h-full bg-blue-700/70 flex flex-col justify-center items-center space-y-3">
                <h1
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="text-white font-bold text-2xl lg:text-7xl text-center space-y-0"
                >
                  Saayan Consultancy <br />
                  <span className="text-lg lg:text-3xl">
                    Manpower Requirement In Bangladesh
                  </span>
                </h1>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="max-w-xl text-white mx-auto text-justify px-2"
                >
                  Connecting talent with opportunity, Saayan Consultancy
                  Services specializes in manpower recruitment for Malaysia,
                  Saudi Arabia, Dubai, Qatar, Oman, and beyond. Your trusted
                  partner in Bangladesh.
                </p>
                <Link to='/consultancy' className="flex items-center text-xl bg-color_2 py-1 lg:py-3 px-6 text-white font-semibold">
                  View Our Service
                  <MdKeyboardArrowRight className="text-3xl" />
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div
              style={{ backgroundImage: `url(${banner_3})` }}
              className="flex flex-col h-[80vh] lg:flex-row lg:h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat relative"
            >
              <div className="w-full h-full bg-blue-700/70 flex flex-col justify-center items-center space-y-3">
                <h1
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="text-white font-bold text-2xl lg:text-7xl text-center"
                >
                  Saayan Agro <br /> <span className="text-xl lg:text-3xl">Agriculture and Food Processing Company</span>
                </h1>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="max-w-xl text-white mx-auto text-justify px-2"
                >
                  Dedicated to sustainable farming and innovative food
                  processing, Saayan Agro cultivates quality from the field to
                  your table. Our commitment to excellence ensures fresh,
                  healthy.
                </p>
                <Link to='/agro' className="flex items-center text-xl bg-color_2 py-1 lg:py-3 px-6 text-white font-semibold">
                  View Our Service
                  <MdKeyboardArrowRight className="text-3xl" />
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-3 top-[390px] lg:top-1/2" />
        <CarouselNext className="absolute right-3 top-[390px] lg:top-1/2" />
      </Carousel>
    </div>
  );
};

export default Banner;
