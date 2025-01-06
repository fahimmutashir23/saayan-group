import ex_im from "../../../../assets/Trade/details.jpg";
import logistic from "../../../../assets/Trade/Logistics.jpg";
import agro from "../../../../assets/Agro/fish1.jpg";
import ecommerce from "../../../../assets/Consultancy/word1.jpg";
import { Link } from "react-router";

const Service = () => {
  return (
    <div>
      <h1 className="text-color_3 text-2xl lg:text-4xl font-bold text-center">
        Our Service
      </h1>
      <div className="w-28 h-1 rounded-full mx-auto bg-black mb-4"></div>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Link to='logistic' className="border-2 border-white hover:border-color_3 duration-300 group">
          <div className="w-full h-40 overflow-hidden">
            <img src={logistic} className="h-full w-full object-fill" alt="" />
          </div>
          <h1 className="uppercase text-xl lg:text-2xl font-semibold group-hover:text-color_3 duration-300 my-2 lg:my-4 text-center">
            logistics
          </h1>
        </Link>
        <Link to='export-import' className="border-2 border-white hover:border-color_3 duration-300 group">
          <div className="w-full h-40 overflow-hidden">
            <img src={ex_im} className="h-full w-full object-fill" alt="" />
          </div>
          <h1 className="uppercase text-xl lg:text-2xl font-semibold group-hover:text-color_3 duration-300 my-2 lg:my-4 text-center">
            Export-import
          </h1>
        </Link>
        <Link to='/consultancy' className="border-2 border-white hover:border-color_3 duration-300 group">
          <div className="w-full h-40 overflow-hidden">
            <img src={ecommerce} className="h-full w-full object-fill" alt="" />
          </div>
          <h1 className="uppercase text-xl lg:text-2xl font-semibold group-hover:text-color_3 duration-300 my-2 lg:my-4 text-center">
            consultancy
          </h1>
        </Link>
        <Link to='/agro' className="border-2 border-white hover:border-color_3 duration-300 group">
          <div className="w-full h-40 overflow-hidden">
            <img src={agro} className="h-full w-full object-fill" alt="" />
          </div>
          <h1 className="uppercase text-xl lg:text-2xl font-semibold group-hover:text-color_3 duration-300 my-2 lg:my-4 text-center">
            Agro
          </h1>
        </Link>
      </section>
    </div>
  );
};

export default Service;
