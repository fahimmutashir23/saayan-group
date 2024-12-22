import banner from "../../../../../assets/Consultancy/workBanner4.jpeg";
import work1 from "../../../../../assets/Consultancy/work4.jpg";
import SharePage from "./SharePage";

const Page_4 = () => {
  const text = `Semi-skilled personnel play a crucial role in supporting day-to-day operations. These workers bring a mix of basic training and practical experience, making them ideal for roles that require efficiency, reliability, and a strong work ethic. </br> We specialize in providing semi-skilled personnel who are quick learners, adaptable, and ready to meet the challenges of various work environments. Whether it’s manufacturing, logistics, agriculture, or hospitality, we ensure our candidates are prepared to contribute from day one.`;

  const choose = `
        <li>Rigorous selection process to identify candidates with strong potential and dedication.</li>
        <li>Hands-on training programs tailored to specific job roles.</li>
        <li>
          Focus on providing cost-effective solutions for operational workforce needs.
        </li>
        <li>
          Proven ability to supply semi-skilled workers who meet and exceed expectations in performance and reliability.
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

export default Page_4;
