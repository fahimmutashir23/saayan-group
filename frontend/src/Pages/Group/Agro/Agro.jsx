import PageHeader from "@/Shared/PageHeader/PageHeader";
import banner from "../../../assets/Agro/agroBanner.jpg";
import logo from "../../../assets/Logo/Saayan Agro.png";
import Welcome from "./Partial/Welcome";
import Organic from "./Partial/Organic";
import Serve from "./Partial/Serve";
import Testimonial from "./Partial/Testimonial";
import TabTitle from "@/Utils/TabTitle";

const Agro = () => {
  return (
    <div>
      <TabTitle title="Saayan Agro" />
      <div className="space-y-10">
        <div data-aos="zoom-in" data-aos-duration='1000' className="flex justify-center">
          <img src={logo} className="w-1/3 lg:w-1/6" alt="" />
        </div>
        <PageHeader name={"Saayan Agro"} img={banner} />
        <Welcome />
        <Organic />
        <Serve />
        <Testimonial />
      </div>
    </div>
  );
};

export default Agro;
