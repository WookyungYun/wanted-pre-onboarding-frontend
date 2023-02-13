import { Navigate } from "react-router-dom";

function NonLoginRoute({ authenticated, component: Component }) {
  return authenticated ? Component : <Navigate to="/signin" />;
}
export default NonLoginRoute;
