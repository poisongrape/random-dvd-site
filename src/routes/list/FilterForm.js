import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import { css } from "@emotion/react"
import { Filters, SortType } from "../../consts";

const styles = {
  formContainer: css`
    display: flex;
    justify-content: space-evenly;
  `,
  radioGroup: css`
    padding: 20px;
  `
}

export const FilterForm = ({
  handleFilterOnChange,
  handleSortOnChange,
}) => {
  return (
    <Box sx={styles.formContainer}>
      <Box sx={styles.radioGroup}>
        <FormLabel>Filter</FormLabel>
        <RadioGroup defaultValue={Filters.all} name="filter-buttons-group" onChange={handleFilterOnChange}>
          <FormControlLabel value={Filters.all} control={<Radio />} label="All" />
          <FormControlLabel value={Filters.comedy} control={<Radio />} label="Comedy" />
          <FormControlLabel value={Filters.drama} control={<Radio />} label="Drama" />
          <FormControlLabel value={Filters.news} control={<Radio />} label="News" />
          <FormControlLabel value={Filters.reality} control={<Radio />} label="Reality" />
        </RadioGroup>
      </Box>

      <Box sx={styles.radioGroup}>
        <FormLabel>Sort</FormLabel>
        <RadioGroup defaultValue={SortType.alphabetically} name="sort-buttons-group" onChange={handleSortOnChange}>
          <FormControlLabel value="alphabetically" control={<Radio />} label="Alphabetically" />
          <FormControlLabel value="category" control={<Radio />} label="Category" />
        </RadioGroup>
      </Box>
    </Box>
  );
};

FilterForm.propTypes = {
  handleFilterOnChange: PropTypes.func.isRequired,
  handleSortOnChange: PropTypes.func.isRequired,
};
