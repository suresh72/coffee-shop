import React, { Fragment, useCallback, useEffect, useState } from "react";
import "../../styles/fullmenus.css";
import { MenuItem } from "./MenuItem";
import { MenuTimeTable } from "./MenuTimeTable";
import menusData from "../../dev-data/menu_2024.json";
import { Menu } from "../../types";

export const FullMenus = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [menus, setMenus] = useState<Menu[]>([]);
  const [tabIdx, setTabIdx] = useState<number>(0);

  const handleTabChange = (idx: number) => {
    setTabIdx(idx);
  };

  const getCategories = useCallback(() => {
    const ctgs = new Set<string>();
    menusData.forEach((m) => {
      ctgs.add(m.Category);
    });
    setCategories(Array.from(ctgs));
  }, []);

  const updateMenus = useCallback(() => {
    const ctg = categories[tabIdx];
    const menuList = menusData.filter((m) => m.Category === ctg);
    setMenus(menuList);
  }, [tabIdx, categories]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {
    updateMenus();
  }, [updateMenus]);

  return (
    <div className="fullmenus container bg-dark">
      <div className="fullmenus__heading">Full Menus</div>
      {/* <h2 className="fullmenus__title">Full Menu</h2> */}
      <p className="fullmenus__description">
        Our place designed by pro architecture with psychologist to build best
        place suit you. Our place designed by pro architecture with psychologist
        to build best place suit you.
      </p>

      <div className="fullmenus__content">
        <div className="fullmenus__categories flex">
          {categories.map((ctg: string, idx: number) => {
            return (
              <div
                className={`fullmenus__categories--tab ${
                  tabIdx === idx ? " active" : ""
                }`}
                onClick={() => handleTabChange(idx)}
              >
                {ctg}
              </div>
            );
          })}
        </div>

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
    </div>
  );
};
