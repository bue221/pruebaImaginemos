import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundImage:
      "radial-gradient(#f7a52a 1px, transparent 1px), radial-gradient(#f7a52a 1px, transparent 1px)",
    backgroundSize: "50px 50px",
    backgroundPosition: "0 0, 25px 25px",
    padding: 0,
    margin: 0,
    display: "grid",
    placeItems: "center",
  },
  container: {
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 10px 25px rgba(0, 0, 0, .3)",
    width: 450,
    padding: "8px 24px",
  },
  padding: {
    padding: "2em 0",
  },
}));
