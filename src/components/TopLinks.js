import React, { useState } from "react";
import { Link, Avatar, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../css/TopLinks.css";
import AppsIcon from "@mui/icons-material/Apps";
import { IconButton } from "@mui/material";
import { green } from "@mui/material/colors";

const dark_grey = "#696969";

function TopLinks() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  let handleClick = () => {
    setCount(count + 1);
    if (count === 5) {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="#FFC0CB"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="linkContainer">
      <Link
        href="https://mail.google.com/mail/u/0/?fs=1&to=kdhminime@gmail.com&tf=cm"
        underline="hover"
        color={dark_grey}
        style={{ marginTop: 17 }}
      >
        Email
      </Link>
      <Link
        href="https://github.com/kdhminime"
        underline="hover"
        color={dark_grey}
        style={{ marginTop: 17 }}
      >
        GitHub
      </Link>
      <IconButton aria-label="delete" style={{ marginLeft: -5 }}>
        <AppsIcon />
      </IconButton>
      <IconButton
        style={{ marginTop: 0, marginRight: 10, marginLeft: -8 }}
        onClick={handleClick}
      >
        <Avatar
          sx={{ bgcolor: green[500], width: 32, height: 32 }}
          src={require("../images/profile.png")}
        />
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="경은이 사랑해~!"
        action={action}
      />
    </div>
  );
}

export default TopLinks;
