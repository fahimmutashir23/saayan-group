import PageHeader from "@/Shared/PageHeader/PageHeader";
import img from "../../../assets/Trade/tradeBanner.jpeg";
import Welcome from "./Partial/Welcome";
import TabTitle from "@/Utils/TabTitle";


const Trade = () => {
    return (
        <div className="space-y-10">
            <TabTitle title='Saayan Traders' />
            <PageHeader img={img} name='Saayan Traders' />
            <Welcome />
        </div>
    );
};

export default Trade;