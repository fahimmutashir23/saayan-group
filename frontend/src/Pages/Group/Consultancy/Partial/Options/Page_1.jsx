import banner from "../../../../../assets/Consultancy/workBanner1.jpg";
import work1 from "../../../../../assets/Consultancy/word1.jpg";
import SharePage from "./SharePage";

const Page_1 = () => {
  const text = `As one of the leading recruitment agencies, our goal is to bring you the most outstanding individuals to meet your staffing services needs. Our services provide you with the best associates to, we understand that a professional workforce is the backbone of any successful organization. These individuals are the leaders, innovators, and strategists who drive businesses forward with their expertise and vision. We specialize in sourcing highly qualified professionals across various industries, ensuring that they meet the specific needs and goals of our clients. </br> Our recruitment process involves a thorough understanding of the client’s requirements, extensive talent scouting, and a meticulous selection process. Whether you need management executives, engineers, IT specialists, or healthcare professionals, we ensure you receive the best candidates who can contribute to your organization’s long-term growth.`;

  const choose = `
        <li>Access to a vast global network of top-tier talent.</li>
        <li>Rigorous background checks and validation of credentials.</li>
        <li>
          Customized solutions to match professional expertise with your unique
          business needs.
        </li>
        <li>
          Proven success in placing professionals in critical roles that require
          leadership and technical acumen.
        </li>`;
  return (
    <div>
      <SharePage
        bannerImg={banner}
        bannerTitle="Professional workforce"
        image={work1}
        whyCUs={choose}
        text={text}
      />
    </div>
  );
};

export default Page_1;
