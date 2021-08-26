import { AppBar, Badge, IconButton, Toolbar, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "../Products/Product/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";

const NavBar = ({ quantity }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography   component={Link} to="/" variant="h4" className={classes.title} color="primary">
              <img src={logo} alt="logo" height="25px" />
              HWH
            </Typography>
          </Grid>
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
