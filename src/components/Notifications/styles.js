import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    wishlistPaper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
        height: "60vh",
        paddingLeft: "5vh",
        paddingRight: "5vh",
      },
      [theme.breakpoints.up("sm")]: {
        width: "80vw",
        height: "47vh",
      },
      // text: {
      //   marginTop: "5vh",
      // },
    },
    centerPaper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  
      padding: "1rem",
    },
    pageTitle: {
      marginBottom: "1rem",
      marginTop: "4.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "80vh",
    },
    ordersNotificationBox:{
        width : "100%",
        display: "flex",
        justifyContent: "center",
    }
  }));

export default useStyles;