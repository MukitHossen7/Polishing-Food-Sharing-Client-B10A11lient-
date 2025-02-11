import { useContext, useEffect } from "react";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    const title = {
      "/": "Home || FoodSharing",
      "/availableFoods": "Available_Foods || FoodSharing",
      "/addFood": "Add_Food || FoodSharing",
      "/manageMyFoods": "Manage_My_Foods || FoodSharing",
      "/myFoodRequest": "My_Food_Request || FoodSharing",
      "/login": "Login || FoodSharing",
      "/signup": "Signup || FoodSharing",
    };
    if (matchPath("/food/:id", location.pathname)) {
      title[location.pathname] = "Food_Details || FoodSharing";
    }
    if (matchPath("/updateFoods/:id", location.pathname)) {
      title[location.pathname] = "Update_Food || FoodSharing";
    }
    document.title = title[location.pathname] || "FoodSharing";
  }, [location]);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Log_out successfully");
    });
  };
  return (
    <div className="text-black pt-6">
      <div className="navbar w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-2 z-50 text-base "
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/availableFoods">Available Foods</NavLink>

              {user && (
                <div className="flex flex-col gap-2">
                  <NavLink to="/addFood">Add Food</NavLink>
                  <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
                  <NavLink to="/myFoodRequest">My Food Request</NavLink>
                </div>
              )}
            </ul>
          </div>
          <Link to="/" className="flex items-center space-x-1 lg:space-x-2">
            <span className="text-base lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400">
              FoodSharing
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-base">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/availableFoods">Available Foods</NavLink>

            {user && (
              <div className="flex items-center gap-8">
                <NavLink to="/addFood">Add Food</NavLink>
                <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
                <NavLink to="/myFoodRequest">My Food Request</NavLink>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-end gap-1 lg:gap-2 items-center">
          <div>
            <div className="flex items-center gap-1 lg:gap-4"></div>

            <div className="flex items-center gap-1 lg:gap-4">
              {user?.email ? (
                <div className="flex items-center gap-1 lg:gap-4">
                  <div className="tooltip" data-tip={`${user?.displayName}`}>
                    <img
                      className="w-7 lg:w-10 h-7 lg:h-10 object-cover rounded-full"
                      src={user?.photoURL}
                    ></img>
                  </div>
                  <button onClick={handleLogOut}>
                    <Link className="py-2 px-2 lg:px-5 text-white text-sm lg:text-lg rounded-lg bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:from-teal-500 hover:via-teal-400 hover:to-teal-600 transition">
                      LogOut
                    </Link>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1 lg:gap-4">
                  <Link
                    to="/login"
                    className="py-2 px-2 lg:px-5 text-white text-sm lg:text-lg rounded-lg bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:from-teal-500 hover:via-teal-400 hover:to-teal-600 transition"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    className="py-2 px-2 lg:px-5 text-white text-sm lg:text-lg  rounded-lg bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:from-teal-500 hover:via-teal-400 hover:to-teal-600 transition"
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
