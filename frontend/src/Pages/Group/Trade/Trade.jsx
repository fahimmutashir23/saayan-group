import PageHeader from "@/Shared/PageHeader/PageHeader";
import img from "../../../assets/Trade/traders.jpg";
import Welcome from "./Partial/Welcome";
import TabTitle from "@/Utils/TabTitle";
import trade from "../../../assets/Logo/Saayan Traders.png";
import BottomBanner from "./Partial/BottomBanner";
import Help from "./Partial/Help";
import FAQ from "./Partial/FAQ";
import Count from "@/Pages/Home/Partials/Count/Count";
import TopPage from "@/Utils/TopPage";
import Export from "./Partial/Export";
import Service from "./Partial/Service";

const Trade = () => {
  return (
    <div>
      <TopPage />
      <TabTitle title="Saayan Traders" />
      <div className="space-y-10">
        <div data-aos='zoom-in' data-aos-duration='1000' className="flex justify-center">
          <img src={trade} className="w-1/3 lg:w-1/6" alt="" />
        </div>
        <PageHeader img={img} name="Saayan Traders" />
        <Welcome />
        <BottomBanner />
        <Export />
        <Help />
        <Service />
        <Count />
        <FAQ />
      </div>
    </div>
  );
};

export default Trade;
