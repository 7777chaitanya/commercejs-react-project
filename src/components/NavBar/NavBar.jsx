import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Grid,
  Box,
  ThemeProvider,
  createTheme,
  InputBase,
} from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "../Products/Product/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
// import logo from "../../assets/logo.png";
import HWH from "../../assets/HWH.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from '@material-ui/icons/Search';

import "./styles.css";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

import { useState } from "react";
import { green, purple } from "@material-ui/core/colors";

const NavBar = ({ quantity, userDetails }) => {
  const classes = useStyles();
  const location = useLocation();
  const { currentUser } = useAuth();
  const [userName, setUserName] = useState(userDetails);
  console.log("state in navbar=>",userDetails)

  console.log("userName in navbar=>",userDetails.name)

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        // main: purple[500],
        main: "rgb(249,205,84)",
      },
      secondary: {
        // This is green.A700 as hex.
        // main: '#11cb5f',
        main: "rgb(255,255,255)",
      },
    },
  });

  const Appbar = () => {
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
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography
                  component={Link}
                  to="/"
                  variant="h4"
                  className={classes.title}
                  color="secondary"
                >
                  <img src={HWH} alt="logo" height="25px" />
                  HWH
                </Typography>
              </Grid>
              {/* ----------------------------------------------------------- */}
              <Grid item>
              <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
              </Grid>

              {/* ------------------------------------------------------------------ */}
            

              <Grid item>
                {/* {!(location.pathname === "/cart") && ( */}
                <Grid container direction="column">
                  <Grid item>
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                      component={Link}
                      to="/wishlist"
                    >
                      {/* <Badge badgeContent={Object.keys(userDetails).length && userDetails.wishlist.length} color="secondary"> */}
                      <PersonIcon />
                      {/* </Badge> */}
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography>
                      Hi,
                      {Object.keys(userDetails).length !== 0 &&
                        userDetails.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                component={Link}
                to="/wishlist"
              >
                <Badge
                  badgeContent={
                    Object.keys(userDetails).length &&
                    userDetails.wishlist.length
                  }
                  color="secondary"
                >
                  <FavoriteIcon />
                </Badge>
              </IconButton>

              <Grid item>
                {!(location.pathname === "/cart") && (
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    component={Link}
                    to="/cart"
                  >
                    <Badge badgeContent={quantity} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                )}
              </Grid>
              <Grid item>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  component={Link}
                  to="/wishlist"
                  onClick={handleLogout}
                >
                  {/* <Badge badgeContent={Object.keys(userDetails).length && userDetails.wishlist.length} color="secondary"> */}
                  <ExitToAppIcon />
                  {/* </Badge> */}
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  };

  return location.pathname !== "/login" && location.pathname !== "/signup" ? (
    <Appbar />
  ) : null;
  // (currentUser) ? <Appbar/> : null
};

export default NavBar;
