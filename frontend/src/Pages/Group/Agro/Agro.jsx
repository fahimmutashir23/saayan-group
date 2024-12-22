import PageHeader from "@/Shared/PageHeader/PageHeader";
import banner from "../../../assets/Agro/agroBanner.jpg";
import Welcome from "./Partial/Welcome";


const Agro = () => {
    return (
        <div>
            <PageHeader name={'Saayan Agro'} img={banner} />
            <Welcome />
        </div>
    );
};

export default Agro;