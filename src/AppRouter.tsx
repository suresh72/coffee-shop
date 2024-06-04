import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePaths } from "./constants";
import { Menu } from "./containers";
import { FullMenus } from "./containers";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routePaths.root} element={<Menu />} />
        <Route path={routePaths.fullMenus} element={<FullMenus />} />
      </Routes>
    </Router>
  );
};
