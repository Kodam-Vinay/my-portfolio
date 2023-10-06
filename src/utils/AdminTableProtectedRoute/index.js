import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const AdminTableProtectedRoute = ({ children }) => {
  const jwtToken = Cookies.get("loginWebToken");
  return jwtToken !== undefined ? children : <Navigate to="/admin-auth" />;
};
export default AdminTableProtectedRoute;
