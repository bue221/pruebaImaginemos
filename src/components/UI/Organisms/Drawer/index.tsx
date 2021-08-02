import React from "react";

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import { Avatar, Button, useMediaQuery } from "@material-ui/core";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useStyles } from "./style";

import Navbar from "../../Molecules/Navbar";
import Header from "../../Molecules/Header";
import Categories from "../../Molecules/Categories";
import Products from "../../Molecules/Products";

import Account from "../../../../assets/svg/account";
import Time from "../../../../assets/svg/time";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { logoutAsync, selectUser } from "../../../../features/user/userSlice";

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = React.useState(true);
  const [age, setAge] = React.useState(10);

  const userState = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

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
          {userState?.user ? (
            <>
              <Avatar src={userState?.user?.photoURL} />
              <p>{userState?.user?.displayName}</p>
            </>
          ) : (
            <Account />
          )}
          <div className={classes.itemsBadge}>3</div>
          {userState?.user && (
            <Button onClick={() => dispatch(logoutAsync())}>exit</Button>
          )}
        </div>
        <div className={classes.containerMyOrder}>
          <h1 className={classes.margin}>My 😎</h1>
          <h1 className={classes.margin}>Order </h1>
        </div>
        <div className={classes.infoDelivery}>
          <div className={classes.containerDelivery}>
            <p>655 St Marks Ave</p>{" "}
            <Button className={classes.btnDelivery}>edit</Button>
          </div>
          <div className={classes.containerDelivery}>
            <div>
              <div className={classes.btnTime}>
                <Time color="#c4a182" />
              </div>
            </div>
            <p>35 min</p>{" "}
            <Button className={classes.btnDelivery}>choose the time</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
