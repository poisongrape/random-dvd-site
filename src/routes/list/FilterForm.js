import React from "react";
import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import { css } from "@emotion/react"

const styles = {
  formContainer: css`
    display: flex;
    justify-content: space-evenly;
  `,
  radioGroup: css`
    padding: 20px;
  `
}

export const FilterForm = () => {
  return (
    <Box sx={styles.formContainer}>
      <Box sx={styles.radioGroup}>
        <FormLabel>Filter</FormLabel>
        <RadioGroup defaultValue="all" name="filter-buttons-group">
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="category" control={<Radio />} label="Category" />
        </RadioGroup>
      </Box>

      <Box sx={styles.radioGroup}>
        <FormLabel>Sort</FormLabel>
        <RadioGroup defaultValue="alphabetically" name="sort-buttons-group">
          <FormControlLabel value="alphabetically" control={<Radio />} label="Alphabetically" />
          <FormControlLabel value="category" control={<Radio />} label="Category" />
        </RadioGroup>
      </Box>
    </Box>
  );
};
