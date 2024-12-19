import img from "../../../../assets/watch.png";
import { Rating } from "primereact/rating";
import HoverCard from "./HoverCard";
import { Link } from "react-router";

const Card = () => {
  return (
    <Link to="/singleProduct" className="group">
      <div className="p-2 w-full h-56 overflow-hidden bg-color_3 relative">
        <img src={img} className="w-full h-full object-cover" alt="" />
        <HoverCard />
      </div>
      <div className="mt-3">
        <Rating value={4} readOnly cancel={false} />
        <h2 className="my-2 text-lg">Printed T-shirt</h2>
        <h1 className="font-bold text-xl text-color_2 -mt-2">500$</h1>
      </div>
    </Link>
  );
};

export default Card;
