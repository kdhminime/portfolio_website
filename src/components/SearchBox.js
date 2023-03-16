import {
  TextField,
  Menu,
  MenuItem,
  Paper,
  MenuList,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import "../css/TopLinks.css";
import { useState } from "react";
import HistoryIcon from "@mui/icons-material/History";
import { alpha, styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e2e2e2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e2e2e2",
      borderWidth: "0.5pt",
    },
  },
});

let SearchBox = () => {
  const [open, setOpen] = useState(false);
  const [borderStyle, setBorderStyle] = useState("textFieldClose");

  const handleClick = () => {
    if (open) {
      setOpen(false);
      setBorderStyle("textFieldClose");
    } else {
      setOpen(true);
      setBorderStyle("textFieldOpen");
    }
  };

  let SearchHistory = () => {
    return (
      <Paper sx={{ width: "44%", borderRadius: "0pt" }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText>Netflix</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    );
  };

  return (
    <div className="searchBoxContainer">
      <CssTextField
        style={{ width: "44%" }}
        onFocus={handleClick}
        onBlur={handleClick}
        className={borderStyle}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {open ? <SearchHistory /> : null}
    </div>
  );
};

export default SearchBox;
