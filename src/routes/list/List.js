import React from "react";
import { Box, Typography } from "@mui/material";
import { css } from "@emotion/react"

import data from "../../data/dvd-data.json";

const styles = {
  listItem: css`
    padding: 3rem;
  `
};

/**
 * Filter dvd items by category.
 * @todo Move to util file.
 * @param {object[]} list - Array of dvd items.
 * @param {string} category - Category to filter on.
 * @returns {object[]} Array of filtered dvd items.
 */
const filterListByCategory = (list, category) => {
  let filteredList = [...list];

  filteredList = filteredList.filter(item => item.category.toLowerCase() === category.toLowerCase());

  return filteredList;
}

/**
 * Sort dvd items alphabetically.
 * @todo Move to util file.
 * @param {object[]} list - Array of dvd items.
 * @returns {object[]} Array of sorted dvd items.
 */
const sortListAlphabetically = (list) => {
  let sortedList = [...list];

  sortedList = sortedList.sort((a, b) => {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  });

  return sortedList;
}

/**
 * Sort dvd items by category first, then by name.
 * @todo Move to util file.
 * @param {object[]} list - Array of dvd items.
 * @returns {object[]} Array of sorted dvd items.
 */
const sortListByCategory = (list) => {
  let sortedList = [...list];

  sortedList = sortListAlphabetically(sortedList);
  sortedList = sortedList.sort((a, b) => {
    if (a.category < b.category) { return -1; }
    if (a.category > b.category) { return 1; }
    return 0;
  });

  return sortedList;
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
