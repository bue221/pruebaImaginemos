import React from "react";

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { useStyles } from "./style";

import Navbar from "../../Molecules/Navbar";
import Header from "../../Molecules/Header";
import Categories from "../../Molecules/Categories";
import Products from "../../Molecules/Products";

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = React.useState(true);
  const [age, setAge] = React.useState(10);

  const classesWithClx = !isMobile
    ? clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })
    : "clase-prueba";

  const handleChange = (e: any) => {
    setAge(e.target.value);
  };

  const handleOpenAndClose = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classesWithClx}>
        <Navbar onClick={handleOpenAndClose} />
        <div className={classes.drawerHeader} />
        <div className={classes.containerChildren}>
          <Header />
          <Categories value={age} handleChange={handleChange} />
          <Products />
        </div>
      </div>
      {/* sidebar */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? "bue" : "bue"}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? "bue" : "bue"}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? "bue" : "bue"}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
