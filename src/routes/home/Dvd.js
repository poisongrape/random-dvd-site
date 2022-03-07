import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";
import BlockIcon from '@mui/icons-material/Block';
import { css } from "@emotion/react"
import { Path } from "../../consts";

export const Dvd = ({
  id,
  name,
  image: imageSrc,
  disabled,
}) => {
  const navigate = useNavigate();
  const uid = `${name}-${id}`;
  const styles = {
    dvd: css`
      display: flex;
      flex-direction: column; 
      align-items: center;
      padding: 30px;
      margin-bottom: 15px;
      margin-left: auto;
      margin-right: auto;
      transition: all .2s ease-in-out;
      ${!disabled ? `&:hover {
        transform: scale(1.1);
      }` : ""}
    `,
    dvdImage: css`
      height: 18rem;
      width: 13rem;
      ${!disabled ? `&:hover {
        cursor: pointer;
      }` : ""}
    `
  }

  const handleOnClick = () => {
    if (!disabled) {
      navigate(`${Path.details}/${id}`);
    }
  }

  if (!name) return null;

  return (
    <Box key={`${uid}`} sx={styles.dvd}>
      <Box id="poster-container" onClick={handleOnClick}>
        {
          imageSrc ? 
          (
            <Avatar alt={`${name} poster`} src={imageSrc} variant="square" sx={styles.dvdImage} />
          ) :
          (
            <Avatar alt={`${name} poster`} src={imageSrc} variant="square" sx={styles.dvdImage}>
              <BlockIcon />
              <Typography>Image not available</Typography>
            </Avatar>
          )
        }
      </Box>
      <Box>
        <Typography variant="h4">{name}</Typography>
      </Box>
    </Box>
  );
};

Dvd.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  disabled: PropTypes.bool,
};

Dvd.defaultProps = {
  disabled: false,
  image: "",
};
