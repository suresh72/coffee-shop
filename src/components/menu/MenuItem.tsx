import React from "react";
import "../../styles/menuitem.css";
import { Menu } from "../../types";

interface MenuItemProps {
  menu: Menu;
}
export const MenuItem = ({ menu }: MenuItemProps) => {
  const { ItemName, Description, Price, image } = menu;

  const imgStr = image
    .split("/")
    [image.split("/").length - 1].replace(".png", "");
  const imgSrc =
    imgStr === "NULL"
      ? `/assets/m4.png`
      : `/assets/${image.replaceAll("./", "")}`;

  return (
    <div className="menuitem flex">
      <div className="menuitem__image">
        <img src={imgSrc} alt="menu" />
      </div>
      <div className="menuitem__details">
        <h4 className="menuitem__title">{ItemName}</h4>
        <p className="menuitem__sub-title">{Description}</p>
      </div>
      <div className="menuitem__prices flex">
        <span className="menuitem__selling-price">${Price}</span>
        {/* <span className="menuitem__total-price">$20.0</span> */}
      </div>
    </div>
  );
};
