import bg from "../../../../assets/Service/bg_1.jpg";

const Bg_1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-fixed h-60 bg-cover bg-no-repeat w-full relative"
    >
      <div className="text-white flex flex-col justify-center items-center h-full bg-gray-600/60">
        <h1 className="text-2xl lg:text-4xl font-semibold text-center">We build scope that respect your money</h1>
        <p className="text-xl font-medium mt-2 text-center">Are you still looking for something else?</p>
      </div>
    </div>
  );
};

export default Bg_1;
