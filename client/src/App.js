import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingIn from "./Components/SingIn";
import SingUp from "./Components/SingUp";
import Layout from "./Pages/Layout";
import Dashboard from "./Components/Dashboard";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Singin" element={<SingIn />} />
        <Route path="Singup" element={<SingUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
