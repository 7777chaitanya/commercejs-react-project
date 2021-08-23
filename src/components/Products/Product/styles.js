import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
