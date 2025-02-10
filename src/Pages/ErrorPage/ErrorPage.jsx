import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center text-center p-6 animate-fade-in">
        <div className="max-w-md mx-auto rounded-lg p-8">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 mb-4 animate-bounce">
            404
          </h1>
          <h1 className="text-2xl lg:text-3xl font-bold bg-clip-text text black mb-4">
            Page Not Found
          </h1>
          <p className=" text-lg mb-6">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/">
            <button className="px-6 py-2 text-white font-bold rounded-lg shadow-lg bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-500 transition-all">
              Go Back to Home
            </button>
          </Link>

          <div className="mt-10">
            <p className="text-black-500 text-sm">
              Need help? Contact us at
              <a
                href="mailto:support@foodsharing.com"
                className="text-teal-600 hover:underline ml-1"
              >
                support@foodsharing.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
