/* eslint-disable react/prop-types */
import { Link } from "react-router";

const Card = ({ image, text, link, title }) => {
  return (
    <Link to={link} className="bg-white group">
      <div className="h-80 w-full overflow-hidden">
        <img src={image} className="h-full w-full object-cover lg:group-hover:scale-105 duration-300" alt="" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold font_title mb-3 uppercase">
          {title}
        </h2>
        <p>{text}</p>
        <p className="text-color_2 mt-3">Read More</p>
      </div>
    </Link>
  );
};

export default Card;
