const ExtraSection = () => {
  return (
    <div>
      {/* Extra Section 1 - Why Share Food */}
      <section className="pt-14 lg:pt-20 text-black">
        <div className="container mx-auto text-center px-4 md:px-8">
          <h2 className="mb-4 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600 text-2xl lg:text-3xl font-semibold text-center">
            Why Share Food?
          </h2>
          <p className="text-lg mb-8 w-full lg:max-w-[780px] mx-auto">
            Join a community that reduces food waste, helps the environment, and
            makes a difference in people&apos;s lives. Sharing food is one of
            the most powerful ways to create positive change.
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center">
              <img
                src="/path/to/icon1.svg"
                alt="Save Food"
                className="w-12 mb-4"
              />
              <h4 className="text-lg font-semibold">Save Food</h4>
              <p className="text-sm text-center">
                Help reduce food waste by sharing your excess food.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/path/to/icon2.svg"
                alt="Help Others"
                className="w-12 mb-4"
              />
              <h4 className="text-lg font-semibold">Help Others</h4>
              <p className="text-sm text-center">
                Provide food to those in need, making a real impact.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/path/to/icon3.svg"
                alt="Community"
                className="w-12 mb-4"
              />
              <h4 className="text-lg font-semibold">Build Community</h4>
              <p className="text-sm text-center">
                Join a supportive community committed to social good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 2 - How It Works */}
      <section className="bg-white pt-14 lg:pt-16">
        <div className="container mx-auto text-center px-4 md:px-8">
          <h2 className="mb-4 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600 text-2xl lg:text-3xl font-semibold text-center">
            How It Works
          </h2>
          <p className="text-lg mb-8 w-full lg:max-w-3xl mx-auto">
            Sharing food is simple and efficient. Here’s how you can start
            making a difference today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600">
                1. Donate Food
              </h3>
              <p className="text-gray-900 pt-1">
                Upload details about the food you want to donate, including its
                condition and quantity.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600">
                2. Request Food
              </h3>
              <p className="text-gray-900 pt-1">
                If you&apos;re in need, browse available food items and request
                the ones you&apos;d like to collect.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-600">
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
