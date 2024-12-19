import Title from "../Title";

const Orders = () => {
    return (
        <div>
            <Title title='Orders' />
            <div className="">
                <table className=" w-full">
                    <thead className="bg-color_4/40">
                        <tr>
                            <th className="py-1">Order</th>
                            <th className="border">Date</th>
                            <th className="border">Status</th>
                            <th className="border">Total</th>
                            <th className="border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border text-center py-1">1</td>
                            <td className="border text-center py-1">10 May 2024</td>
                            <td className="border text-center py-1 bg-color_3">complete</td>
                            <td className="border text-center py-1">5000৳</td>
                            <td className="border text-center py-1 text-color_2 font-semibold">view</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;