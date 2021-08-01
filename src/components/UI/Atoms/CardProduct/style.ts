import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    width: "300px",
    padding: "0 2rem",
  },
  container: {
    width: "100%",
  },
  divImg: {
    position: "relative",
  },
  img: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "20px",
    maxHeight: 120,
  },
  divTime: {
    position: "absolute",
    top: "5.2em",
    background: "#ccccccdb",
    borderBottomLeftRadius: "20px",
    borderTopRightRadius: "20px",
    padding: "0 1rem",
  },
  textDiv: {
    textAlign: "initial",
  },
}));
