import img_1 from "../../../../assets/Ads/fashionBanner.jpg"
import img_2 from "../../../../assets/Ads/fashionBanner_2.jpg"

const Ads1 = () => {
    return (
        <div className="flex lg:h-60 flex-col lg:flex-row gap-4">
            <div className="h-full lg:w-8/12 overflow-hidden">
                <img src={img_1} className="h-full w-full object-cover hover:scale-105 duration-300" alt="" />
            </div>
            <div className="h-full lg:w-4/12 overflow-hidden">
                <img src={img_2} className="h-full w-full object-cover hover:scale-105 duration-300" alt="" />
            </div>
        </div>
    );
};

export default Ads1;