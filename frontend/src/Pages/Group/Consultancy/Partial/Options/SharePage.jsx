/* eslint-disable react/prop-types */

import PageHeader from "@/Shared/PageHeader/PageHeader";

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
          <p
            dangerouslySetInnerHTML={{ __html: text }}
            className="text-lg font-medium text-justify"
          ></p>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default SharePage;
