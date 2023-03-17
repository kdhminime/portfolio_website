import React from "react";
import { Paper, Link } from "@mui/material";

let Bottom = () => {
  return (
    <div>
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          height: 40,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#eeeeee",
          position: "fixed",
          bottom: 40,
          marginLeft: -1,
        }}
      >
        <p className="bottom-text">Edmonton</p>
      </Paper>
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          height: 40,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#eeeeee",
          position: "fixed",
          bottom: 0,
          marginLeft: -1,
        }}
      >
        <Link
          href="#"
          className="bottom-link"
          color={"#424242"}
          fontFamily={"Roboto, sans-serif"}
          underline={"hover"}
          style={{ marginLeft: "3%" }}
        >
          About
        </Link>
        <Link
          href="#"
          className="bottom-link"
          color={"#424242"}
          fontFamily={"Roboto, sans-serif"}
          underline={"hover"}
          style={{ marginLeft: "2%" }}
        >
          Projects
        </Link>
        <Link
          href="#"
          className="bottom-link"
          color={"#424242"}
          fontFamily={"Roboto, sans-serif"}
          underline={"hover"}
          style={{ marginLeft: "2%" }}
        >
          Blog
        </Link>
        <Link
          href="https://mail.google.com/mail/u/0/?fs=1&to=kdhminime@gmail.com&tf=cm"
          className="bottom-link"
          color={"#424242"}
          fontFamily={"Roboto, sans-serif"}
          underline={"hover"}
          style={{ marginLeft: "2%" }}
        >
          Email
        </Link>
        <Link
          href="https://github.com/kdhminime"
          className="bottom-link"
          color={"#424242"}
          fontFamily={"Roboto, sans-serif"}
          underline={"hover"}
          style={{ right: 160, position: "absolute" }}
        >
          GitHub
        </Link>
        <Link
          href="#"
          className="bottom-link"
          color={"#424242"}
          fontFamily={"Roboto, sans-serif"}
          underline={"hover"}
          style={{ right: 80, position: "absolute" }}
        >
          Linkedin
        </Link>
        <Link
          href="https://mail.google.com/mail/u/0/?fs=1&to=kdhminime@gmail.com&tf=cm"
          className="bottom-link"
          color={"#424242"}
          fontFamily={"Roboto, sans-serif"}
          underline={"hover"}
          style={{
            position: "absolute",
            right: 20,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          Email
        </Link>
      </Paper>
    </div>
  );
};

export default Bottom;
