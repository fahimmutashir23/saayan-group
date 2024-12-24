import PageHeader from "@/Shared/PageHeader/PageHeader";
import banner from "../../../assets/Agro/agroBanner.jpg";
import Welcome from "./Partial/Welcome";
import Organic from "./Partial/Organic";
import Serve from "./Partial/Serve";
import Testimonial from "./Partial/Testimonial";
import TabTitle from "@/Utils/TabTitle";


const Agro = () => {
    return (
        <div className="space-y-10">
            <TabTitle title='Saayan Agro' />
            <PageHeader name={'Saayan Agro'} img={banner} />
            <Welcome />
            <Organic />
            <Serve />
            <Testimonial />
        </div>
    );
};

export default Agro;