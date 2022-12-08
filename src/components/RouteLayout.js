import React from "react";
import { Route, Routes, Routs } from "react-router-dom";
import AppLayouts from "./AppLayouts";
import Topmenu from "./Topmenu";
import Home from "./Home";
import LoginPage from "./LoginPage"
import SignupPage from "./SignupPage"
const RouteLayout = () => {
  return (
    <Routes>
      <Route element={<AppLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/topmenu" element={<Topmenu />} />
        <Route path="/loginpage" element={<LoginPage/>} />
        <Route path="/signpage" element={<SignupPage/>} />


      </Route>
    </Routes>
  );
};

export default RouteLayout;
