import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexGrow: 1,

    minHeight : "20rem",
  },
  media: {
    height: 140,
    width : 200,
    marginLeft : "auto",
    marginRight : 'auto'
    // height : "auto"
  },
 
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
