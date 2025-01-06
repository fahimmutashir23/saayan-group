import milk from "../../../../assets/Agro/milk.jpg";
import cattle from "../../../../assets/Agro/cattle.jpg";
import meat from "../../../../assets/Agro/meat.jpg";
import vegetable from "../../../../assets/Agro/vegetable.jpg";
import feed from "../../../../assets/Agro/feed-2.jpeg";
import feed_2 from "../../../../assets/Agro/cattle-feed.png";
import fish from "../../../../assets/Agro/fish1.jpg";

const Serve = () => {
  return (
    <div>
      <h1 className="text-color_3 text-2xl lg:text-4xl font-bold text-center">
        What We Serve
      </h1>
      <div className="w-28 h-1 rounded-full mx-auto bg-black mb-4"></div>
      <section className="space-y-4 lg:space-y-10">
        <div className="flex flex-col lg:flex-row-reverse gap-2 lg:gap-14">
          <div
            data-aos="fade-left"
            className="lg:flex-1 rounded-tl-[200px] rounded-br-[200px] overflow-hidden"
          >
            <img src={fish} className="h-full w-full object-fill" alt="" />
          </div>
          <div data-aos="fade-right" className="lg:flex-1 space-y-2">
            <h1 className="italic text-color_3 font-semibold text-2xl">
              Fishing Project
            </h1>
            <p className="space-y-2">
              At Saayan Agro, we are proud to expand our offerings into the
              realm of high-quality fishing products, catering to both local and
              international markets. Fishing has always been an integral part of
              our agricultural heritage, and we aim to elevate this tradition by
              integrating sustainable practices and modern technology into our
              operations.
              <br />
              Our fishing products include a variety of fresh and processed
              fish, ensuring premium quality and freshness from pond to plate.
              With carefully managed fish farming practices and advanced
              processing techniques, we deliver a wide range of seafood that
              meets the nutritional and culinary needs of our customers.
            </p>
            <p>
              <strong className="text-color_3">
                Why Choose Saayan Agro’s Fishing Project?
              </strong>
              <ul>
                <li>
                  <strong>Exceptional Quality Assurance:</strong> We prioritize quality at every step, ensuring our fish products are fresh, safe, and delicious. Rigorous checks and modern processing methods guarantee a superior experience for our customers.
                </li>
                <li>
                  <strong>Sustainable and Responsible Practices:</strong> Our commitment to sustainability ensures that we preserve marine ecosystems while meeting consumer demand. We farm and harvest responsibly to maintain ecological balance and provide long-term benefits.
                </li>
                <li>
                  <strong>Nutritional Excellence:</strong> Fish is a rich source of essential nutrients like omega-3 fatty acids, protein, and vitamins. Our products are designed to promote health and well-being by offering the best of what nature has to provide.
                </li>
                <li>
                  <strong>Wide Variety to Meet Every Need:</strong> Whether you’re looking for everyday staples or premium seafood options, we offer a diverse range of fish products to suit all preferences and budgets.
                </li>
                <li>
                  <strong>Trusted and Transparent:</strong> With Saayan Agro, you can trust that you’re getting seafood that is ethically sourced, hygienically processed, and delivered with care. Our transparency and dedication to customer satisfaction set us apart.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-14">
          <div
            data-aos="fade-right"
            className="lg:flex-1 rounded-tl-[200px] rounded-br-[200px] overflow-hidden"
          >
            <img src={feed} className="h-full w-full object-cover" alt="" />
          </div>
          <div data-aos="fade-left" className="lg:flex-1 space-y-2">
            <h1 className="italic text-color_3 font-semibold text-2xl">
              Poultry Feed Production (New)
            </h1>
            <p className="space-y-2">
              We are committed to supporting the poultry industry with
              scientifically formulated feeds that meet the nutritional needs of
              poultry at all stages of growth. Our feed promotes healthier
              birds, better egg production, and improved overall performance,
              benefiting poultry farmers across the region.
              <br />
              As the demand for meat, eggs, and milk in countries around the
              world continues to increase with economic development and
              population growth, the animal husbandry industry will continue to
              develop by leaps and bounds. Therefore, the overall demand for
              feed is increasing. As the main body of feed, the market capacity
              of compound feed will continue to grow in the long term.
            </p>
            <p>
              <strong className="text-color_3">
                Why Choose Saayan Agro’s Poultry Feed?
              </strong>
              <ul>
                <li>
                  <strong>Scientifically Balanced Nutrition:</strong> Our feed
                  is formulated by experts to deliver the ideal mix of nutrients
                  for optimal animal health and productivity.
                </li>
                <li>
                  <strong>Premium-Quality Ingredients:</strong> We source only
                  the finest raw materials to ensure your livestock and poultry
                  receive safe, high-quality nutrition.
                </li>
                <li>
                  <strong>Enhanced Growth and Productivity:</strong> Boost milk
                  production, improve weight gain, and maximize egg yield with
                  our specially designed feed formulas.
                </li>
                <li>
                  <strong>Age-Specific Formulations:</strong> Our feed caters to
                  the specific needs of animals at every stage of their life
                  cycle, from young to mature.
                </li>
                <li>
                  <strong>Environmentally Friendly Production:</strong> We
                  prioritize sustainability in our processes, reducing
                  environmental impact while maintaining top quality.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-2 lg:gap-14">
          <div
            data-aos="fade-left"
            className="lg:flex-1 rounded-tl-[200px] rounded-br-[200px] overflow-hidden"
          >
            <img src={feed_2} className="h-full w-full object-cover" alt="" />
          </div>
          <div data-aos="fade-right" className="lg:flex-1 space-y-2">
            <h1 className="italic text-color_3 font-semibold text-2xl">
              Cattle Feed Production (New)
            </h1>
            <p className="space-y-2">
              Our cow feed production unit is dedicated to manufacturing
              nutrient-rich, balanced feed that supports optimal growth and
              health of cattle. By sourcing high-quality raw materials, we
              ensure that our feed enhances milk production and overall
              livestock well-being.
              <br />
              As the demand for meat, eggs, and milk in countries around the
              world continues to increase with economic development and
              population growth, the animal husbandry industry will continue to
              develop by leaps and bounds. Therefore, the overall demand for
              feed is increasing. As the main body of feed, the market capacity
              of compound feed will continue to grow in the long term.
            </p>
            <p>
              <strong className="text-color_3">
                Why Choose Saayan Agro’s Cow Feed?
              </strong>
              <ul>
                <li>
                  <strong>Scientifically Balanced Nutrition:</strong> Our feed
                  is formulated by experts to deliver the ideal mix of nutrients
                  for optimal animal health and productivity.
                </li>
                <li>
                  <strong>Premium-Quality Ingredients:</strong> We source only
                  the finest raw materials to ensure your livestock and poultry
                  receive safe, high-quality nutrition.
                </li>
                <li>
                  <strong>Enhanced Growth and Productivity:</strong> Boost milk
                  production, improve weight gain, and maximize egg yield with
                  our specially designed feed formulas.
                </li>
                <li>
                  <strong>Age-Specific Formulations:</strong> Our feed caters to
                  the specific needs of animals at every stage of their life
                  cycle, from young to mature.
                </li>
                <li>
                  <strong>Environmentally Friendly Production:</strong> We
                  prioritize sustainability in our processes, reducing
                  environmental impact while maintaining top quality.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-14">
          <div
            data-aos="fade-right"
            className="lg:flex-1 rounded-tl-[200px] rounded-br-[200px] overflow-hidden"
          >
            <img src={cattle} className="h-full w-full object-cover" alt="" />
          </div>
          <div data-aos="fade-left" className="lg:flex-1 space-y-2">
            <h1 className="italic text-color_3 font-semibold text-2xl">
              Cattle Farming
            </h1>
            <p className="space-y-2">
              The cattle farming sector of Saayan Agro represents our commitment
              to excellence in livestock management. We maintain a
              state-of-the-art facility where our livestock are raised in a
              clean, healthy, and humane environment. With a focus on both dairy
              and meat production, we ensure that every aspect of our cattle
              farming process meets rigorous quality and ethical standards.{" "}
              <br />
              Our farm specializes in breeding healthy livestock through
              advanced techniques and sustainable practices. From maintaining
              optimal nutrition for our cattle to ensuring their well-being, we
              prioritize every detail to produce high-quality beef and dairy
              products.
            </p>
            <p>
              <strong className="text-color_3">
                Why Choose Saayan Agro’s Cattle Farming?
              </strong>
              <ul>
                <li>
                  <strong>Healthy Livestock:</strong> Our cattle are raised with
                  care, ensuring their health and productivity.
                </li>
                <li>
                  <strong>Modern Farming Techniques:</strong> We use
                  cutting-edge technology to manage our farm efficiently.
                </li>
                <li>
                  <strong>Hygienic Environment:</strong> Every step of the
                  process, from feeding to milking or meat processing, is done
                  under the strictest hygiene standards.
                </li>
                <li>
                  <strong>Transparency and Trust:</strong> Our customers have
                  complete visibility into our practices, ensuring confidence in
                  the quality of our products.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-2 lg:gap-14">
          <div
            data-aos="fade-left"
            className="lg:flex-1 rounded-tr-[200px] rounded-bl-[200px] overflow-hidden"
          >
            <img src={milk} className="h-full w-full object-cover" alt="" />
          </div>
          <div data-aos="fade-right" className="lg:flex-1 space-y-2">
            <h1 className="italic text-color_3 font-semibold text-2xl">
              Milk Product
            </h1>
            <p className="space-y-2">
              At Saayan Agro, we are deeply committed to delivering dairy
              products of the highest quality, ensuring freshness and
              nutritional value in every drop. Our state-of-the-art cattle farm
              is designed to maintain the health and well-being of our cows,
              which are nurtured with utmost care and fed a balanced, natural
              diet. This ensures that the milk they produce is free from
              artificial additives and rich in essential nutrients. <br /> Our
              range of milk products includes fresh whole milk, ghee, butter,
              yogurt, and cream, all crafted to perfection to meet the diverse
              needs of our customers. We believe that dairy should not only
              nourish but also provide an unmatched taste experience, which is
              why every step of our production process is meticulously managed
              for quality assurance.
            </p>
            <p>
              <strong className="text-color_3">
                Why Choose Saayan Agro for Milk Products?
              </strong>
              <ul>
                <li>
                  <strong>Freshness Guaranteed:</strong> Our products are
                  sourced daily, ensuring they retain their natural taste and
                  nutrients.
                </li>
                <li>
                  <strong>Ethical Farming Practices:</strong> Our cattle are
                  raised in a stress-free environment, adhering to strict
                  ethical standards.
                </li>
                <li>
                  <strong>Health and Safety:</strong> We follow stringent
                  hygiene protocols to deliver dairy products that are safe and
                  wholesome.
                </li>
                <li>
                  <strong>Sustainability:</strong> Our processes are
                  eco-friendly, contributing to a greener planet while
                  supporting rural communities.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-14">
          <div
            data-aos="fade-right"
            className="lg:flex-1 rounded-tl-[200px] rounded-br-[200px] overflow-hidden"
          >
            <img src={meat} className="h-full w-full object-cover" alt="" />
          </div>
          <div data-aos="fade-left" className="lg:flex-1 space-y-2">
            <h1 className="italic text-color_3 font-semibold text-2xl">
              Meet Products
            </h1>
            <p className="space-y-2">
              Meat production is another cornerstone of Saayan Agro, where
              quality, safety, and freshness are non-negotiable. We provide a
              range of premium meat products, including beef, mutton, and
              poultry, sourced directly from our farm and processed with the
              utmost care. Every cut of meat is prepared to meet the highest
              standards of hygiene, ensuring that it is safe, tender, and packed
              with flavor. <br />
              We believe that quality meat begins with the right approach to
              farming, which is why our livestock is raised in a stress-free
              environment with access to nutritious feed. From farm to
              processing, every stage is closely monitored to deliver meat
              products that are fresh, healthy, and full of natural goodness.
            </p>
            <p>
              <strong className="text-color_3">
                Why Choose Saayan Agro for Meat Products?
              </strong>
              <ul>
                <li>
                  <strong>Farm-Fresh Meat:</strong> Our products come straight
                  from our farm to your table, ensuring maximum freshness.
                </li>
                <li>
                  <strong>Hygiene and Safety:</strong> We follow rigorous safety
                  protocols in our processing facilities.
                </li>
                <li>
                  <strong>Tender and Flavorful:</strong> Our meat products are
                  known for their exceptional taste and texture.
                </li>
                <li>
                  <strong>Ethical Practices:</strong> We prioritize humane
                  treatment of animals, reflecting our commitment to
                  sustainability and ethical farming.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-2 lg:gap-14">
          <div
            data-aos="fade-left"
            className="lg:flex-1 rounded-tr-[200px] rounded-bl-[200px] overflow-hidden"
          >
            <img
              src={vegetable}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div data-aos="fade-right" className="lg:flex-1 space-y-2">
            <h1 className="italic text-color_3 font-semibold text-2xl">
              Vegetable Products
            </h1>
            <p className="space-y-2">
              In our vegetable farming sector, Saayan Agro takes pride in
              cultivating a wide variety of fresh, organic, and seasonal
              vegetables. We utilize sustainable agricultural practices that
              prioritize soil health, water conservation, and minimal chemical
              intervention, ensuring that the produce you receive is not only
              healthy but also environmentally friendly. <br />
              From leafy greens to root vegetables and seasonal specialties, our
              farm-to-table approach ensures freshness and flavor. Our produce
              is harvested at peak ripeness and transported under carefully
              controlled conditions to retain its natural goodness. With a focus
              on quality, every vegetable from Saayan Agro is a testament to our
              commitment to healthy living.
            </p>
            <p>
              <strong className="text-color_3">
                Why Choose Saayan Agro for Vegetables?
              </strong>
              <ul>
                <li>
                  <strong>Chemical-Free Farming:</strong> We grow our vegetables
                  without harmful pesticides or fertilizers.
                </li>
                <li>
                  <strong>Freshness First:</strong> Our vegetables are freshly
                  harvested and delivered directly to you.
                </li>
                <li>
                  <strong>Nutrient-Rich Produce:</strong> Our farming practices
                  enhance the natural nutrient profile of every vegetable.
                </li>
                <li>
                  <strong>Support for Local Agriculture:</strong> By sourcing
                  from Saayan Agro, you are contributing to the growth of
                  sustainable farming communities.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Serve;
