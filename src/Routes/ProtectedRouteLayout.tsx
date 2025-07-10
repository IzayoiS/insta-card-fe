import Layout from "@/layout/Layout";
import { Navigate, Outlet } from "react-router-dom";

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
