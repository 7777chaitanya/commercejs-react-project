import React, { useEffect, useContext } from "react";
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
import { CurrentUserDetailsContext } from "../../contexts/userDetails";
import useStyles from "./styles";
import NoNotifications from "./NoNotifications/NoNotifications";

const Notifications = ({ userDetails, fetchUserDetails }) => {
  const classes = useStyles();
  const currentUserDoc = useContext(CurrentUserDetailsContext);
  const currentUserDetails = currentUserDoc[0];
  console.log("Notifications =>", currentUserDetails);

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

      
      <NoNotifications />

    </div>
  );
};

export default Notifications;
