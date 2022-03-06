import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import { css } from "@emotion/react"

import { FilterForm } from "./FilterForm";
import { List } from "./List";
import { Filters, SortType } from "../../consts";

const styles = {
  formContainer: css`
    display: flex;
    justify-content: center;
  `
};

export const ListPage = () => {
  const [filter, setFilter] = useState(Filters.all);
  const [sortBy, setSortBy] = useState(SortType.alphabetically);

  const handleFilterOnChange = (event, value) => {
    setFilter(value);
  };

  const handleSortOnChange = (event, value) => {
    setSortBy(value);
  }

  return (
    <Box>
      <Box sx={styles.formContainer}>
        <FilterForm
          handleFilterOnChange={handleFilterOnChange}
          handleSortOnChange={handleSortOnChange}
        />
      </Box>
      <Divider />
      <List filter={filter} sortBy={sortBy}/>
    </Box>
  );
};
