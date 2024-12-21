
import Banner from "./Partials/Banner/Banner";
import Bg_1 from "./Partials/Bg_1/Bg_1";
import Count from "./Partials/Count/Count";
import OurService from "./Partials/OurService/OurService";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner />
      <OurService />
      <Bg_1 />
      <Count />
    </div>
  );
};

export default Home;
