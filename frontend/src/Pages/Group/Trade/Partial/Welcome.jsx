import mainImg from "../../../../assets/Service/trade.jpg";

const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-5 lg:gap-20">
      <div className="lg:w-1/2 w-full lg:h-[450px] overflow-hidden p-1 rounded-lg">
        <img
          src={mainImg}
          className="h-full w-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="p-2 rounded-lg lg:w-1/2">
        <h1 className="text-xl lg:text-5xl font_title font-bold mb-4 border-b-2 max-w-fit text-color_3">
          Welcome to Saayan Traders
        </h1>
        <p className="text-lg font-medium text-justify">
          Saayan Traders is a name synonymous with trust, excellence, and
          efficiency in the import and export industry of Bangladesh. We are
          proud to serve as a bridge between global markets and local
          opportunities, facilitating seamless trade operations for buyers and
          suppliers worldwide. Established with the vision of empowering
          businesses, Saayan Traders has become a cornerstone in the trading
          sector, renowned for our dedication to quality and customer
          satisfaction. <br />
          At Saayan Traders, we specialize in importing and exporting a wide
          range of products, from agricultural produce and industrial goods to
          consumer items and essential commodities. Our comprehensive services
          cater to diverse business needs, ensuring that our clients have access
          to the best products and markets across the globe. By leveraging a
          robust network of international and local partners, we guarantee
          competitive pricing and the highest standards of quality. <br />
          Experience the Saayan Traders difference—where trust meets excellence,
          and your success is our priority.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
