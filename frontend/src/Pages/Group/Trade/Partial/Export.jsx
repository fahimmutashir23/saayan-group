import { Link } from "react-router";
import exportImg from "../../../../assets/Trade/export-import.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Export = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="flex-1 h-80">
        <img
          src={exportImg}
          className="rounded-md w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl lg:text-5xl font-semibold text-color_3">
          Export-Import Company in Bangladesh
        </h1>
        <p className="mt-4 text-base lg:text-lg font-medium">
          After the liberation war, the economic condition of the country was
          very weak. In 1972, when Bangabandhu returned to us, he first focused
          on establishing the import-export trade for improving the entire
          economic condition. His dream was to strengthen the economy of
          Bangladesh through the simultaneous development of the agriculture and
          industry sectors. Following this, in 1973, he simplify the licensing
          system of import and export trade to create employment and improve the
          income of the people.
        </p>
        <Link
          to="details"
          className="flex items-center text-base lg:text-xl bg-color_2 py-1 max-w-fit px-6 text-white font-semibold hover:bg-blue-400 duration-300 color"
        >
          Read More
          <MdKeyboardArrowRight className="text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default Export;
