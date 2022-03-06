import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Divider,
  Link,
  Checkbox,
  Dialog,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { css } from "@emotion/react"
import { useSearchParams } from "react-router-dom";

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
    display: flex;
    justify-content: space-between;
  `,
  addLink: css`
    display: flex;
    justify-content: center;
  `
};

export const List = ({
  filter,
  sortBy,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchParams] = useSearchParams();
  const adminParam = searchParams.get("admin");
  const isAdmin = adminParam?.toLowerCase() === "true";

  const { items } = data;
  let updatedItems = [...items];

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
      <>
        <Box sx={styles.listItem}>
          <Box>
            <Typography>{item.name}</Typography>
          </Box>
          {
            isAdmin &&
            <Box>
              <Button variant="contained">Delete</Button>
            </Box>
          }
        </Box>
        <Divider />
      </>
    );
  });

  return (
    <>
      <Box>
        {
          isAdmin &&
          <Box sx={styles.addLink}>
            <Link
              component="button"
              onClick={handleOpen}
              variant="h5"
            >
              Add DVD
            </Link>
          </Box>
        }
        {listItems}
      </Box>

      <Dialog open={isOpen} onClose={handleClose}>
        <Box>
          <TextField label="name" variant="outlined" />
          <Select label="category" variant="outlined">
            <MenuItem value={Filters.comedy}>Comedy</MenuItem>
            <MenuItem value={Filters.drama}>Drama</MenuItem>
            <MenuItem value={Filters.news}>News</MenuItem>
            <MenuItem value={Filters.reality}>Reality</MenuItem>
          </Select>
          <Checkbox label="featured" />
        </Box>
      </Dialog>
    </>
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
