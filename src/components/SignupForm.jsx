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
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore"; 


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
    // backgroundImage: "linear-gradient(165deg, lightcyan, greenyellow)",
    backgroundImage: "linear-gradient(165deg, lightcyan, darkslateblue)",

  },
  button: {
    // background: "linear-gradient(135deg, lightgray, greenyellow)",
    backround: "lightgray",
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
    // color: "greenyellow",
    color : "darkslateblue"
  },
});

const SignupForm = () => {
  const classes = useStyles();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signinSuccess, setSigninSuccess] = useState("");
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sign up method =>", auth);

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }
    try {
      setError("");
      setLoading(true);
      setSigninSuccess("");




      const result = await signup(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
     
      const docSetting = await setDoc(doc(db, "customerDetails", emailRef.current.value), {
        name: usernameRef.current.value,
        wishlist : []
      });
     
      if (result) {
        setSigninSuccess("Account registered Successfully!");
      }
      console.log("documentSEtting => ",docSetting)

     
      history.push("/");
      console.log("result =>", result);
    } catch (error) {
      setError(error.code);
    }
    // setError
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
        SignUp form
      </Typography>
      <Box className={classes.box}>
        {error && (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        )}
      </Box>
      <Box className={classes.box}>
        {signinSuccess && (
          <Alert variant="filled" severity="success">
            {signinSuccess}
          </Alert>
        )}
      </Box>

      <Box className={classes.formBox}>
        <form onSubmit={handleSubmit}>
          <Box className={classes.form}>
            <Box className={classes.box}>
              <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  inputRef={usernameRef}
                />
                <FormHelperText id="my-helper-text">
                  How do you want us to call you?
                </FormHelperText>
              </FormControl>
            </Box>
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
              <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  type="password"
                  inputRef={passwordRef}
                />
                <FormHelperText id="my-helper-text">
                  Help us to keep your account safe
                </FormHelperText>
              </FormControl>
            </Box>
            <Box className={classes.box}>
              <FormControl>
                <InputLabel htmlFor="my-input">
                  Re-enter password
                </InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  type="password"
                  inputRef={passwordConfirmRef}
                />
                <FormHelperText id="my-helper-text">
                  Please re-enter your password
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
                Submit
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
        {/* <a style={{ textDecoration: "none", color: "black" }} href="/login"> */}

        <Typography
          variant="subtitle2"
          component={Link}
          to="/login"
          className={classes.link}
        >
          Already have an Account? Log In!
        </Typography>
        {/* </a> */}
      </Box>
    </>
  );
};

export default SignupForm;
