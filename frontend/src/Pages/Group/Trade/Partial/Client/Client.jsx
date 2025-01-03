import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import img1 from "../../../../../assets/clients/1.jpg";
import img2 from "../../../../../assets/clients/2.jpg";
import img3 from "../../../../../assets/clients/3.jpg";
import img4 from "../../../../../assets/clients/4.jpg";
import img5 from "../../../../../assets/clients/5.jpg";
import img6 from "../../../../../assets/clients/6.jpg";
import img7 from "../../../../../assets/clients/7.jpg";
import img8 from "../../../../../assets/clients/8.jpg";
import img9 from "../../../../../assets/clients/9.jpg";
import img10 from "../../../../../assets/clients/10.jpg";
import img11 from "../../../../../assets/clients/11.jpg";
import img12 from "../../../../../assets/clients/12.jpg";
import img13 from "../../../../../assets/clients/13.jpg";
import img14 from "../../../../../assets/clients/14.jpg";
import img15 from "../../../../../assets/clients/15.jpg";
import img16 from "../../../../../assets/clients/16.jpg";
import img17 from "../../../../../assets/clients/17.jpg";
import img18 from "../../../../../assets/clients/18.jpg";
import img19 from "../../../../../assets/clients/19.jpg";
import img20 from "../../../../../assets/clients/20.jpg";

const Client = () => {
  const imgArr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  return (
    <div>
      <h1 className="text-color_3 text-2xl lg:text-4xl font-bold text-center">
        Client Profile
      </h1>
      <div className="w-28 h-1 rounded-full mx-auto bg-black mb-4"></div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative pb-20"
      >
        <CarouselContent className="">
          {imgArr.map((img, idx) => (
            <CarouselItem key={idx} className="basis-1/1 lg:basis-1/3 w-full">
              <div className="bg-white h-full w-full overflow-hidden border border-white hover:border-color_3 duration-300 group relative">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-[260px] lg:top-[280px] lg:left-1/2 lg:top-2/1 lg:-translate-y-14" />
        <CarouselNext className="absolute right-0 top-[260px] lg:top-[280px] lg:right-1/2 lg:top-2/1 lg:-translate-y-14" />
      </Carousel>
    </div>
  );
};

export default Client;
