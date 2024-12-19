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
} from "@/Components/ui/carousel";
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
              className="flex flex-col lg:flex-row lg:h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat relative"
            >
              <div className="w-full bg-blue-700/70 flex flex-col justify-center items-center space-y-3">
                <h1
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="text-white font-bold text-2xl lg:text-5xl text-center"
                >
                  Quality digital <br /> solutions
                </h1>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="max-w-md mx-auto text-justify"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam in eius possimus error officiis fugit expedita,
                  quae pariatur quibusdam exercitationem?
                </p>
                <Link className="flex items-center text-xl bg-color_2 py-3 px-6 text-white font-semibold">
                  View Our Service
                  <MdKeyboardArrowRight className="text-3xl" />
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div
              style={{ backgroundImage: `url(${banner_2})` }}
              className="flex flex-col lg:flex-row lg:h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat relative"
            >
              <div className="w-full bg-blue-700/70 flex flex-col justify-center items-center space-y-3">
                <h1
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="text-white font-bold text-2xl lg:text-5xl text-center"
                >
                  Quality digital <br /> solutions
                </h1>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="max-w-md mx-auto text-justify"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam in eius possimus error officiis fugit expedita,
                  quae pariatur quibusdam exercitationem?
                </p>
                <Link className="flex items-center text-xl bg-color_2 py-3 px-6 text-white font-semibold">
                  View Our Service
                  <MdKeyboardArrowRight className="text-3xl" />
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div
              style={{ backgroundImage: `url(${banner_3})` }}
              className="flex flex-col lg:flex-row lg:h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat relative"
            >
              <div className="w-full bg-blue-700/70 flex flex-col justify-center items-center space-y-3">
                <h1
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="text-white font-bold text-2xl lg:text-5xl text-center"
                >
                  Quality digital <br /> solutions
                </h1>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="max-w-md mx-auto text-justify"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam in eius possimus error officiis fugit expedita,
                  quae pariatur quibusdam exercitationem?
                </p>
                <Link className="flex items-center text-xl bg-color_2 py-3 px-6 text-white font-semibold">
                  View Our Service
                  <MdKeyboardArrowRight className="text-3xl" />
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-3" />
        <CarouselNext className="absolute right-3" />
      </Carousel>
    </div>
  );
};

export default Banner;
