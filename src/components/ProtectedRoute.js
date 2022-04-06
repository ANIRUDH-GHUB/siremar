import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ userRole, children }) => {
  const role = localStorage.getItem("user_role");
  if (role && Object.values(userRole).includes(role)) {
    return children;
  }

  return <Navigate to="/login" replace />;
};
export default ProtectedRoute;
