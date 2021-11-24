import React, { useEffect, useContext } from "react";
import { Typography, Box } from "@material-ui/core";
import { CurrentUserDetailsContext } from "../../contexts/userDetails";
import useStyles from "./styles";
import NoNotifications from "./NoNotifications/NoNotifications";
import Orders from "../Orders/Orders";

const Notifications = ({ userDetails, fetchUserDetails }) => {
  const classes = useStyles();
  const currentUserDoc = useContext(CurrentUserDetailsContext);
  let currentUserDetails = currentUserDoc[0];
  console.log("Notifications =>", currentUserDetails);

  // useEffect(() => {
  //   fetchUserDetails(currentUserDetails.email);
  // }, []);

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

      {currentUserDoc[0]?.orders?.length === 0 ? (
        <NoNotifications />
      ) : (
        <Box className={classes.ordersNotificationBox}>
          <Box>
            <Orders />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Notifications;
