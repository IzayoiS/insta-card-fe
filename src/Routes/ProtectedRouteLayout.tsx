import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "@/layout/Layout";
import Cookies from "js-cookie";

function ProtectedRouteLayout() {
  const token = localStorage.getItem("token");

  if (token) {
    return (
      <main>
        <Layout>
          <Outlet />
        </Layout>
      </main>
    );
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default ProtectedRouteLayout;
