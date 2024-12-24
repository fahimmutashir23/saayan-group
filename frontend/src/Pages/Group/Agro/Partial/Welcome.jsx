import mainImg from "../../../../assets/Service/agro.jpg";

const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-5 lg:gap-20">
      <div className="lg:w-1/2 w-full lg:h-[450px] overflow-hidden p-1 rounded-lg">
        <img
          src={mainImg}
          className="h-full w-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="p-2 rounded-lg lg:w-1/2">
        <h1 className="text-xl lg:text-5xli font_title font-bold mb-4 border-b-2 max-w-fit text-color_3">
          Welcome to Saayan Agro
        </h1>
        <p className="text-lg font-medium text-justify">
          where agriculture meets innovation. Our mission is to revolutionize
          the agriculture and food processing industry with sustainable
          practices and high-quality products. Based in Patkelghata, Satkhira,
          we specialize in farming, food processing, and fisheries, creating a
          harmonious blend of modern techniques and traditional values. <br /> From our
          state-of-the-art cow farming and fishing project to our commitment to
          delivering fresh and nutritious food, Saayan Agro is dedicated to
          feeding the nation while nurturing the planet. Join us on this journey
          of growth, sustainability, and excellence.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
