import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>({
  outerCard: {
    
    height: "80vh",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width : "95vw",
      height : "85vh"
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      width: "90vw",
    },
    marginTop : "4.5rem"
  },
  innerBoxLeft: {
    flex: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow : 0
    
  },
  innerBoxRight: {
    flex: 5,
    // [theme.breakpoints.down("sm")]: {
        padding : "1rem"
    //   },
  },
  productImage: {
    [theme.breakpoints.down("sm")]: {
        height : "40vh"
      },
      [theme.breakpoints.up("sm")]: {
        height: "40vw",

      },
  },
  loadingTextCard: {
    marginTop: "10rem",
    height: "8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //   marginBottom : "auto"
  },
  productDescriptionButtons: {
      display: "flex",
    justifyContent: "space-evenly",
  },
  button :{
    //   margin : "1rem",
    //   marginBottom : "9rem",
    marginTop :"2rem",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
  }
}));

export default useStyles;
