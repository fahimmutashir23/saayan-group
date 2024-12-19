/* eslint-disable react/prop-types */
import { button } from "@/Utils/Class/button";
import { formatTimestamp } from "@/Utils/formatTimeStamp";
import { FaEdit, FaPhone, FaPlus, FaUser } from "react-icons/fa";
import { FaCity, FaLocationPin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Profile = ({data}) => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-3 items-center lg:gap-6">
        <h1 className="text-lg lg:text-2xl font-semibold text-color_2">{data.name}</h1>
        <h2>{data._id}</h2>
      </div>

      <div className="w-full h-[2px] bg-color_2 my-3"></div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 w-full">
        <div className="lg:w-2/12">
            <div className="border-2 p-2 rounded-full h-24 w-24 overflow-hidden"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-10/12">
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <FaPlus />
              <span className="text-gray-600">
                <span className="font-medium text-black">Registered:</span>{" "}
                {formatTimestamp(data.createdAt)}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaLocationPin />
              <span className="text-gray-600">
                <span className="font-medium text-black">Country:</span>{" "}
                sdf
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaCity />
              <span className="text-gray-600">
                <span className="font-medium text-black">City:</span>{" "}
                sdf
              </span>
            </p>
          </div>
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <FaPhone />
              <span className="text-gray-600">
                <span className="font-medium text-black">Phone:</span>{" "}
                {data.phone}
              </span>
            </p>
            <p className="flex items-center gap-2">
            <IoMdMail />
              <span className="text-gray-600">
                <span className="font-medium text-black">Mail:</span>{" "}
                {data.email}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaUser />
              <span className="text-gray-600">
                <span className="font-medium text-black">Gender:</span>{" "}
                {data.gender}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className={button.normal}> <FaEdit /> Edit</button>
      </div>
    </div>
  );
};

export default Profile;
