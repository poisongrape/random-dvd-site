import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { css } from "@emotion/react"
import { Tabs, Tab } from "@mui/material";
import { Path } from "../consts";


const styles = {
  drawer: css`
    display: { xs: block, sm: none },
    & .MuiDrawer-paper': { boxSizing: border-box, width: 240 }
  `
}

const tabs = [
  {
    label: "Home",
    id: "menu-item-home",
    route: Path.home,
  },
  {
    label: "List",
    id: "menu-item-list",
    route: Path.list,
  },
];

export const MenuBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  /**
   * @param {object} event
   * @param {string} value - Tab's route.
   */
  const handleOnChange = (event, value) => {
    navigate(value);
  }

  const currTab = tabs.find(tab => pathname === tab.route);

  return (
    <>
      <Tabs onChange={handleOnChange} value={currTab?.route ?? false}>
        {tabs.map((tab) => {
          return (
            <Tab key={tab.id} id={tab.id} label={tab.label} value={tab.route} />
          );
        })}
      </Tabs>
    </>
  );
};
