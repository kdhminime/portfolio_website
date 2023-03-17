import React from "react";
import { Link, Avatar } from "@mui/material";
import "../css/TopLinks.css";
import AppsIcon from "@mui/icons-material/Apps";
import { IconButton } from "@mui/material";
import { green } from "@mui/material/colors";

const dark_grey = "#696969";

function TopLinks() {
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
      <IconButton style={{ marginTop: 0, marginRight: 10, marginLeft: -8 }}>
        <Avatar
          sx={{ bgcolor: green[500], width: 32, height: 32 }}
          style={{ fontSize: 15 }}
          alt="Dohyun Kim"
        >
          DK
        </Avatar>
      </IconButton>
    </div>
  );
}

export default TopLinks;
