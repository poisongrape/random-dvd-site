import React from "react";
import { Box, Divider } from "@mui/material";
import { css } from "@emotion/react"

import { Menu } from "./Menu";
import { Logo } from "./Logo";

const styles = {
  menuBar: css`
    display: flex;
    margin: -5rem -5rem 6rem -5rem;
    padding: 5rem 5rem 10px 5rem;
    background-color: #3A3341;
    color: #EFEEF1;
  `
}

export const MenuBar = () => {
  return (
    <Box sx={styles.menuBar}>
      <Logo />
      <Divider orientation="vertical" flexItem sx={styles.divider} />
      <Menu />
    </Box>
  );
};
