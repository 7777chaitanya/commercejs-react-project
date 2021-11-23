import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paginationBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  slider: {
    width: "15vw",
    marginLeft: "1rem",
    // marginRight : "auto",
    // display: "flex",
    // justifyContent : "center",
    // alignItems : "center",
    marginTop: "2rem",
  },
  productsAndFilterBox: {
    display: "flex",
    marginTop: "5rem",
  },
  filterBox: {
    flex: 3,
    overflow: "auto",
  },
  productBox: {
    flex: 8,
    marginRight: "0.7rem",
  },
  filterCard: {
    margin: "0 0.5rem",
    padding: "0 0.5rem",
  },
}));

export default useStyles;
