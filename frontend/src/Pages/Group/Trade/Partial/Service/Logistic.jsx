import TopPage from "@/Utils/TopPage";
import img from "../../../../../assets/Trade/Logistics.jpg";

const Logistic = () => {
  return (
    <div>
      <TopPage />
      <section>
        <img src={img} alt="" className="w-full" />
        <p className="lg:text-lg mt-4 text-justify space-y-5">
          Logistics companies manage the complex process of moving goods and
          materials efficiently from one location to another, whether
          domestically or internationally. Here are the main functions they
          typically perform: <br />
          <div>
          <strong className="text-xl">Transportation Management</strong> <br />
          <li>
            <strong>Domestic and International Shipping:</strong> Organize
            transportation by road, rail, sea, or air, ensuring goods reach
            their destination.
          </li>
          <li>
            <strong>Fleet Management:</strong> Oversee vehicles, ensuring they
            are maintained and used efficiently.
          </li>
          <li>
            <strong>Route Optimization:</strong> Plan the most efficient routes
            to save time and reduce costs.
          </li>
          </div>
          <div>
          <strong className="text-xl">Warehousing and Storage</strong> <br />
          <li>
            <strong>Inventory Management:</strong> Keep track of stock levels,
            locations, and status to ensure products are stored and available
            when needed.
          </li>
          <li>
            <strong>Storage Solutions:</strong> Provide storage options,
            including temperature-controlled environments for perishable goods.
          </li>
          <li>
            <strong>Order Fulfillment:</strong> Process, pick, pack, and ship
            orders to fulfill customer needs promptly.
          </li>
          </div>
          <div>
          <strong className="text-xl">Freight Forwarding</strong> <br />
          <li>
            <strong>Cross-Border Coordination:</strong> Manage international
            shipping, handling complex paperwork, customs, and compliance.
          </li>
          <li>
            <strong>Carrier Selection:</strong> Choose carriers and negotiate
            rates to balance cost and speed for customers.
          </li>
          <li>
            <strong>Documentation:</strong> Handle bills of lading,
            export/import declarations, and other necessary paperwork.
          </li>
          </div>
          <div>
          <strong className="text-xl">Customs Brokerage</strong> <br />
          <li>
            <strong>Customs Clearance:</strong> Ensure goods comply with
            import/export regulations, including duties, tariffs, and other
            legal requirements.
          </li>
          <li>
            <strong>Documentation and Compliance:</strong> Prepare and manage
            customs documentation, working with customs authorities to ensure
            smooth clearance.
          </li>
          </div>
          <div>
          <strong className="text-xl">Inventory Management and Tracking</strong>{" "}
          <br />
          <li>
            <strong>Real-Time Tracking:</strong> Provide live tracking solutions
            for the visibility of shipments from origin to destination.
          </li>
          <li>
            <strong>Demand Planning:</strong> Use data to anticipate demand,
            ensuring stock availability without overstocking.
          </li>
          </div>
        </p>
      </section>
    </div>
  );
};

export default Logistic;
