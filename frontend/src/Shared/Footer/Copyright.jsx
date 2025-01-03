import moment from "moment";


const Copyright = () => {
    const year = moment().format('YYYY');
    return (
        <div className="bg-color_2 py-4 px-2 lg:px-0">
            <div className="max-w-7xl mx-auto flex items-center flex-col lg:flex-row justify-between">
                <p className="text-color_1 text-center">
                &copy; {year} All right reserved by <strong>Saayan Group</strong>. | Design & Developed by <span className="text-lg font-semibold">Fahim Muntashir</span>.
                </p>
                <p className="text-color_1">
                    Sitemap | privacy policy
                </p>
            </div>
        </div>
    );
};

export default Copyright;