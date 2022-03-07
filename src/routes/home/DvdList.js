import React from "react";
import { useSelector } from 'react-redux'
import { Box } from "@mui/material";
import { css } from "@emotion/react"

import { Dvd } from "./Dvd";

const styles = {
  dvdList: css`
    display: flex;
    flex-direction: column;
  `
}

export const DvdList = () => {
  const items = useSelector((state) => state);

  const dvds = items?.filter((item) => {
    return item.featured === true;
  })
  .map((item) => {
    const { id, name, image } = item;

    return (
      <Box key={id}>
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
