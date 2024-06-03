import React from "react";
import { PopularMenu } from "../components";
import "../styles/menu.css";
import { Link } from "react-router-dom";
import { routePaths } from "../constants";

export const Menu = () => {
  return (
    <div className="menu container bg-dark">
      <PopularMenu />
      <br />
      <div className="flex">
        <Link to={routePaths.fullMenus} className="menu__btn-readmore button">
          Read More
        </Link>
      </div>
    </div>
  );
};
