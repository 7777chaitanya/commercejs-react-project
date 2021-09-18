import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
  eachButtonInButtonGroup: {
    fontWeight: 600,
  },
}));

export default useStyles;
