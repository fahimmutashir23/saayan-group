import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="bg-gray-100 lg:px-5 py-14 lg:py-20">
      <h1 className="text-color_3 text-2xl lg:text-4xl font-bold text-center">
       Testimonials
      </h1>
      <div className="w-28 h-1 rounded-full mx-auto bg-black mb-6"></div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
      >
        <CarouselContent className="">
          <CarouselItem className="basis-1/1 lg:basis-1/3 w-full">
            <div className="bg-white p-3 border border-white hover:border-color_3 duration-300 group relative">
              <div>
                <FaQuoteRight className="text-5xl text-color_4" />
              </div>
              <p className="text-lg font-medium text-color_3/40 group-hover:text-color_3 duration-300 italic text-justify pb-5">
                I have been a loyal customer of Saayan Agro for over a year now,
                and their milk products have never disappointed me. The
                freshness and purity are unmatched, and I can feel the
                difference in taste and quality compared to other brands. As a
                parent, I am especially thankful for their commitment to
                providing natural, chemical-free milk for my family. Saayan Agro
                truly sets the gold standard in dairy products
              </p>
              <h2 className="font-semibold font_title text-color_2 text-right absolute bottom-0 right-0 px-4 py-1 bg-slate-100">
              — Ayesha Rahman, Dhaka
              </h2>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 lg:basis-1/3 w-full">
            <div className="bg-white p-3 border border-white hover:border-color_3 duration-300 group relative">
              <div>
                <FaQuoteRight className="text-5xl text-color_4" />
              </div>
              <p className="text-lg font-medium text-color_3/40 group-hover:text-color_3 duration-300 italic text-justify pb-5">
              aayan Agro has transformed my approach to buying vegetables. The produce is always fresh, clean, and bursting with flavor. I love that their vegetables are grown without harmful pesticides, making them a safe and healthy choice for my family. Knowing that I am supporting sustainable farming practices and local communities makes me appreciate Saayan Agro even more.
              </p>
              <h2 className="font-semibold font_title text-color_2 text-right absolute bottom-0 right-0 px-4 py-1 bg-slate-100">
              — Rahat Hossain, Khulna
              </h2>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 lg:basis-1/3 w-full">
            <div className="bg-white p-3 border border-white hover:border-color_3 duration-300 group relative">
              <div>
                <FaQuoteRight className="text-5xl text-color_4" />
              </div>
              <p className="text-lg font-medium text-color_3/40 group-hover:text-color_3 duration-300 italic text-justify pb-5">
              I recently visited Saayan Agro's cattle farm and was truly impressed by their operations. The farm is clean, well-managed, and focused on the well-being of their livestock. The quality of their products reflects this care and attention to detail. Whether it’s dairy or meat.
              </p>
              <h2 className="font-semibold font_title text-color_2 text-right absolute bottom-0 right-0 px-4 py-1 bg-slate-100">
              — Md. Karim Ullah, Satkhira
              </h2>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 lg:basis-1/3 w-full">
            <div className="bg-white p-3 border border-white hover:border-color_3 duration-300 group relative">
              <div>
                <FaQuoteRight className="text-5xl text-color_4" />
              </div>
              <p className="text-lg font-medium text-color_3/40 group-hover:text-color_3 duration-300 italic text-justify pb-5">
              The meat products from Saayan Agro are a cut above the rest. Every piece is fresh, tender, and full of flavor, making it perfect for any dish. I also appreciate their transparent and hygienic processing methods, which give me confidence in the safety and quality of their products. Saayan Agro has become my go-to source for premium meat, and I recommend them to anyone looking for high-quality options.
              </p>
              <h2 className="font-semibold font_title text-color_2 text-right absolute bottom-0 right-0 px-4 py-1 bg-slate-100">
              — Sharmin Akter, Chattogram
              </h2>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-[450px] lg:left-1/2 lg:top-2/1 lg:-translate-y-14" />
        <CarouselNext className="absolute right-0 top-[450px] lg:right-1/2 lg:top-2/1 lg:-translate-y-14" />
      </Carousel>
    </div>
  );
};

export default Testimonial;
