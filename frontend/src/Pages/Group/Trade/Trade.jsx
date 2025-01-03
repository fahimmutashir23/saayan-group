import PageHeader from "@/Shared/PageHeader/PageHeader";
import img from "../../../assets/Trade/tradeBanner.jpeg";
import Welcome from "./Partial/Welcome";
import TabTitle from "@/Utils/TabTitle";
import trade from "../../../assets/Logo/Saayan Traders.png";
import BottomBanner from "./Partial/BottomBanner";
import Help from "./Partial/Help";
import Client from "./Partial/Client/Client";

const Trade = () => {
  return (
    <div>
      <TabTitle title="Saayan Traders" />
      <div className="space-y-10">
        <div data-aos='zoom-in' data-aos-duration='1000' className="flex justify-center">
          <img src={trade} className="w-1/3 lg:w-1/6" alt="" />
        </div>
        <PageHeader img={img} name="Saayan Traders" />
        <Welcome />
        <BottomBanner />
        <Help />
        <Client />
      </div>
    </div>
  );
};

export default Trade;
