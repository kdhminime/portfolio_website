import {
  TextField,
  MenuItem,
  Paper,
  MenuList,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import "../css/TopLinks.css";
import { useState } from "react";
import HistoryIcon from "@mui/icons-material/History";
import { styled } from "@mui/material/styles";

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
      <Paper
        sx={{
          width: "44%",
          borderBottomLeftRadius: "30pt",
          borderBottomRightRadius: "30pt",
        }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText>Resume</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText>Skills</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText>Work Experiences</ListItemText>
          </MenuItem>
        </MenuList>
        <div className="searchBoxButton">
          <Button
            variant="contained"
            style={{
              marginRight: 20,
              backgroundColor: "#eeeeee",
              color: "#424242",
              textTransform: "none",
            }}
          >
            Searching Job
          </Button>
          <Button
            variant="contained"
            style={{
              marginLeft: 20,
              backgroundColor: "#eeeeee",
              color: "#424242",
              textTransform: "none",
            }}
          >
            I'm Feeling Lucky
          </Button>
        </div>
      </Paper>
    );
  };

  return (
    <>
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
      {open ? null : (
        <div className="searchBoxButton">
          <Button
            variant="contained"
            style={{
              marginRight: 20,
              backgroundColor: "#eeeeee",
              color: "#424242",
              textTransform: "none",
              width: "130px",
            }}
          >
            Searching Job
          </Button>
          <Button
            variant="contained"
            style={{
              marginLeft: 20,
              backgroundColor: "#eeeeee",
              color: "#424242",
              textTransform: "none",
              width: "150px",
            }}
          >
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </>
  );
};

export default SearchBox;
