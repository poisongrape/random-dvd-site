import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Tabs, Tab } from "@mui/material";
import { css } from "@emotion/react"

import { Path } from "../../consts";

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

const styles = {
  menuContainer: css`
    margin-left: 3rem;
  `,
  tab: css`
    color: #EFEEF1
  `
}

export const Menu = () => {
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
    <Box sx={styles.menuContainer}>
      <Tabs
        onChange={handleOnChange}
        value={currTab?.route ?? false}
      >
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.id}
              id={tab.id}
              label={tab.label}
              value={tab.route}
              sx={styles.tab}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};
