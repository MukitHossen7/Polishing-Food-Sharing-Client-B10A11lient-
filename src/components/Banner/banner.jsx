import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="mt-10">
      <div
        className="relative h-96 lg:h-[450px] bg-cover bg-center transition-all duration-500 ease-in-out hover:h-[600px]"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 transition-all duration-500 ease-in-out"></div>
        <div className="relative z-10 text-white text-center pt-24 lg:pt-32 px-5 lg:px-0">
          <h1 className="text-2xl lg:text-5xl font-bold tracking-wide leading-tight">
            Welcome to Food Share Platform
          </h1>
          <p className="text-lg lg:text-xl mt-4">
            Sharing food for a better world. Join us today!
          </p>
          <Link
            to="/login"
            className="mt-6 inline-block bg-teal-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
          >
            join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
