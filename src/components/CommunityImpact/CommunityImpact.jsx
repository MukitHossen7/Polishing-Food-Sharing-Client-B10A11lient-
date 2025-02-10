import CountUp from "react-countup";

const CommunityImpact = () => {
  return (
    <div>
      <div className="py-8 lg:py-12">
        <div className="mx-auto w-11/12 md:w-11/12 lg:w-11/12 xl:container text-center">
          <h2 className="  mb-4 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600 text-2xl lg:text-3xl font-semibold text-center">
            Our Community Impact
          </h2>
          <p className="text-lg mb-8 w-full lg:max-w-3xl mx-auto">
            Together, we’ve reduced food waste and helped hundreds of families
            access surplus food. See how our platform is changing lives!
          </p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="bg-white text-teal-700 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:bg-teal-100">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600">
                <CountUp end={1000} />+ Meals Shared
              </h3>
              <p className="text-black">
                Over 1000 meals have been shared among community members.
              </p>
            </div>
            <div className="bg-white text-teal-700 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:bg-teal-100">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600">
                <CountUp end={200} /> Families Helped
              </h3>
              <p className="text-black">
                Providing food for families in need and reducing hunger.
              </p>
            </div>
            <div className="bg-white text-teal-700 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:bg-teal-100">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600">
                <CountUp end={500} />
                kg Food Saved
              </h3>
              <p className="text-black">
                Significantly reducing food waste in our communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityImpact;
