/* eslint-disable react/prop-types */
import getGreeting from "@/Utils/getGreeting";
import Title from "../Title";

const Dashboard = ({name}) => {
  return (
    <div>
      <Title title="Dashboard" />
      <div className="flex justify-center items-center lg:mt-14">
        <div>
          <span className="text-2xl lg:text-5xl text-red-900 font_title">{getGreeting()}</span>
          <h1 className="text-blue-500 text-xl lg:text-4xl text-center font_title">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
