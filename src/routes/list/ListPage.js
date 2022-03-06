import React from "react";
import { Box } from "@mui/material";
import { FilterForm } from "./FilterForm";
import { List } from "./List";

export const ListPage = () => {
  return (
    <Box>
      <FilterForm />
      <List />
    </Box>
  );
};
