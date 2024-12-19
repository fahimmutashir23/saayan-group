/* eslint-disable react/prop-types */

const Title = ({title}) => {
    return (
        <h1 className="text-xl lg:text-2xl font-semibold text-black">
            {title}
        </h1>
    );
};

export default Title;