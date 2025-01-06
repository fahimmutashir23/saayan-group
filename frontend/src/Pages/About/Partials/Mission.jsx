import banner from "../../../assets/Banner/vision.png";

const Mission = () => {
  return (
    <div>
      <div className="lg:h-60 overflow-hidden">
        <img
          src={banner}
          alt=""
          className="rounded-md w-full h-full lg:object-fill"
        />
      </div>
      <section className="flex flex-col lg:flex-row mt-5">
        <div className="flex-1 border-r border-black lg:pr-5">
          <h1 className="text-color_3 text-xl lg:text-2xl font-bold text-center">
            Ours Vision
          </h1>
          <div className="w-28 h-[2px] rounded-full mx-auto bg-black mb-4"></div>
          <p className="italic font-medium">
            To be a leading provider of high-quality FMCG products, enhancing
            the lives of people globally while promoting sustainable development
            and fostering strong community relationships.
          </p>
        </div>
        <div className="flex-1 border-l border-black lg:pl-5">
        <h1 className="text-color_3 text-xl lg:text-2xl font-bold text-center">
            Ours Mission
          </h1>
          <div className="w-28 h-[2px] rounded-full mx-auto bg-black mb-4"></div>
          <p className="italic font-medium">
          Our mission is to deliver safe, nutritious, and high-quality food and agro-based products to our customers. We aim to achieve this by:
          </p>
          <div className="font-medium mt-2 space-y-3">
            <li><strong>Ensuring Quality:</strong> Implementing stringent quality control measures to guarantee the freshness and safety of our products.</li>
            <li><strong>Innovating Continuously:</strong> Embracing modern technologies and sustainable practices to improve our product offerings and operations.</li>
            <li><strong>Strengthening Communities:</strong> Supporting local development and fostering growth within the mariner community through various engagement activities.</li>
            <li><strong>Expanding Reach:</strong> Growing our global footprint through strategic export-import initiatives, and ensuring our products are accessible to a broader audience.</li>
            <li><strong>Customer Satisfaction:</strong> Maintaining a strong focus on customer satisfaction through reliable service, punctual delivery, and unparalleled product quality.</li>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
