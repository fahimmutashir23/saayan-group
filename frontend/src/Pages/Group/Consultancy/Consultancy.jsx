import PageHeader from "@/Shared/PageHeader/PageHeader";
import travel from "../../../assets/Service/travel.jpg";
import founder from "../../../assets/Service/founder.jpg";
import Founder from "@/Shared/Founder/Founder";
import Recruitment from "./Partial/Recruitment";

const Consultancy = () => {
  const text = `<strong>At Saayan Consultancy Services</strong>, our mission is to bridge the gap between opportunity and talent. We are dedicated to providing reliable, efficient, and transparent recruitment solutions, ensuring that both employers and job seekers benefit from our expertise. </br> In a world where the right workforce drives success, we are proud to serve as a trusted partner for businesses in Malaysia, Saudi Arabia, Dubai, Qatar, Oman, and beyond. Our commitment to excellence stems from a deep understanding of the needs of our clients and the aspirations of the individuals we connect with opportunities. </br> As the founder of Saayan Consultancy Services, I firmly believe in the power of trust and professionalism. Every recruitment we facilitate is a step toward building a brighter future for our clients, candidates, and the industries we serve. Together, we are creating success stories that inspire and transform lives.`;
  return (
    <div>
      <PageHeader img={travel} name="Saayan Consultancy" />
      <div className="mt-4 space-y-4">
        <Founder image={founder} text={text} />
        <Recruitment />
      </div>
    </div>
  );
};

export default Consultancy;
