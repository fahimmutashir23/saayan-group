import Ads1 from "./Partials/Ads/Ads1";
import Ads2 from "./Partials/Ads/Ads2";
import Banner from "./Partials/Banner/Banner";
import BestSaler from "./Partials/Products/BestSaler/BestSaler";
import FeaturedProducts from "./Partials/Products/FeaturedProducts/FeaturedProducts";
import NewProducts from "./Partials/Products/NewProducts/NewProducts";
import SalesProducts from "./Partials/Products/SalesProducts/SalesProducts";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner />
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
        <div className="lg:flex-1">
          <NewProducts />
        </div>
        <div className="lg:flex-1">
          <SalesProducts />
        </div>
      </div>
      <BestSaler />
      <Ads1 />
      <FeaturedProducts />
      <Ads2 />
    </div>
  );
};

export default Home;
