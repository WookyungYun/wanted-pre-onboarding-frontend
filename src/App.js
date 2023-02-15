import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NonLoginRoute from "./components/route/NonLoginRoute";
import PrivateRoute from "./components/route/PrivateRoute";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";

function App() {
  const [access, setAccess] = useState("");
  const route = useLocation();

  useEffect(() => {
    setAccess(localStorage.getItem("token"));
  }, [route.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/signup"
        element={<PrivateRoute authenticated={access} component={<SignUp />} />}
      />
      <Route
        path="/signin"
        element={<PrivateRoute authenticated={access} component={<SignIn />} />}
      />
      <Route
        path="/todo"
        element={<NonLoginRoute authenticated={access} component={<Todo />} />}
      />
    </Routes>
  );
}
export default App;
