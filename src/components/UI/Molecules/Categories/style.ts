import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  divIcon: {
    marginLeft: 10,
  },
  divCategory: {
    display: "flex",
  },
  containerCategory: {
    display: "flex",
    overflow: "auto",
    gap: "2rem",
    padding: "1em",
  },
  paperIcon: {
    borderRadius: "50%",
    padding: "0.3em",
  },
}));
