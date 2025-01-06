import PageHeader from "@/Shared/PageHeader/PageHeader";
import banner from "../../assets/Banner/about.jpg";
import founder from "../../assets/Profile/founder.jpg";
import TabTitle from "@/Utils/TabTitle";
import Founder from "@/Shared/Founder/Founder";
import Value from "./Partials/Value";
import Mission from "./Partials/Mission";
import Employe from "../Home/Partials/Employe/Employe";
import Count from "../Home/Partials/Count/Count";
import Client from "../Group/Trade/Partial/Client/Client";
import TopPage from "@/Utils/TopPage";

const About = () => {
  const message = `
    Welcome to <strong>Saayan Group</strong>, where our mission is to redefine excellence across diverse industries and create a lasting impact in the communities we serve. As the founder of this dynamic organization, I take immense pride in the journey we have embarked upon and the milestones we have achieved along the way. <br />

<strong>Saayan Group</strong> is more than just a business; it is a vision of growth, innovation, and unwavering commitment to quality and trust. From our humble beginnings, we have expanded into three core sectors—Saayan Traders, Saayan Consultancy Services, and Saayan Agro—each driven by the shared purpose of delivering unparalleled value to our clients, partners, and stakeholders. <br />

Our trading division, <strong>Saayan Traders</strong>, bridges the gap between buyers and suppliers across the globe, ensuring seamless import and export operations while fostering strong international partnerships. Through transparency and reliability, we aim to make global trade accessible and efficient for businesses of all sizes. <br />

In <strong>Saayan Consultancy</strong> Services, we address one of the most critical needs of the modern workforce: bridging the gap between opportunity and talent. Our agency is built on a foundation of trust and dedication, connecting skilled individuals from Bangladesh with life-changing opportunities across Malaysia, Saudi Arabia, Dubai, Qatar, Oman, and beyond. <br />

<strong>Saayan Agro</strong>, our venture into agriculture and food processing, is a testament to our commitment to sustainability and innovation. From producing high-quality milk and vegetables to managing cattle and poultry feed production, we strive to contribute to a healthier and more self-sufficient future for our nation. <br />

At the heart of everything we do is our unwavering belief in the values of integrity, excellence, and social responsibility. We understand that our success is deeply intertwined with the trust and satisfaction of our clients, partners, and communities, and we are dedicated to exceeding their expectations at every step. <br />

As we continue to grow and evolve, I want to express my heartfelt gratitude to everyone who has supported us on this journey—our dedicated employees, valued clients, and trusted partners. Together, we have built an organization that stands as a beacon of trust and innovation, and I am excited about what the future holds for Saayan Group. <br />

Thank you for being a part of our story. We look forward to serving you with the same passion, commitment, and excellence that define who we are.
    `;
  return (
    <div>
        <TopPage />
      <TabTitle title="About Us" />
      <section className="space-y-10">
        <PageHeader name="About Us" img={banner} />
        <Founder image={founder} text={message} />
        <Value />
        <Mission />
        <Count />
        <Employe />
        <Client />
      </section>
    </div>
  );
};

export default About;
