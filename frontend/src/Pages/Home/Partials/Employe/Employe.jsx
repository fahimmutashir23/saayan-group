import employe1 from "../../../../assets/Profile/Md  Hasanur jaman.jpg";
import employe2 from "../../../../assets/Profile/Md karimul haq shopon.jpg";
import employe3 from "../../../../assets/Profile/Md Rafuqul Islam.jpg";
import employe4 from "../../../../assets/Profile/Md Sabbir Hossain.jpg";
import employe5 from "../../../../assets/Profile/Md Zakirullah kushro.jpg";
import employe6 from "../../../../assets/Profile/name.jpg";

const Employe = () => {
  const name = [
    { name: "Md Hasanur jaman", img: employe1 },
    { name: "Md karimul haq shopon", img: employe2 },
    { name: "Md Rafuqul Islam", img: employe3 },
    { name: "Md Sabbir Hossain", img: employe4 },
    { name: "Md Zakirullah kushro", img: employe5 },
    { name: "Md Hasanur jaman", img: employe6 },
  ];
  return (
    <div>
      <h1 className="text-color_3 text-2xl lg:text-4xl font-bold text-center">
        Our Employee
      </h1>
      <div className="w-28 h-1 rounded-full mx-auto bg-black mb-6 mt-1"></div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {name.map((item, idx) => (
          <div key={idx} className="bg-color_3/10 p-2 relative group">
            <div className="h-72 w-full overflow-hidden">
              <img
                src={item.img}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="bg-[#FFE5E5] w-full absolute bottom-0 left-0 opacity-0 transition-all duration-300 group-hover:py-4 group-hover:opacity-100">
              <h2 className="text-xl font-semibold text-center">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employe;
