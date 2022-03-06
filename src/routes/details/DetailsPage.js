import React from "react";
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { css } from "@emotion/react"

import { Dvd } from "../home/Dvd";

const styles = {
  dvdContainer: css`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `
}
export const DetailsPage = () => {
  const params = useParams();
  const items = useSelector((state) => state);

  const { dvdId } = params;
  let dvdIdNum = parseInt(dvdId, 10);
  const dvdData = items.find(item => item.id === dvdIdNum);

  if (!dvdData) {
    return <Typography variant="h1">Could not find DVD</Typography>;
  }

  return (
    <section>
      <Box sx={styles.dvdContainer}>
        <Dvd id={dvdData.id} name={dvdData.name} image={dvdData.image} disabled/>
      </Box>
    </section>
  )
};
