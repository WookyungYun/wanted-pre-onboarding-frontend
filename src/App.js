import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/page/Home";
import NonLoginRoute from "./route/NonLoginRoute";
import PrivateRoute from "./route/PrivateRoute";
import SignIn from "./components/page/SignIn";
import SignUp from "./components/page/SignUp";
import Todo from "./components/page/Todo";

function App() {
  const access = localStorage.getItem("token");

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
      <Route path="/todo" element={<NonLoginRoute component={<Todo />} />} />
    </Routes>
  );
}
export default App;
