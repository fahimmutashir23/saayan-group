import { ThreeCircles } from "react-loader-spinner";

const LoaderBtn = () => {
  return (
    <ThreeCircles
      visible={true}
      height="24"
      width="24"
      color="white"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoaderBtn;
