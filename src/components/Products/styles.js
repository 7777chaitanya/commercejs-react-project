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
    marginTop: "1rem",
    // marginRight : "1rem",
  },
  productsAndFilterBox: {
    display: "flex",
    marginTop: "5rem",
    // paddingBottom : "10rem"
    
  },
  filterBox: {
    flex: 22,
    overflow: "auto",
    maxHeight : "95vh",
    overflow: "auto",
    overflowX : "hidden",
    '&::-webkit-scrollbar': {
      width: '0px'
    },
    [theme.breakpoints.down('xs')]: {
      display : "none"
    },
    
  },
  productBox: {
    flex: 78,
    marginRight: "0.7rem",
    maxHeight : "95vh",
    overflow: "auto",
    overflowX : "hidden",
    '&::-webkit-scrollbar': {
      width: '0px'
    },
    [theme.breakpoints.down('xs')]: {
     marginLeft : "0.7rem"
    },

  },
  filterCard: {
    margin: "0 0.5rem",
    padding: "0 0.5rem",
    paddingTop : "1rem",
    marginBottom : "3rem",
    marginTop : "0.1rem"
    // paddingRight : "6rem",
  },
  filterCardHeader:{
    display : "flex",
    justifyContent : "space-between",
    alignItems : "center",
  },
  divider : {
    margin : "1rem"
  },
  productGrid:{
    marginTop : "-0.2rem"
  }
}));

export default useStyles;
