import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { css } from "@emotion/react"
import { Filters, SortType } from "../../consts";

import data from "../../data/dvd-data.json";
import {
  filterListByCategory,
  sortListAlphabetically,
  sortListByCategory,
 } from "./utils";

const styles = {
  listItem: css`
    padding: 3rem;
  `
};

export const List = ({
  filter,
  sortBy,
}) => {
  const { items } = data;
  let updatedItems = [...items];

  if (filter !== Filters.all) {
    updatedItems = filterListByCategory(updatedItems, filter);
  }

  if (sortBy === SortType.alphabetically) {
    updatedItems = sortListAlphabetically(updatedItems);
  } else {
    updatedItems = sortListByCategory(updatedItems);
  }

  const listItems = updatedItems.map((item) => {
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

List.propTypes = {
  filter: PropTypes.string,
  sortBy: PropTypes.string,
};

List.defaultProps = {
  filter: "",
  sortBy: "",
}
