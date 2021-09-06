import React, { useEffect } from "react";
import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Paper, Box } from "@material-ui/core";

import { Link } from "react-router-dom";

import Review from "../CheckoutForm/Review/Review";
import { useAuth } from "../../contexts/AuthContext";

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
    
    padding:"1rem"
  },
  pageTitle: {
    marginBottom: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    height: "60vh",

  },
  [theme.breakpoints.up("sm")]: {
    height: "80vh",

  },
}));

const Notifications = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography
        variant="h4"
        color="primary"
        align="center"
        className={classes.pageTitle}
      >
        Notifications
      </Typography>
      <Box className={classes.centerPaper}>
        <Paper className={classes.wishlistPaper} elevation={5}>
          <Box>
            <Typography display="block" variant="h4" align="center">
              Your don't have new notifications
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" display="block">
              <Typography component={Link} to="/" variant="h6" display="inline">
                Click here
              </Typography>{" "}
              to go back to shop
            </Typography>
          </Box>
        </Paper>
      </Box>
      
    </div>
  );
};

export default Notifications;
