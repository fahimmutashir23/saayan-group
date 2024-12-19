import SectionHeader from "../../../../../Utils/SectionHeader";
import Card from "../Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeaturedProducts = () => {
  return (
    <div className="w-full">
      <div>
        <SectionHeader title="Featured Product" align={"center"} />
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
            <CarouselItem className="basis-1/1 lg:basis-1/4">
              <Card />
            </CarouselItem>
            <CarouselItem className="basis-1/1 lg:basis-1/4">
              <Card />
            </CarouselItem>
            <CarouselItem className="basis-1/1 lg:basis-1/4">
              <Card />
            </CarouselItem>
            <CarouselItem className="basis-1/1 lg:basis-1/4">
              <Card />
            </CarouselItem>
            <CarouselItem className="basis-1/1 lg:basis-1/4">
              <Card />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute -top-9 left-[240px] lg:left-[1200px]" />
          <CarouselNext className="absolute -top-9 right-0" />
        </Carousel>
      </div>
    </div>
  );
};4
export default FeaturedProducts;
