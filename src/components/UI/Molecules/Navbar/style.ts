import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    width: "200px",
    display: "flex",
    justifyContent: "space-between",
  },
}));
