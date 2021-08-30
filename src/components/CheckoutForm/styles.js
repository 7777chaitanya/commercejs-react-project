import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",

    // backgroundColor: "green",
  },
  card : {
    maxWidth: "100vw",
    backgroundColor: "lightred",
    margin: "2px 0px",
    // paddingLeft: "15vw",
    

  },
  margin: {
    margin: theme.spacing(1),
    // textAlign: 'center'
    // paddingRight: "auto",
  },
  // form : {
  //   justifyContent: 'center',
  // },
  endButtons : {
    display : "flex", 
    justifyContent: "space-around",
    alignItems: 'center',
  },
  button : {
    marginBottom : '1rem',
  },
  // maingrid : {
  //   display : " flex ", 
  //   direction: 'column',
  //   justifyContent: "center",
  // },
  
}));

export default useStyles;
