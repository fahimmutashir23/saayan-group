import Ads1 from "./Partials/Ads/Ads1";
import Ads2 from "./Partials/Ads/Ads2";
import Banner from "./Partials/Banner/Banner";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner />
      <Ads1 />
      <Ads2 />
    </div>
  );
};

export default Home;
