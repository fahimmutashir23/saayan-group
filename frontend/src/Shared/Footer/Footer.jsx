import { Link } from "react-router";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="bg-color_1 py-4 md:py-10 px-2 lg:px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 lg:gap-10 text-slate-300">
        <div className="lg:col-span-5 col-span-12">
        <Logo w='w-2/3' />
          <p className="text-justify mt-4">
          At Saayan Group, our vision has always been to create a legacy of trust, excellence, and innovation. Whether through empowering global trade with Saayan Traders, connecting opportunities with Saayan Consultancy Services, or nurturing sustainability with Saayan Agro, our mission is to serve with integrity and commitment.
          </p>
        </div>
        <div className="lg:col-span-2 col-span-6">
          <ul>
            <li className="text-slate-100 font-semibold mb-3">Company</li>
            <li className="">About Us</li>
            <li className="">Return policy</li>
            <li className="">Refund policy</li>
          </ul>
        </div>
        <div className="lg:col-span-2 col-span-6">
          <ul className="space-y-2">
            <li className="text-slate-100 font-semibold mb-3">Our Section</li>
            <li className="hover:text-color_3 duration-300"><Link to='/trades'>Saayan Trades</Link></li>
            <li className="hover:text-color_3 duration-300"><Link to='/agro'>Saayan Agro</Link></li>
            <li className="hover:text-color_3 duration-300"><Link to='/consultancy'>Saayan Consultancy</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-3 col-span-12">
        <h1>DBID ID : 437361334</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
