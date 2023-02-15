import { Navigate } from "react-router-dom";

function PrivateRoute({ authenticated, component: Component }) {
  return authenticated ? <Navigate to="/todo" /> : Component;
}

export default PrivateRoute;
