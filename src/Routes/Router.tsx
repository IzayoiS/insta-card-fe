import HomePage from "@/pages/HomePages";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRouteLayout from "./ProtectedRouteLayout";
import MyShop from "@/pages/MyShop";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

let router = createBrowserRouter([
  {
    Component: ProtectedRouteLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/myshop",
        Component: MyShop,
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
