import React, { useState } from "react";
import { Box } from "@mui/material";
import { FilterForm } from "./FilterForm";
import { List } from "./List";
import { Filters, SortType } from "../../consts";

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
      <FilterForm
        handleFilterOnChange={handleFilterOnChange}
        handleSortOnChange={handleSortOnChange}
      />
      <List filter={filter} sortBy={sortBy}/>
    </Box>
  );
};
