import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AvailableFoods from "./../Pages/AvailableFoods/AvailableFoods";
import Login from "../Pages/Login/Login";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "./../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "./../Pages/MyFoodRequest.jsx/MyFoodRequest";
import Signup from "../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import UpdateMyFoods from "../Pages/UpdateMyFoods/UpdateMyFoods";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoutes>
            <AddFood></AddFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoutes>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoutes>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoutes>
        ),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoutes>
            <DetailsPage></DetailsPage>,
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateFoods/:id",
        element: (
          <PrivateRoutes>
            <UpdateMyFoods></UpdateMyFoods>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
