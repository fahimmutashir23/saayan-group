import TopPage from "@/Utils/TopPage";
import img from "../../../../../assets/Trade/Logistics.jpg";


const Logistic = () => {
    return (
        <div>
            <TopPage />
            <section>
                <img src={img} alt="" />
                <p className="lg:text-lg mt-4 text-justify"></p>
            </section>
        </div>
    );
};

export default Logistic;