import React from "react";
import { Box } from "@mui/material";
import { css } from "@emotion/react"

import { Menu } from "./Menu";
import { Logo } from "./Logo";

const styles = {
  menuBar: css`
    display: flex;
  `
}

export const MenuBar = () => {
  return (
    <Box sx={styles.menuBar}>
      <Logo />
      <Menu />
    </Box>
  );
};
