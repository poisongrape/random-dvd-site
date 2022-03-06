import React from "react";
import { Box, Typography } from "@mui/material";
import { css } from "@emotion/react"

import data from "../../data/dvd-data.json";

const styles = {
  listItem: css`
    padding: 3rem;
  `
};

export const List = () => {
  const { items } = data;

  const listItems = items.map((item) => {
    return (
      <Box sx={styles.listItem}>
        <Typography>{item.name}</Typography>
      </Box>
    );
  });

  return (
    <Box>
      {listItems}
    </Box>
  );
};
