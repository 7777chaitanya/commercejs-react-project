import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paginationBox:{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      marginTop : "2rem"
    },
    slider : {
      width : "40vw",
      marginLeft : "auto",
      marginRight : "auto",
      display: "flex",
      justifyContent : "center",
      alignItems : "center",
      marginTop : "2rem"
    }
  }));

export default useStyles;