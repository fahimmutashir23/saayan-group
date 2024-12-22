/* eslint-disable react/prop-types */

const Founder = ({ text, image }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="lg:w-1/3 lg:h-[450px] overflow-hidden p-1 border-[3px] border-color_4 rounded-lg bg-color_2">
        <img
          src={image}
          className="h-full w-1/2 lg:w-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="p-2 border-2 border-color_4 rounded-lg lg:w-2/3">
        <h1 className="text-3xl font_title font-bold mb-4 border-b-2 max-w-fit">
          Voice of Founder
        </h1>
        <p dangerouslySetInnerHTML={{__html: text}} className="text-lg font-medium text-justify"></p>
        <h2 className="text-right font-semibold text-2xl mt-3 text-color_3">
          Salman Shabuj
        </h2>
        <h4 className="text-right font-semibold text-sm -mt-1">
          Owner of Saayan Group
        </h4>
      </div>
    </div>
  );
};

export default Founder;
