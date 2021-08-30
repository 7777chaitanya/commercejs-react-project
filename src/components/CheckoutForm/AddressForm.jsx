import {
  Divider,
  FormControl,
  Grid,
  MenuItem,
  TextField,
  InputLabel,
  Select,
  FormHelperText,
  Button,
  CssBaseline,
  Box,
  Card,
} from "@material-ui/core";
import { AccountCircle, ClassSharp } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import commerce from "../../lib/commerce.js";
import invertedCountriesWithKeys from "../../utils/invertObjectKeysAndValues";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const AddressForm = ({ handleActiveStep, handleShippingData }) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [countriesWithKeys, setCountriesWithKeys] = useState([]);

  const [shippingCountryList, setShippingCountryList] = useState([]);
  const [selectedShippingCountry, setSelectedShippingCountry] = useState("");
  const [shippingSubdivisionList, setShippingSubdivisionList] = useState([]);
  const [selectedShippingSubdivision, setSelecteShippingSubdivision] =
    useState("");
  // const [shippingOptionsList, setShippingOptionsList] = useState([]);
  // const [selectedShippingOption, setSelectedShippingOption] = useState("");

  useEffect(async () => {
    const { countries } = await commerce.services.localeListCountries();
    setCountriesWithKeys(countries);
    const countryCodes = Object.keys(countries);
    const countriesArray = countryCodes.map((eachCountryCode) => {
      return countries[eachCountryCode];
    });
    setShippingCountryList(countriesArray);
  }, []);

  const fetchShippingSubDivisions = async (country) => {
    const invertedCountriesObject =
      invertedCountriesWithKeys(countriesWithKeys);
    console.log(
      "invertedCountriesWithKeys=>",
      invertedCountriesObject[country]
    );
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      invertedCountriesObject[country]
    );
    const subdivisionObjectKeysArray = Object.keys(subdivisions);
    const subdivisionArray = subdivisionObjectKeysArray.map((item) => {
      return subdivisions[item];
    });
    setShippingSubdivisionList(subdivisionArray);
  };

  const fetchShippingOptions = () => {};

  const handleFirstnameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleShippingCountryChange = (event) => {
    setSelectedShippingCountry(event.target.value);
    fetchShippingSubDivisions(event.target.value);
  };

  const handleShippingSubdivisionChange = (event) => {
    setSelecteShippingSubdivision(event.target.value);
  };

  // const handleShippingOptionsChange = (event) => {
  //   setSelectedShippingOption(event.target.value);
  // };

  const handleSubmit = (event) => {
    console.log("submit");
    event.preventDefault();
    handleActiveStep(1);
    handleShippingData({
      firstName,
      lastName,
      address,
      email,
      city,
      postalCode,
      selectedShippingCountry,
      selectedShippingSubdivision,
    });
  };

  return (
    <>
      <CssBaseline />
      <Box className={classes.root}>
        {/* <div style={{border: "1px solid lightGray", width:"90%", margin: "auto", paddingLeft: "10%"}}> */}
        <Card className={classes.card}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container xs={12} sm={6} md={6} className={classes.maingrid}>
              <div style={{ justifyContent: "center" }}>
                <Grid item>
                  <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <AccountCircle />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="input-with-icon-grid"
                          label="First name *"
                          value={firstName}
                          onChange={handleFirstnameChange}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </div>
              <Grid item>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountCircle />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="input-with-icon-grid"
                        label="Last name *"
                        value={lastName}
                        onChange={handleLastnameChange}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountCircle />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="input-with-icon-grid"
                        label="Address *"
                        value={address}
                        onChange={handleAddressChange}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountCircle />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="input-with-icon-grid"
                        label="Email *"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountCircle />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="input-with-icon-grid"
                        label="City *"
                        value={city}
                        onChange={handleCityChange}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountCircle />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="input-with-icon-grid"
                        label="Postal code *"
                        value={postalCode}
                        onChange={handlePostalCodeChange}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.margin}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Shipping Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={selectedShippingCountry}
                      onChange={handleShippingCountryChange}
                    >
                      {shippingCountryList.map((country) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Please enter your Country</FormHelperText>
                  </FormControl>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.margin}>
                  <FormControl
                    className={classes.formControl}
                    disabled={selectedShippingCountry === ""}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Shipping State
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={selectedShippingSubdivision}
                      onChange={handleShippingSubdivisionChange}
                    >
                      {shippingSubdivisionList.map((subdivision) => (
                        <MenuItem key={subdivision} value={subdivision}>
                          {subdivision}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Please enter your State</FormHelperText>
                  </FormControl>
                </div>
              </Grid>
             
            </Grid>
            <Grid item>
              <Grid container className={classes.endButtons}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<ShoppingCartIcon />}
                    component={Link}
                    to="/cart"
                  >
                    Go back to cart page
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<NavigateNextIcon />}
                    type="submit"
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Card>
        {/* </div> */}
      </Box>
    </>
  );
};

export default AddressForm;
