import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { css } from "@emotion/react"
import { useSearchParams } from "react-router-dom";

import { Filters, SortType } from "../../consts";
import {
  filterListByCategory,
  sortListAlphabetically,
  sortListByCategory,
} from "./utils";
import { AddDvdDialog } from "./AddDvdDialog";
import { addDvd, deleteDvd } from "../../actions/actions";

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

  const items = useSelector((state) => state);
  let updatedItems = [...items];

  const dispatch = useDispatch();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleSubmit = (vals) => {
    dispatch(addDvd(vals))
    setIsOpen(false);
  };
  const handleDelete = (id) => {
    dispatch(deleteDvd(id));
  }

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
      <Box key={item.id}>
        <Box sx={styles.listItem}>
          <Box>
            <Typography>{item.name}</Typography>
          </Box>

          {
            isAdmin &&
            <Box>
              <Button
                onClick={() => { handleDelete(item.id) }}
                variant="contained"
              >
                Delete
              </Button>
            </Box>
          }

        </Box>
        <Divider />
      </Box>
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

      <AddDvdDialog onClose={handleClose} onSubmit={handleSubmit} isOpen={isOpen} />
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
