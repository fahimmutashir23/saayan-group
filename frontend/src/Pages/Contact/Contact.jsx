import TabTitle from "@/Utils/TabTitle";
import TopPage from "@/Utils/TopPage";
import { FaGlobe } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <TopPage />
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
      <div className="mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.782752460149!2d90.39753087362584!3d23.79074928722938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b6dbdc873d%3A0x5cf3c8aad356810b!2zU2FheWFuIFRyYWRlcnMg4Ka44Ka-4Kav4Ka84Ka-4KaoIOCmn-CnjeCmsOCnh-CmoeCmvuCmsOCnjeCmuA!5e0!3m2!1sen!2sbd!4v1736162941393!5m2!1sen!2sbd"
          className="w-full h-[40vh] lg:h-[50vh]"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
