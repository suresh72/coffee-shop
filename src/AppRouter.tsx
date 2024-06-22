import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePaths } from "./constants";
import { AboutUs, AboutUsInDetail, Menu } from "./containers";
import { FullMenus, Home } from "./containers";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routePaths.root} element={<Home />} />
        <Route path={routePaths.root} element={<Menu />} />
        <Route path={routePaths.fullMenus} element={<FullMenus />} />
        <Route path={routePaths.aboutUs} element={<AboutUs />} />
        <Route path={routePaths.about} element={<AboutUsInDetail />} />
      </Routes>
    </Router>
  );
};
