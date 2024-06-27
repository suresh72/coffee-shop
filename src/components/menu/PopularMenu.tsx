import React, { Fragment, useCallback, useEffect, useState } from "react";
import "../../styles/popularmenu.css";
import { MenuItem } from "./MenuItem";
import { Menu } from "../../types";
import menusData from "../../dev-data/menu_2024.json";

export const PopularMenu = () => {
  const [menus, setMenus] = useState<Menu[]>([]);

  const fetchMenus = useCallback(() => {
    //fetch menus
    setMenus(menusData.splice(0, 5));
  }, []);

  useEffect(() => {
    fetchMenus();
  }, [fetchMenus]);

  return (
    <div className="popularmenu">
      <div className="popularmenu__heading">Our Menu</div>
      <h2 className="popularmenu__title">Our Popular Menu</h2>
      <p className="popularmenu__description">
        Our place designed by pro architecture with psychologist to build best
        place suit you. Our place designed by pro architecture with psychologist
        to build best place suit you.
      </p>

      <div className="menuitem__list">
        <div className="menuitems">
          {menus.map((menu, idx) => {
            return (
              <Fragment key={idx}>
                <MenuItem menu={menu} />
              </Fragment>
            );
          })}
        </div>
        {/* <MenuTimeTable /> */}
      </div>
    </div>
  );
};
