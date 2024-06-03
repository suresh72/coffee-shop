import React from "react";
import { FullMenus, PopularMenu } from "../components";
import "../styles/menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <PopularMenu />
      <br />
      <br />
      <br />
      <FullMenus />
    </div>
  );
};
