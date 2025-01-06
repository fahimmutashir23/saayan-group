/* eslint-disable react/prop-types */

const PageHeader = ({name, img}) => {
    return (
        <div style={{backgroundImage: `url(${img})`}} className="bg-cover bg-no-repeat bg-center relative">
            <div className="bg-black/60 h-full w-full py-10 lg:py-20">
            <h1 className="font_title font-bold text-2xl lg:text-5xl text-white text-center">{name}</h1>
            </div>
        </div>
    );
};

export default PageHeader;