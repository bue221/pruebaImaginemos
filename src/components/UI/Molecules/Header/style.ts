import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    background: "#fff7eb",
    borderRadius: 20,
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  titleDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  h1: {
    color: "#fe6e37",
    marginBottom: -10,
  },
  p: {
    color: "#c2bbb2",
  },
  btnDiv: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  btn: {
    color: "#fe6e37",
    textTransform: "initial",
  },
}));
