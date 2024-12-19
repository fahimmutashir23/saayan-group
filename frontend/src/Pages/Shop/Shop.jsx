import { Slider } from "@/components/ui/slider";
import TabTitle from "@/Utils/TabTitle";
import { useState } from "react";
import { useCollapse } from "react-collapsed";
import { IoMdArrowDropdown } from "react-icons/io";
import bannerImg from "../../assets/Banner/model_3.jpg";
import Card from "../Home/Partials/Products/Card";
import BreadcrumbTab from "@/Utils/BreadcrumbTab";

const Shop = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [range, setRange] = useState([0]);

  const {
    getCollapseProps: getCategoryCollapseProps,
    getToggleProps: getCategoryToggleProps,
  } = useCollapse({ isExpanded });

  return (
    <div>
      <TabTitle title="Shop" />
      <BreadcrumbTab menu={[{ name: "Shop", link: null }]} />
      <div className="flex gap-4">
        {/* =============== Filtering Section ============= */}
        <div className="hidden lg:flex lg:flex-col lg:w-[20%]">
          {/* Category Section */}
          <div className="bg-color_4/50 rounded-md overflow-hidden ">
            <button
              {...getCategoryToggleProps()}
              className="flex items-center justify-between py-3 text-lg w-full font-bold px-3 border-b border-black"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              Category
              <IoMdArrowDropdown
                className={`transform transition-transform duration-300 text-xl ${
                  isExpanded ? "rotate-0" : "rotate-180"
                }`}
              />
            </button>
            <hr />
            <section {...getCategoryCollapseProps()}>
              <div className="px-3 py-2">
                {/* {categories.map((category, idx) => ( */}
                <div className="mt-2 flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id={1}
                    // checked={categoryId?.includes(category._id)}
                    // onChange={() => handleCheckboxChange(category._id)}
                  />
                  <label htmlFor={1}>{"category.name"}</label>
                </div>
                {/* ))} */}
              </div>
            </section>
          </div>

          {/* Price Section */}
          <div className="bg-color_4/50 rounded-md overflow-hidden mt-4">
            <div className="flex items-center justify-between py-3 text-lg w-full font-bold px-3 border-b border-black">
              Price Range
            </div>
            <div className="px-3 py-5">
              <Slider
                onValueChange={(value) => setRange(value)}
                defaultValue={range}
                value={range}
                max={1000}
                step={50}
              />
              <div className=" flex justify-center">
                <input
                  type="number"
                  defaultValue={0}
                  value={range}
                  onChange={(e) => setRange([parseInt(e.target.value)])}
                  className="mt-2 w-20 text-center border-color_1 border-2 text-lg font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========== Product Display Section========= */}
        <div className="lg:w-[80%]">
          <div
            className="border bg-cover bg-center bg-no-repeat p-2 lg:p-10 flex items-center justify-center"
            style={{ backgroundImage: `url(${bannerImg})` }}
          >
            <div className="space-y-3 flex justify-center flex-col items-center max-w-lg mx-auto">
              <h1 className="text-2xl lg:text-3xl font-semibold text-white bg-color_3/40 max-w-fit p-4">
                BEST THEME
              </h1>
              <p className="lg:text-lg font-medium text-white text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                doloremque nostrum ducimus ex necessitatibus. Amet placeat hic
                atque suscipit veritatis.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-4">
            {/* {catBasedProduct?.result?.map((product) => {
                return ( */}
            <Card />
            {/* );
              })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
