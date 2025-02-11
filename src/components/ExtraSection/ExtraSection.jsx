import { Utensils, HeartHandshake, Users } from "lucide-react";

const ExtraSection = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pt-14 lg:pt-20">
      <section className="">
        <div className=" text-center">
          <h2 className="mb-4 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600 text-2xl lg:text-3xl font-semibold">
            Why Share Food?
          </h2>
          <p className="text-lg mb-8 w-full lg:max-w-[780px] mx-auto text-gray-800">
            Join a community that reduces food waste, helps the environment, and
            makes a difference in people&apos;s lives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <Utensils className="w-14 h-14 text-teal-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">Save Food</h4>
              <p className="text-gray-700 text-center">
                Help reduce food waste by sharing your excess food.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <HeartHandshake className="w-14 h-14 text-teal-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">
                Help Others
              </h4>
              <p className="text-gray-700 text-center">
                Provide food to those in need, making a real impact.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-14 h-14 text-teal-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">
                Build Community
              </h4>
              <p className=" text-gray-700 text-center">
                Join a supportive community committed to social good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 2 - How It Works */}
      <section className="bg-white pt-14 lg:mt-7">
        <div className="text-center">
          <h2 className="mb-4 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600 text-2xl lg:text-3xl font-semibold text-center">
            How It Works
          </h2>
          <p className="text-lg mb-8 w-full lg:max-w-3xl mx-auto">
            Sharing food is simple and efficient. Here’s how you can start
            making a difference today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600">
                1. Donate Food
              </h3>
              <p className="text-gray-900 pt-1">
                Upload details about the food you want to donate, including its
                condition and quantity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600">
                2. Request Food
              </h3>
              <p className="text-gray-900 pt-1">
                If you&apos;re in need, browse available food items and request
                the ones you&apos;d like to collect.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600">
                3. Pick Up & Share
              </h3>
              <p className="text-gray-900 pt-1">
                Once a request is confirmed, you can arrange to pick up or have
                food delivered to those in need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection;
