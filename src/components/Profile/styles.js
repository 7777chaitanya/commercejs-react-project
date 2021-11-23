import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>({
  outerMostBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop : "4rem"
  },
  dividerBox: {
    padding: "1rem",
    width: "fullWidth",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    height: "0.3rem",
    width: "20vw",
  },
  ButtonContainer: {
    width: "80vw",
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "18vh",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "10vh",
    },
  },
}));

export default useStyles;
