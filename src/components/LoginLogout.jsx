import React, { useState } from "react";
import { Box , Grid, Paper} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { auth } from "./firebase";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin : "0.5rem 0",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button : {
        fontSize : "0.8rem", 
    margin : "0",  
},
paper1 : {
    textAlign: 'center',
      color: theme.palette.text.secondary,
      padding : "0.71rem 0"
},
  }));

const LoginLogout = () => {
    const classes = useStyles();

  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();

  const handleLogout = async () => {
    setError("");
    try {
      await logout(auth);
      history.push("/login");
    } catch (error) {
      setError("Log out Failed!");
    }
  };

  return currentUser ? (
    // <Box className={classes.main}>
    //   <Box className={classes.box}>
    //     {currentUser && <Typography className={classes.h2} variant="body2">
    //       Logged in as : {currentUser.email}
    //     </Typography>}
    //   </Box>
    //   <Box className={classes.box}>
    //       <Box>
    //     <Button variant="outlined" color="secondary" onClick={handleLogout}>Logout</Button>
    //     </Box>
    //   </Box>
    // </Box>

    <div className={classes.root}>
    <Grid container spacing={3} >
     
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
        {currentUser && <Typography className={classes.h2} variant="body2">
         Logged in as : {currentUser.email}
         </Typography>}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper1}>
        <Button variant="outlined" color="secondary" onClick={handleLogout} size="small" className={classes.button}>Logout</Button>
        </Paper>
      </Grid>
      
    </Grid>
  </div>
  ) : null;
};

export default LoginLogout;
