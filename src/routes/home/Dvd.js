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
    margin-left: auto;
    margin-right: auto;
    transition: all .2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  `,
  dvdImage: css`
    height: 20rem;
    width: 15rem;
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
        <Typography variant="h4">{name}</Typography>
      </Box>
    </Box>
  );
};

Dvd.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
};
