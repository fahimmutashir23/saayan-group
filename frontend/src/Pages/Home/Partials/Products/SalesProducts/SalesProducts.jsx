import SectionHeader from "../../../../../Utils/SectionHeader";
import Card from "../Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

const SalesProducts = () => {
  return (
    <div className="w-full">
      <div>
        <SectionHeader title="Sales Product" align={"start"} />
      </div>
      <div className="mt-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative "
        >
          <CarouselContent className="flex gap-4 w-full">
            <CarouselItem className="basis-1/1 lg:basis-1/2">
              <Card />
            </CarouselItem>
            <CarouselItem className="basis-1/1 lg:basis-1/2">
              <Card />
            </CarouselItem>
            <CarouselItem className="basis-1/1 lg:basis-1/2">
              <Card />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute -top-9 left-[240px] lg:left-[560px]" />
          <CarouselNext className="absolute -top-9 right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default SalesProducts;
