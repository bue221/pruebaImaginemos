import React from "react";

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import { Button, useMediaQuery } from "@material-ui/core";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useStyles } from "./style";

import Navbar from "../../Molecules/Navbar";
import Header from "../../Molecules/Header";
import Categories from "../../Molecules/Categories";
import Products from "../../Molecules/Products";
import Account from "../../../../assets/svg/account";
import Time from "../../../../assets/svg/time";

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
          <Account />
          <div
            style={{
              background: "#ffd644",
              padding: "0.4rem 0.7rem",
              borderRadius: "5px",
              margin: "20px",
            }}
          >
            3
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            textAlign: "initial",
            marginLeft: "4em",
            marginTop: "3em",
          }}
        >
          <h1 style={{ margin: " 2px 0" }}>My 😎</h1>
          <h1 style={{ margin: " 2px 0" }}>Order </h1>
        </div>
        <div
          style={{
            background: "#5539a3",
            margin: "1em 3em",
            padding: "1em",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>655 St Marks Ave</p>{" "}
            <Button style={{ color: "#e0ab69", textTransform: "initial" }}>
              edit
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="">
              <div
                style={{
                  background: "rgb(102, 72, 156)",
                  display: "flex",
                  padding: ".4rem",
                  borderRadius: "0.2rem",
                }}
              >
                <Time />
              </div>
            </div>
            <p>35 min</p>{" "}
            <Button style={{ color: "#e0ab69", textTransform: "initial" }}>
              choose the time
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
