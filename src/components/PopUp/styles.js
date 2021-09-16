import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>({
  root: {
    position: "absolute",
    maxHeight: "50vh",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      left : "10vw",
      right : "10vw"
    },
    [theme.breakpoints.up("sm")]: {
        left: "10vw",
        // right : "30vw"
    },
  },
}));

export default useStyles;
