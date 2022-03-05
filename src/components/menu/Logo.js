import React from "react";
import { Box, Typography } from "@mui/material";
import CameraIcon from '@mui/icons-material/Camera';
import { css } from "@emotion/react"

const styles = {
  logoContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 5rem;
  `
}

export const Logo = () => {
  return (
    <Box sx={styles.logoContainer}>
      <Box>
        <Typography>Let's Watch!</Typography>
      </Box>
      <Box>
        <CameraIcon />
      </Box>
    </Box>
  );
};
