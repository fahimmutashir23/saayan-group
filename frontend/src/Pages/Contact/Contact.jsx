
import TabTitle from "@/Utils/TabTitle";
import { FaGlobe } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <TabTitle title="Contact" />
      <h1 className="text-color_3 text-2xl lg:text-4xl font-bold text-center">
        Contact Us
      </h1>
      <div className="w-28 h-1 rounded-full mx-auto bg-black mb-4"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="p-10 bg-color_4 rounded-sm group hover:shadow-md duration-300 flex flex-col items-center">
          <div className="bg-white p-4 max-w-fit rounded-full">
            <FaPhone className="text-3xl text-color_3" />
          </div>
          <p className="font-semibold mt-3 text-gray-600">
          +880 1757489756 <br />
          +880 1719381825
          </p>
        </div>
        <div className="p-10 bg-color_4 rounded-sm group hover:shadow-md duration-300 flex flex-col items-center">
          <div className="bg-white p-4 max-w-fit rounded-full">
            <FaGlobe className="text-3xl text-color_3" />
          </div>
          <p className="font-semibold mt-3 text-gray-600 text-center">
          info@saayantradersbd.com <br />
          salmankhansabuj@gmail.com <br />
          www.saayangroupbd.com
          </p>
        </div>
        <div className="p-10 bg-color_4 rounded-sm group hover:shadow-md duration-300 flex flex-col items-center">
          <div className="bg-white p-4 max-w-fit rounded-full">
            <FaLocationDot className="text-3xl text-color_3" />
          </div>
          <p className="font-semibold mt-3 text-gray-600 text-center">
          H#81, Bir Uttam Ziaur Rahman Road, Banani, Dhaka-1213
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
