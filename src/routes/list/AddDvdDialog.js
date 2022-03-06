import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { css } from "@emotion/react"

import { Filters } from "../../consts";

const styles = {
  formContainer: css`
    display: flex;
    flex-direction: column;
    padding: 50px;
  `,
  featured: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  formTitle: css`
    display: flex;
    justify-content: center;
    padding: 10px;
  `
};

export const AddDvdDialog = ({
  onClose,
  onSubmit,
  isOpen,
}) => {
  const [dvdName, setDvdName] = useState("");
  const [dvdCategory, setDvdCategory] = useState(Filters.comedy);
  const [dvdIsFeatured, setDvdIsFeatured] = useState(false);

  const saveName = (event) => {
    setDvdName(event?.target?.value);
  };

  const saveCategory = (event) => {
    setDvdCategory(event?.target?.value);
  };

  const saveIsFeatured = (event) => {
    setDvdIsFeatured(event?.target?.checked);
  };

  const submit = () => {
    const vals = {
      dvdName,
      dvdCategory,
      dvdIsFeatured,
    };

    onSubmit(vals);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Box sx={styles.formTitle}>
        <Typography variant="h6">Add DVD</Typography>
      </Box>

      <Box sx={styles.formContainer}>
        <InputLabel>DVD Name</InputLabel>
        <TextField variant="outlined" onChange={saveName} />

        <InputLabel>Category</InputLabel>
        <Select label="category" value={dvdCategory} onChange={saveCategory} variant="outlined">
          <MenuItem value={Filters.comedy}>Comedy</MenuItem>
          <MenuItem value={Filters.drama}>Drama</MenuItem>
          <MenuItem value={Filters.news}>News</MenuItem>
          <MenuItem value={Filters.reality}>Reality</MenuItem>
        </Select>

        <Box sx={styles.featured}>
          <InputLabel>Featured</InputLabel>
          <Checkbox onChange={saveIsFeatured} />
        </Box>

        <Button variant="contained" onClick={submit}>Add</Button> 
      </Box>
    </Dialog>
  );
};

AddDvdDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
