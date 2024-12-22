import banner from "../../../../../assets/Consultancy/workBanner2.jpg";
import work1 from "../../../../../assets/Consultancy/work2.jpg";
import SharePage from "./SharePage";

const Page_2 = () => {
  const text = `Semi-professional workers form a vital segment of the workforce, bridging the gap between operational and strategic roles. These individuals possess a mix of formal education and hands-on experience, making them well-suited for roles that require both theoretical knowledge and practical skills. </br> We pride ourselves on our ability to identify semi-professional workers who are reliable, adaptable, and capable of performing in dynamic environments. From technicians and supervisors to customer support staff, we ensure that our candidates bring value to your organization and seamlessly integrate into your team.`;

  const choose = `
        <li>Expertise in sourcing mid-level workers who are adaptable to various industries.</li>
        <li>Focused training programs to ensure candidates are job-ready.</li>
        <li>
          Emphasis on finding candidates who are reliable, hardworking, and aligned with your company’s culture.
        </li>
        <li>
          Proven ability to deliver the right talent for roles requiring a combination of skill and experience.
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

export default Page_2;
