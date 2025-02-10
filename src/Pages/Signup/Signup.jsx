import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Signup = () => {
  const [signToggle, setSignToggle] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const {
    createSignUpNewUsers,
    updateUserProfile,
    setRefetch,
    signInWithGoogle,
    user,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const minLength = /.{6,}/;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;

  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  const handleSignUpFrom = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const password = e.target.password.value;
    setPasswordError("");
    const validatePassword = (password) => {
      if (!minLength.test(password)) {
        return "Password should be at least 6 characters long";
      }
      if (!hasUpperCase.test(password)) {
        return "Uppercase letter include must to the password";
      }
      if (!hasLowerCase.test(password)) {
        return "Lowercase letter include must to the password";
      }
      return "";
    };
    const errorMessage = validatePassword(password);
    if (errorMessage) {
      setPasswordError(errorMessage);
      return;
    }
    createSignUpNewUsers(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Signup Successfully");
        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setRefetch(Date.now());
        });
      })
      .catch(() => {
        toast.error("Email already in use");
      });
  };
  const handleToggleSignBtn = () => {
    setSignToggle(!signToggle);
  };
  const handleSignUpGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google Signup successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google Signup failed please try again");
      });
  };
  return (
    <div>
      <div className="py-20 bg-gradient-to-r flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
          <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
            Create an Account
          </h2>

          <form className="" onSubmit={handleSignUpFrom}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Photo URL
              </label>
              <input
                type="url"
                name="photoURL"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter photo URL"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type={signToggle ? "text" : "password"}
                name="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
            <span
              className={`font-bold text-xs text-red-500  ${
                passwordError ? "" : "hidden"
              }`}
            >
              {passwordError}
            </span>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 mt-6 rounded-lg hover:bg-teal-600 transition-all"
            >
              signup
            </button>
          </form>
          <div className="divider text-gray-600 mt-4">
            Or Signup with Google
          </div>

          <div className="text-center mt-4">
            <button
              onClick={handleSignUpGoogle}
              className="flex items-center gap-2 justify-center mt-2 py-2 px-4 w-full rounded-lg border-2 border-teal-500 text-teal-500 font-medium hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-700 hover:text-white transition-all"
            >
              <FcGoogle className="text-2xl" /> Signup with Google
            </button>
          </div>
          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-teal-500 font-medium hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
