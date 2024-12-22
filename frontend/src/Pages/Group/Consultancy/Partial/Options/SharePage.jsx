/* eslint-disable react/prop-types */

import PageHeader from "@/Shared/PageHeader/PageHeader";
import State from "./State";

const SharePage = ({ bannerImg, bannerTitle, image, text, whyCUs }) => {
  return (
    <div>
      <PageHeader img={bannerImg} name={bannerTitle} />
      <div className="flex flex-col lg:flex-row-reverse gap-5 mt-4">
        <div className="lg:flex-1 h-full overflow-hidden p-1 border-2 rounded-lg">
          <img
            src={image}
            className="h-full w-1/2 lg:w-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="p-2 rounded-lg lg:flex-1">
          <h1 className="font-bold font_title text-2xl lg:text-4xl text-color_3 mb-4">
            {bannerTitle}
          </h1>
          <p
            dangerouslySetInnerHTML={{ __html: text }}
            className="text-lg font-medium text-justify"
          ></p>
        </div>
      </div>
      <div className="mt-8 lg:mt-14">
        <h1 className="font-bold font_title text-2xl lg:text-4xl text-color_3 mb-2 text-center">
          Why Choose Us
        </h1>
        <div className="w-28 h-1 rounded-full mx-auto bg-black mb-4"></div>
        <ul dangerouslySetInnerHTML={{ __html: whyCUs }} className="space-y-4 list-disc font-semibold text-gray-500"></ul>
      </div>
      <div className="mt-8">
        <State />
      </div>
    </div>
  );
};

export default SharePage;
