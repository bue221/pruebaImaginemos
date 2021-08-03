import React from "react";
import { useHistory } from "react-router-dom";

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  Avatar,
  Button,
  Divider,
  useMediaQuery,
  TextField,
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";

import { useStyles } from "./style";

import Navbar from "../../Molecules/Navbar";
import Header from "../../Molecules/Header";
import Categories from "../../Molecules/Categories";
import Products from "../../Molecules/Products";

import Account from "../../../../assets/svg/account";
import Time from "../../../../assets/svg/time";
import ArrowFoward from "../../../../assets/svg/arrowFoward";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { logoutAsync, selectUser } from "../../../../features/user/userSlice";
import { selectShoppingCart } from "../../../../features/shoppingCart/shoppingCart";

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = React.useState(true);
  const [age, setAge] = React.useState(10);
  const [persons, setpersons] = React.useState(1);

  const userState = useAppSelector(selectUser);
  const shoppingCartState = useAppSelector(selectShoppingCart);
  const dispatch = useAppDispatch();

  const history = useHistory();

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

  const handleChangePersons = (e: any) => setpersons(e.target.value);

  const numberOfpedidos = () => {
    var total = 0;
    for (var property in shoppingCartState?.countItems) {
      total += shoppingCartState?.countItems[property];
    }
    return total;
  };

  const itemArr = shoppingCartState?.items.reduce((acc: any, item: any) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  const precioTotalPedido = shoppingCartState.items.reduce(
    (sum: any, value: any) => (sum += value.price),
    0
  );

  const realizarPedido = () => {
    const precioPorCabeza = precioTotalPedido / persons;
    alert(
      `Cada persona debe de dar una cantidad de ${precioPorCabeza.toFixed(
        2
      )} para pagar el pedido`
    );
    history.push("/checkout");
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
          <div className={classes.itemsBadge}>{numberOfpedidos() || 0}</div>
          {userState?.user && (
            <Button variant="contained" onClick={() => dispatch(logoutAsync())}>
              exit
            </Button>
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
        <div className={classes.containerItemsShopping}>
          {itemArr?.map((item: any) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.image}
                  width="50px"
                  alt={item.name}
                  style={{ borderRadius: "20px", height: "fit-content" }}
                />
                <strong>x{shoppingCartState.countItems[item.id]}</strong>
                <strong style={{ width: 160 }}>{item.name}</strong>
              </div>
              <p>{item.price * shoppingCartState.countItems[item.id]}</p>
            </div>
          ))}
        </div>
        <div className={classes.priceContainer}>
          <h2>Total: </h2>
          <h1>$ {precioTotalPedido.toFixed(2)}</h1>
        </div>
        <Divider className={classes.margin2} />
        <div className={classes.containerBacan}>
          <div className={classes.margin2}>
            <p>Persons</p>
            <TextField
              className={classes.textfield}
              id="standard-basic"
              value={persons}
              onChange={handleChangePersons}
              type="number"
            />
          </div>
          <Button
            className={classes.btnCheckout}
            endIcon={<ArrowFoward color="black" />}
            onClick={realizarPedido}
          >
            Checkout
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
