import HomePage from "@/pages/HomePages";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRouteLayout from "./ProtectedRouteLayout";
import MyShop from "@/pages/MyShop";
import Register from "@/pages/Register";

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
]);

export default router;
