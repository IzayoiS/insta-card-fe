import HomePage from "@/views/HomePages";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRouteLayout from "./ProtectedRouteLayout";
import Register from "@/views/Register";
import Login from "@/views/Login";
import MyProfile from "@/views/MyProfile";
import { PublicURL } from "@/views/PublicURL";

const router = createBrowserRouter([
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
    Component: Login,
  },
  {
    path: "/:username",
    Component: PublicURL,
  },
]);

export default router;
