import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - 340px)`,
      marginRight: 340,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.down("md")]: {
        width: `calc(100% - 240px)`,
        marginRight: 240,
      },
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: 340,
      [theme.breakpoints.down("md")]: {
        width: 240,
      },
      flexShrink: 0,
    },
    drawerPaper: {
      width: 340,
      [theme.breakpoints.down("md")]: {
        width: 240,
      },
      background: "#fafbf8",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      // padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
      // marginTop: 30,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -340,
      [theme.breakpoints.down("md")]: {
        marginRight: -240,
      },
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    containerChildren: {
      margin: "0 50px",
    },
    itemsBadge: {
      background: "#ffd644",
      padding: "0.4rem 0.7rem",
      borderRadius: "5px",
      margin: "20px",
    },
    containerMyOrder: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      textAlign: "initial",
      marginLeft: "4em",
      marginTop: "3em",
    },
    margin: {
      margin: " 2px 0",
    },
    infoDelivery: {
      background: "#5539a3",
      margin: "1em 3em",
      [theme.breakpoints.down("md")]: {
        margin: "1em",
      },
      padding: "1em",
      borderRadius: "20px",
      color: "white",
    },
    containerDelivery: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    btnDelivery: {
      color: "#e0ab69",
      textTransform: "initial",
    },
    btnTime: {
      background: "rgb(102, 72, 156)",
      display: "flex",
      padding: ".4rem",
      borderRadius: "0.2rem",
    },
  })
);
