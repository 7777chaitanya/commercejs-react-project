import { makeStyles } from "@material-ui/core";
import { FullscreenExitTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",

    // backgroundColor: "green",
  },
  card: {
    [theme.breakpoints.down("sm")]: {
      minWidth: "100vw",
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: "50vw",
      maxWidth: "70vw",
    },

    backgroundColor: "lightred",
    margin: "2px 0px",
    // paddingLeft: "15vw",
  },
  margin: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  eachTextFieldSubItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  eachTextFieldIcon: {
    paddingTop: "1.8rem",
    paddingRight: "1rem",
  },

  endButtons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    marginBottom: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  inputFieldBox: {
    display: "flex",
    justifyContent: "center",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
}));

export default useStyles;
