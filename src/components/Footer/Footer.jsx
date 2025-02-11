import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="relative mt-16 bg-gradient-to-r from-teal-500 via-teal-500 to-teal-500 text-gray-50">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-teal-500"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="pt-12 mx-auto w-11/12 md:w-11/12 lg:w-11/12 xl:container  ">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 row-gap-10 mb-8 items-center text-center lg:text-start lg:items-start justify-around">
            <div className="md:max-w-md lg:col-span-2">
              <Link
                to="/"
                aria-label="Go home"
                title="FoodSharing"
                className="inline-flex items-center"
              >
                <svg
                  className="w-10 h-10 text-gray-100"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span className="ml-3 text-xl text-center font-bold tracking-wide text-white uppercase">
                  FoodSharing
                </span>
              </Link>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-gray-200">
                  A platform to share and manage food resources, reducing waste
                  and helping the community.
                </p>
                <p className="mt-4 text-sm text-gray-200">
                  Join us to make a difference in the world through food-sharing
                  initiatives.
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                Resources
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 hover:text-gray-800"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/availableFoods"
                    className="transition-colors duration-300 hover:text-gray-800"
                  >
                    Available Foods
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addFood"
                    className="transition-colors duration-300 hover:text-gray-800"
                  >
                    Add Food
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manageMyFoods"
                    className="transition-colors duration-300 hover:text-gray-800"
                  >
                    Manage My Foods
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myFoodRequest"
                    className="transition-colors duration-300 hover:text-gray-800"
                  >
                    My Food Request
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">Social</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="transition-colors duration-300 hover:text-gray-800"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="transition-colors duration-300 hover:text-gray-800"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/account/access"
                    target="_blank"
                    className="transition-colors duration-300 hover:text-gray-800"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="transition-colors duration-300 hover:text-gray-800"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-5 pb-10 border-t border-gray-600 sm:flex-row">
            <p className="text-sm text-gray-200 text-center ">
              © 2026 FoodSharing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
