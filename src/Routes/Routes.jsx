import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AvailableFoods from "./../Pages/AvailableFoods/AvailableFoods";
import Login from "../Pages/Login/Login";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "./../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "./../Pages/MyFoodRequest.jsx/MyFoodRequest";
import Signup from "../Pages/Signup/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
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
        element: <AddFood></AddFood>,
      },
      {
        path: "/manageMyFoods",
        element: <ManageMyFoods></ManageMyFoods>,
      },
      {
        path: "/myFoodRequest",
        element: <MyFoodRequest></MyFoodRequest>,
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
