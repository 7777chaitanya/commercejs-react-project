import { Box, Divider, Typography, Button} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";
import { auth } from "../firebase";
import ButtonGroupComponent from "../ButtonGroupComponent/ButtonGroupComponent"


const Profile = ({ userDetails, fetchUserDetails }) => {
  const classes = useStyles();
  const { currentUser, logout } = useAuth();
  const history = useHistory();


  const handleLogout = async () => {
    // setError("");
    try {
      await logout(auth);
      history.push("/login");
    } catch (error) {
    //   setError("Log out Failed!");
    }
  };

  return (
    <Box className={classes.outerMostBox}>
      <Typography align="center" variant="h3" color="primary">
        Hi, {userDetails.name}
      </Typography>
      <Box className={classes.dividerBox}>
          <Divider className={classes.divider}/>
      </Box>
      <Box>
        <Typography variant="h5">Email : {currentUser.email}</Typography>
      </Box>
      <Box className={classes.dividerBox}>
          <Divider  className={classes.divider}/>
      </Box>

      <Box>
        <Typography variant="h5">Phone : N/A</Typography>
      </Box>
      <Box className={classes.dividerBox}>
          <Divider className={classes.divider}/>
      </Box>
      
      <Box className={classes.ButtonContainer}>
          <Button variant="outlined" color="primary" component={Link} to="/">Back to Shop</Button>
          <Button variant="outlined" color="secondary" onClick={handleLogout}>Logout</Button>
      </Box>

      <ButtonGroupComponent userDetails={userDetails} fetchUserDetails={fetchUserDetails}/>
    </Box>
  );
};

export default Profile;
