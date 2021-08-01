import React from "react";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

import { useStyles } from "./style";

import SearchIcon from "../../../../assets/svg/search";

export default function SearchButton() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} elevation={0}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
}
