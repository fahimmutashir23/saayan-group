import founder from "../../assets/Profile/founder.jpg";
import Founder from "@/Shared/Founder/Founder";
import Banner from "./Partials/Banner/Banner";
import Bg_1 from "./Partials/Bg_1/Bg_1";
import Count from "./Partials/Count/Count";
import OurService from "./Partials/OurService/OurService";
import Testimonial from "./Partials/Testimonial/Testimonial";
import Employe from "./Partials/Employe/Employe";
import TopPage from "@/Utils/TopPage";
import TabTitle from "@/Utils/TabTitle";

const Home = () => {
  const text = `<strong>At Saayan Group</strong>, our vision has always been to create a legacy of trust, excellence, and innovation. Whether through empowering global trade with Saayan Traders, connecting opportunities with Saayan Consultancy Services, or nurturing sustainability with Saayan Agro, our mission is to serve with integrity and commitment. <br /> We believe that success comes from building strong relationships and making a meaningful impact in the communities we serve. Each of our ventures is a reflection of this belief, driven by passion, dedication, and the pursuit of excellence. <br /> As the founder of Saayan Group, I am proud of what we have achieved so far and excited about the future we are shaping together with our partners, clients, and team members. Together, we are not just building a business but a brighter and more sustainable tomorrow.`;

  return (
    <>
    <TopPage />
    <TabTitle title='Saayan Group' />
      <div className="space-y-10">
        <Banner />
        <Founder image={founder} text={text} />
        <OurService />
        <Bg_1 />
        <Count />
        <Testimonial />
        <Employe />
      </div>
    </>
  );
};

export default Home;
