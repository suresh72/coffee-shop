import React, { Fragment, useCallback, useEffect, useState } from "react";
import "../styles/fullmenus.css";
import { MenuItem } from "../components/menu/MenuItem";
import menusData from "../dev-data/menu_2024.json";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, CardContent } from "@mui/material";

export const FullMenus = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const getCategories = useCallback(() => {
    const ctgs = new Set<string>();
    menusData.forEach((m) => {
      ctgs.add(m.Category);
    });
    setCategories(Array.from(ctgs));
  }, []);

  const getMenusByCategory = (category: string) => {
    return menusData.filter((m) => m.Category === category);
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div className="fullmenus container bg-dark">
      <div className="fullmenus__heading">Full Menus</div>
      <p className="fullmenus__description">
        Our place designed by pro architecture with psychologist to build best
        place suit you. Our place designed by pro architecture with psychologist
        to build best place suit you.
      </p>

      <div className="fullmenus__content">
        {categories.map((ctg: string, idx: number) => {
          return (
            <Accordion key={ctg} style={{background: 'none', border: '1px solid #fff'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={ctg}
                id={ctg}
                style={{ background: "#fff" }}
              >
                {ctg}
              </AccordionSummary>
              <AccordionDetails>
                <div className="menuitem__list">
                  <div className="menuitems">
                    {getMenusByCategory(ctg).map((menu, idx) => {
                      return (
                        <Fragment key={idx}>
                          <Card style={{ padding: 0 }}>
                            <CardContent style={{ padding: 0 }}>
                              <MenuItem menu={menu} />
                            </CardContent>
                          </Card>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};
