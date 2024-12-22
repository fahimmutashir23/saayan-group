import banner from "../../../../../assets/Consultancy/workBanner3.jpeg";
import work1 from "../../../../../assets/Consultancy/work3.png";
import SharePage from "./SharePage";

const Page_3 = () => {
  const text = `Skilled employees are the driving force behind operational excellence. These individuals bring a high level of technical expertise, precision, and dedication to their roles, making them indispensable to industries like construction, manufacturing, IT, healthcare, and more. </br> At Saayan Consultancy Services, we go beyond the basics to ensure every skilled employee we provide is equipped with the necessary certifications, practical experience, and the mindset to contribute effectively to your business. We also prioritize safety and compliance, ensuring that every candidate is prepared to meet industry standards and expectations.`;

  const choose = `
        <li>Comprehensive vetting process to assess technical skills and qualifications.</li>
        <li>Strong focus on safety training and compliance with industry standards.</li>
        <li>
          Ongoing support to both employers and employees for a seamless work experience.
        </li>
        <li>
          Proven track record of supplying skilled workers who enhance productivity and efficiency.
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

export default Page_3;
