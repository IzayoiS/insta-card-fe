import HomePage from "@/pages/HomePages";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRouteLayout from "./ProtectedRouteLayout";
import MyShop from "@/pages/MyShop";

let router = createBrowserRouter([{
    Component: ProtectedRouteLayout,
    children: [
        {
            path: "/",
            Component: HomePage
        },
        {
            path: "/myshop",
            Component: MyShop
        }
    ],
    
},
      {
        path: "/login",
        Component: Login
    }
]);

export default router