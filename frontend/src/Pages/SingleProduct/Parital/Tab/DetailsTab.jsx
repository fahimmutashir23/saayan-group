/* eslint-disable react/prop-types */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Review from "./Partial/Review";

const DetailsTab = ({ singleProduct, reviews }) => {
  return (
    <div>
      <Tabs defaultValue="details" className="border border-color_4/30">
        <TabsList className="grid w-full grid-cols-6 bg-color_4/30 rounded-none">
          <TabsTrigger value="details">details</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
        </TabsList>
        <TabsContent className="py-4" value="details">
          <p className="text-gray-600 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto laboriosam modi dolore aperiam! Cupiditate tenetur et debitis aliquam tempore, sapiente fuga officiis sunt deserunt atque? Hic corrupti consequuntur quae optio ipsum sint labore voluptatem molestias eum, placeat aut. Doloribus illum in eligendi aliquam iure maiores corrupti facilis possimus ipsa.
          </p>
        </TabsContent>
        <TabsContent className="py-4" value="review">
          <Review />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DetailsTab;
