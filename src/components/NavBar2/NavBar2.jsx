import React, { useEffect, useState, useRef, useContext } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link, useLocation } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HWH from "../../assets/HWH.png";
import { Tooltip } from "@material-ui/core";
import PopUp from "../PopUp/PopUp";
import CancelIcon from "@material-ui/icons/Cancel";
import { CurrentUserDetailsContext } from "../../contexts/userDetails";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    position: "sticky",
    zIndex: 5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    marginRight:'0.5rem'
  },
  hwh:{
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    // padding: theme.spacing(0, 2),
    height: "100%",
    // position: "absolute",
    // pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // right : "0.5rem",
    cursor: "pointer",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function NavBar2({ quantity, userDetails, products }) {
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUserDoc, setCurrentUserDoc] = useContext(
    CurrentUserDetailsContext
  );

  const searchRef = useRef();
  const classes = useStyles();
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const [userName, setUserName] = useState(userDetails);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    setError("");
    try {
      await logout(auth);
      history.push("/login");
    } catch (error) {
      setError("Log out Failed!");
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
      <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
        Profile
      </MenuItem>

      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem  component={Link}
          to="/messages"
          onClick={handleMenuClose}>
        <IconButton
          aria-label="show 4 new mails"
          color="inherit"
         
        >
          <Badge badgeContent={0} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem component={Link}
          to="/notifications"
          onClick={handleMenuClose}>
        <IconButton
          aria-label="show 11 new notifications"
          color="inherit"
          
        >
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem component={Link}
          to="/wishlist"
          onClick={handleMenuClose}>
        <IconButton
          color="inherit"
          aria-label="menu"
          
        >
          <Badge
            badgeContent={
              Object.keys(userDetails).length && userDetails.wishlist.length
            }
            color="secondary"
          >
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Wishlist</p>
      </MenuItem>

      {!(location.pathname === "/cart") && (
        <MenuItem>
          <IconButton
            // edge="start"
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/cart"
            onClick={handleMenuClose}
          >
            <Badge badgeContent={quantity} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>My Cart</p>
        </MenuItem>
      )}

      <MenuItem 
      // onClick={handleProfileMenuOpen}
      component={Link}
      to="/profile"
      >
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={handleMenuClose}
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleDisplayPopUp = (e) => {
    setDisplayPopUp(true);
    setSearchTerm(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      setDisplayPopUp(false);
      setSearchTerm("");
    }
  };

  const handleProductClick = (e) => {
    setDisplayPopUp(false);
    setSearchTerm("");
  };

  return location.pathname !== "/signup" && location.pathname !== "/login" && location.pathname!=="/forgot-password" ? (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography> */}
          <Typography
            component={Link}
            to="/"
            variant="h4"
            className={classes.title}
            color="secondary"
          >
            <img src={HWH} alt="logo" height="25px" />
            <span className={classes.hwh}>
            HWH
            </span>
          </Typography>
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
              inputProps={{ "aria-label": "search" }}
              onChange={handleDisplayPopUp}
              onKeyDown={handleKeyPress}
              value={searchTerm}
            />
          </div>
          {displayPopUp && (
            <div className={classes.closeIcon}>
              <IconButton onClick={handleProductClick}>
                <CancelIcon />
              </IconButton>
            </div>
          )}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tooltip title="Your Wishlist">
              <IconButton
                edge="start"
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
            </Tooltip>
            {/* <Tooltip title="Messages">
              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                component={Link}
                to="/messages"
              >
                <Badge badgeContent={0} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="Notifications">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                component={Link}
                to="/notifications"
              >
                <Badge badgeContent={0} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            {!(location.pathname === "/cart") && (
              <Tooltip title="Your cart">
                <IconButton
                  // edge="start"
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
              </Tooltip>
            )}

            <Tooltip title="Logout">
              <IconButton
                // edge="start"
                aria-controls={menuId}
                color="inherit"
                aria-label="menu"
                component={Link}
                to="/wishlist"
                onClick={handleLogout}
              >
                <ExitToAppIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={`Hi, ${currentUserDoc.name}`} aria-label="account">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
                component={Link}
                to="/profile"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {displayPopUp && (
        <PopUp
          searchTerm={searchTerm}
          products={products}
          handleProductClick={handleProductClick}
        />
      )}
      {renderMobileMenu}
      {renderMenu}
    </div>
  ) : null;
}
