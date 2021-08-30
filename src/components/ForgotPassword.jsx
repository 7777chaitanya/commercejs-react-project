import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Box,
  Button,
  Typography,
  CssBaseline,
  Divider,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link} from "react-router-dom";

import { useAuth } from "./contexts/AuthContext";
import { auth } from "./firebase";

const useStyles = makeStyles({
  box: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem",
  },
  form: {
    border: "1px solid lightgray",
    margin: "5px",
    borderRadius: 5,
    // width: "50vw",
    padding: "0px 5rem",
    boxShadow:
      "0rem 0.1rem 0.1rem 0.1rem linear-gradient(165deg, lightcyan, greenyellow)",
    backgroundImage: "linear-gradient(165deg, lightcyan, greenyellow)",
  },
  button: {
    background: "linear-gradient(15deg, yellow, greenyellow)",
    //   backround: "lightgray",
    padding: "0.25rem 2rem",
    width: "20vw",
  },
  mainForm: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  outer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: "50vw",
    // height : "50px",
    padding: "0.5rem 0",
    paddingLeft: "25vw",

    // justifyContent : "center",
  },
  link: {
    textAlign: "center",
    textDecoration: "none",
    color: "black",
  },
  typography: {
    color: "greenyellow",
  },
});

const ForgotPassword = () => {
  const classes = useStyles();
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { passwordReset } = useAuth();

  var actionCodeSettings = {
    url: `https://www.example.com/?email=${emailRef.current && emailRef.current.value}`,
    iOS: {
       bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    // handleCodeInApp: true
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      const result = await passwordReset(
          auth,
        emailRef.current.value,
        actionCodeSettings
        
        
      );
        setSuccessMessage("Please check your email for further instructions!");
      console.log("result =>", result);
    //   history.push("/");
    } catch (error) {
        console.log("error => ", error)
      setError("Failed to reset Password");
    }
    setLoading(false);
  };

  return (
    <>
      <Typography
        variant="h3"
        color="primary"
        align="center"
        className={classes.typography}
      >
        Password Reset
      </Typography>
      <Box className={classes.box}>
        {error && (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        )}
      </Box>
      <Box className={classes.box}>
          {successMessage && (
            <Alert variant="filled" severity="success">
              {successMessage}
            </Alert>
          )}
        </Box>

      <Box className={classes.formBox}>
        <form onSubmit={handleSubmit}>
          <Box className={classes.form}>
            <Box className={classes.box}>
              <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  inputRef={emailRef}
                />
                <FormHelperText id="my-helper-text">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
            </Box>

            <Box className={classes.box}>
              <Button
                color="white"
                className={classes.button}
                onClick={handleSubmit}
                disabled={loading}
              >
                Reset
              </Button>
            </Box>
          </Box>
        </form>
        {/* <Divider/> */}
      </Box>
      <Box className={classes.divider}>
        <Divider />
      </Box>
      <Box className={classes.link}>
        <Typography
          variant="subtitle2"
          component={Link}
          to="/login"
          className={classes.link}
        >
          Log In
        </Typography>
      </Box>
      <Box className={classes.divider}>
        <Divider />
      </Box>
      <Box className={classes.link}>
        <Typography
          variant="subtitle2"
          component={Link}
          to="/signup"
          className={classes.link}
        >
          Don't have an account? SignUp!
        </Typography>
      </Box>
    </>
  );
};

export default ForgotPassword;
