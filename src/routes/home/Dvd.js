import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@mui/material";
import { css } from "@emotion/react"

const styles = {
  dvd: css`
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-bottom: 15px;
  `,
  dvdImage: css`
    height: 15rem;
    width: 10rem;
    &:hover {
      cursor: pointer;
    }
  `
}

export const Dvd = ({
  id,
  name,
  image: imageSrc,
}) => {
  if (!name || !imageSrc) return null;

  const uid = `${name}-${id}`;

  return (
    <Box key={`${uid}`} sx={styles.dvd}>
      <Box>
        <Avatar alt={`${name} poster`} src={imageSrc} variant="square" sx={styles.dvdImage} />
      </Box>
      <Box>
        <Typography>{name}</Typography>
      </Box>
    </Box>
  );
};

Dvd.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
};
