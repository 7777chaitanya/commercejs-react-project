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
    

      <ButtonGroupComponent userDetails={userDetails} fetchUserDetails={fetchUserDetails}/>
    </Box>
  );
};

export default Profile;
