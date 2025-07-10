import HomePage from "@/pages/HomePages";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRouteLayout from "./ProtectedRouteLayout";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import MyProfile from "@/pages/MyProfile";

let router = createBrowserRouter([
  {
    Component: ProtectedRouteLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/myprofile",
        Component: MyProfile,
      },
    ],
  },
  {
    path: "/register",
    Component: Register,
    },
    {
        path: "/login",
        Component: Login
  }
]);

export default router;
