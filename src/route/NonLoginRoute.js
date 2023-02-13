import { Navigate } from "react-router-dom";

function NonLoginRoute({ component: Component }) {
  const access = localStorage.getItem("token");
  return access ? Component : <Navigate to="/signin" />;
}
export default NonLoginRoute;
