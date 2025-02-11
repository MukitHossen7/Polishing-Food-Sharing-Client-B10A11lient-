import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import loginAnimation from "../../assets/login.json";
import Lottie from "lottie-react";

const Login = () => {
  const [signToggle, setSignToggle] = useState(false);
  const navigate = useNavigate();
  const { signInExistingUsers, signInWithGoogle, user } =
    useContext(AuthContext);

  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInExistingUsers(email, password)
      .then(() => {
        toast.success("Login successfully");
        navigate("/");
      })
      .catch(() => {
        toast.error("Invalid Credential Email/Password");
      });
  };
  const handleToggleSignBtn = () => {
    setSignToggle(!signToggle);
  };
  const handleLoginGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google Login successfully");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google Login failed please try again");
      });
  };
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto py-10">
      <div className="w-full md:w-[400px]">
        <Lottie animationData={loginAnimation} loop autoplay />;
      </div>
      <div className="w-full lg:w-1/2">
        <div className="bg-gradient-to-r flex items-center justify-center ">
          <div className="bg-white p-8 max-w-lg w-full">
            <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
              Login to Your Account
            </h2>

            <form className="" onSubmit={handleLoginForm}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6 relative">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password<span className="text-red-600">*</span>
                </label>
                <input
                  type={signToggle ? "text" : "password"}
                  name="password"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute -top-1"
                  onClick={handleToggleSignBtn}
                >
                  {" "}
                  {signToggle ? (
                    <FaEyeSlash className="absolute right-2 top-12 text-xl" />
                  ) : (
                    <IoEyeSharp className="absolute right-2 top-12 text-xl" />
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-all"
              >
                Login
              </button>
            </form>
            <div className="divider text-gray-600 mt-4 text-sm">
              Or login with Google
            </div>

            <div className="text-center mt-4">
              <button
                onClick={handleLoginGoogle}
                className="flex items-center gap-2 justify-center mt-2 py-2 px-4 w-full rounded-full border-2 border-teal-500 text-teal-500 font-medium "
              >
                <FcGoogle className="text-2xl" /> Login with Google
              </button>
            </div>
            <p className="text-center text-sm mt-4 text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-teal-500 font-medium hover:underline"
              >
                Signup here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
