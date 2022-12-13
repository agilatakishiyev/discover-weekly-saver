import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const code = sessionStorage.getItem("code");

  if (!code) return <Navigate to="/login" />;

  return <Outlet />;
};

export default ProtectedRoute;
