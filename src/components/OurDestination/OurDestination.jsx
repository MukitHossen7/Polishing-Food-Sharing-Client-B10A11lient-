import { Link } from "react-router-dom";
import share1 from "../../assets/images (3).jpg";
import share2 from "../../assets/images (4).jpg";
import share3 from "../../assets/images (5).jpg";
const OurDestination = () => {
  return (
    <div className="mt-14 lg:mt-24">
      <div className="w-11/12 md:w-11/12 lg:w-11/12 lg:container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-2xl font-semibold tracking-tight text-gray-900 lg:text-3xl sm:leading-none">
                Let us handle
                <br className="hidden md:block" />
                our next{" "}
                <span className="inline-block text-teal-500">destination</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Next, we focus on a destination where food is more than just a
                meal its an opportunity for connection. Through food sharing, we
                embrace the spirit of generosity and sustainability. Every
                shared dish fosters a sense of community, where no one goes
                hungry, and everyone has the chance to contribute.
              </p>
            </div>
            <div>
              <Link to="/availableFoods">
                <p className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-500 hover:text-deep-purple-800">
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </p>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={share1}
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={share2}
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={share3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDestination;
