import React from "react";
import { Box } from "@mui/material";
import { css } from "@emotion/react"
import data from "../../data/dvd-data.json";

import { Dvd } from "./Dvd";

const styles = {
  dvdList: css`
    display: flex;
    flex-direction: column;
  `
}

export const DvdList = () => {
  const { items } = data;
  const dvds = items?.map((item) => {
    const { id, name, image } = item;

    return (
      <Box>
        <Dvd id={id} name={name} image={image} />
      </Box>
    );
  });

  return (
    <Box sx={styles.dvdList}>
      {dvds}
    </Box>
  );
};
