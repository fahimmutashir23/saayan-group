import PageHeader from "@/Shared/PageHeader/PageHeader";
import travel from "../../../assets/Service/travel.jpg";
import logo from "../../../assets/Logo/Saayan Consultancy.png";
import founder from "../../../assets/Profile/founder.jpg";
import Founder from "@/Shared/Founder/Founder";
import Recruitment from "./Partial/Recruitment";
import TabTitle from "@/Utils/TabTitle";
import Count from "@/Pages/Home/Partials/Count/Count";
import TopPage from "@/Utils/TopPage";
import Client from "../Trade/Partial/Client/Client";

const Consultancy = () => {
  const text = `<strong>At Saayan Consultancy Services</strong>, our mission is to bridge the gap between opportunity and talent. We are dedicated to providing reliable, efficient, and transparent recruitment solutions, ensuring that both employers and job seekers benefit from our expertise. </br> In a world where the right workforce drives success, we are proud to serve as a trusted partner for businesses in Malaysia, Saudi Arabia, Dubai, Qatar, Oman, and beyond. Our commitment to excellence stems from a deep understanding of the needs of our clients and the aspirations of the individuals we connect with opportunities. </br> As the founder of Saayan Consultancy Services, I firmly believe in the power of trust and professionalism. Every recruitment we facilitate is a step toward building a brighter future for our clients, candidates, and the industries we serve. Together, we are creating success stories that inspire and transform lives.`;
  return (
    <div>
      <TopPage />
      <TabTitle title="Saayan Consultancy" />
      <div className="space-y-10">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex justify-center"
        >
          <img src={logo} className="w-1/3 lg:w-1/6" alt="" />
        </div>
        <PageHeader img={travel} name="Saayan Consultancy" />
        <div className="mt-4 space-y-4">
          <Founder image={founder} text={text} />
          <Recruitment />
          <Count />
          <Client />
        </div>
      </div>
    </div>
  );
};

export default Consultancy;
