import React from "react";

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import { MenuItem, Paper, Select, useMediaQuery } from "@material-ui/core";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

import Navbar from "../../Molecules/Navbar";

import headerImage from "../../../../assets/images/headerimage.png";

import { useStyles } from "./style";

import data from "../../../../commons/utils/categories.json";
import data2 from "../../../../commons/utils/products.json";
import Header from "../../Molecules/Header";

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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <h1>Restaurants</h1>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {/* {data.map((i: any) => (
              <Paper
                style={{ borderRadius: "70px", padding: "1rem 0.75rem" }}
                key={i.id}
              >
                <img width="50px" src={i.icon} alt={i.name} />
                <p>{i.name}</p>
              </Paper>
            ))} */}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            {data2.map((i: any) => (
              <div className="" key={i.id}>
                <div className="">
                  <img width="100px" src={i.image} alt={i.name} />
                </div>
                <h3>{i.name}</h3>
                <p>
                  <strong>{i.qualification}</strong> $$ {i.price}
                </p>
              </div>
            ))}
          </div>
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
