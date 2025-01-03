import { Link } from "react-router";
import Logo from "../Logo/Logo";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const linkedin = 'https://www.linkedin.com/in/salman-sabuj-1365171a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  const facebookGroup = 'https://www.facebook.com/profile.php?id=61571548554146&mibextid=ZbWKwL'
  const facebookTrade = 'https://www.facebook.com/adombaperysatkhirazila?mibextid=ZbWKwL'
  const facebookAgro = 'https://www.facebook.com/profile.php?id=61571367723417&mibextid=ZbWKwL'
  const facebookCon = 'https://www.facebook.com/profile.php?id=61571549037372&mibextid=ZbWKwL'
  return (
    <div className="bg-color_1 py-4 md:py-10 px-2 lg:px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 lg:gap-10 text-slate-300">
        <div className="lg:col-span-5 col-span-12">
          <Logo w="w-2/3" />
          <p className="text-justify mt-4">
            At Saayan Group, our vision has always been to create a legacy of
            trust, excellence, and innovation. Whether through empowering global
            trade with Saayan Traders, connecting opportunities with Saayan
            Consultancy Services, or nurturing sustainability with Saayan Agro,
            our mission is to serve with integrity and commitment.
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
            <li className="hover:text-color_3 duration-300">
              <Link to="/trades">Saayan Trades</Link>
            </li>
            <li className="hover:text-color_3 duration-300">
              <Link to="/agro">Saayan Agro</Link>
            </li>
            <li className="hover:text-color_3 duration-300">
              <Link to="/consultancy">Saayan Consultancy</Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3 col-span-12">
          <h1 className="mb-2 text-white font-semibold">Social Network</h1>
          <a
            href={facebookGroup} target="_blank"
            className="flex items-center gap-2 bg-black/20 hover:bg-black duration-300 py-2 px-4 border-b"
          >
            <FaFacebook className="text-2xl" />
            <h3 className="text-xl">Saayan Group</h3>
          </a>
          <a
            href={facebookTrade} target="_blank"
            className="flex items-center gap-2 bg-black/20 hover:bg-black duration-300 py-2 px-4 border-b"
          >
            <FaFacebook className="text-2xl" />
            <h3 className="text-xl">Saayan Trade</h3>
          </a>
          <a
            href={facebookAgro} target="_blank"
            className="flex items-center gap-2 bg-black/20 hover:bg-black duration-300 py-2 px-4 border-b"
          >
            <FaFacebook className="text-2xl" />
            <h3 className="text-xl">Saayan Agro</h3>
          </a>
          <a
            href={facebookCon} target="_blank"
            className="flex items-center gap-2 bg-black/20 hover:bg-black duration-300 py-2 px-4 border-b"
          >
            <FaFacebook className="text-2xl" />
            <h3 className="text-xl">Saayan Consultancy</h3>
          </a>
          <div className="flex w-full">
            <a
              href="https://wa.me/+880 1719-381825"
              className="bg-black hover:bg-black/20 duration-300 w-full flex justify-center py-2 border-r"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
            <a
              href={linkedin} target="_blank"
              className="bg-black hover:bg-black/20 duration-300 w-full flex justify-center py-2 border-l"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
