import React from "react";
import { PopularMenu, ReadMoreButton } from "../components";
import "../styles/menu.css";
import { Link } from "react-router-dom";
import { routePaths } from "../constants";

export const Menu = () => {
  return (
    <div id="menu" className="menu container bg-dark">
      <PopularMenu />
      <br />
      <ReadMoreButton link={routePaths.fullMenus} />
    </div>
  );
};
