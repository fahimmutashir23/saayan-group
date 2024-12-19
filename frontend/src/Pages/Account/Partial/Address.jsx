import { FaEdit } from "react-icons/fa";
import Title from "../Title";


const Address = () => {
    return (
        <div>
            <Title title='Your Address' />    
            <div className="mt-4">
                <h2>Default Shipping & Billing Address</h2>
                <div className="border-2 rounded-sm p-4 relative group hover:shadow-sm hover:bg-slate-100 duration-300">
                    <p className="font-medium text-black">
                        <span className="text-color_2">Name: </span>Fahim Muntashir
                        <span className="text-color_2"> Phone: </span>01581868984
                        <span className="text-color_2"> House: </span>#14,
                        <span className="text-color_2"> Road: </span>#01,
                        <span className="text-color_2"> Block: </span>#C,
                        Dhanmondi, Dhaka-1205
                    </p>
                    <FaEdit className="text-color_2 text-2xl absolute lg:right-4 right-2 bottom-2 lg:bottom-0 lg:top-[50%] lg:translate-y-[-50%] lg:hidden lg:group-hover:block " />
                </div>
            </div>
        </div>
    );
};

export default Address;