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
import FaceIcon from '@material-ui/icons/Face';
import HouseIcon from '@material-ui/icons/House';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import commerce from "../../lib/commerce.js";
import invertedCountriesWithKeys from "../../utils/invertObjectKeysAndValues";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
import LocationCityIcon from '@material-ui/icons/LocationCity';

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
    const { countries } = await commerce?.services?.localeListCountries();
    setCountriesWithKeys(countries);
    let countryCodes;
    if(countries){
    countryCodes = Object.keys(countries);
    }
    let countriesArray;
    if(countryCodes){
     countriesArray = countryCodes?.map((eachCountryCode) => {
      return countries[eachCountryCode];
    });
  }
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
        <Card className={classes.card}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Box>
              <Box className={classes.inputFieldBox}>
                <Box className={classes.margin}>
                  <Box className={classes.eachTextFieldIcon}>
                    <FaceIcon />
                  </Box>
                  <Box className={classes.eachTextFieldSubItem}>
                    <TextField
                      id="input-with-icon-grid"
                      label="First name *"
                      value={firstName}
                      onChange={handleFirstnameChange}
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={classes.inputFieldBox}>
                <div className={classes.margin}>
                  <Box className={classes.eachTextFieldIcon}>
                    <FaceIcon />
                  </Box>
                  <Box className={classes.eachTextFieldSubItem}>

                  <TextField
                    id="input-with-icon-grid"
                    label="Last name *"
                    value={lastName}
                    onChange={handleLastnameChange}
                  />
                  </Box>
                </div>
              </Box>

              <Box className={classes.inputFieldBox}>
                <div className={classes.margin}>
                  <Box className={classes.eachTextFieldIcon}>
                    <HouseIcon />
                  </Box>
                  <Box className={classes.eachTextFieldSubItem}>

                  <TextField
                    id="input-with-icon-grid"
                    label="Address *"
                    value={address}
                    onChange={handleAddressChange}
                  />
                  </Box>
                </div>
              </Box>

              <Box className={classes.inputFieldBox}>
                <div className={classes.margin}>
                  <Box className={classes.eachTextFieldIcon}>
                    <MailOutlineIcon />
                  </Box>
                  <Box className={classes.eachTextFieldSubItem}>

                  <TextField
                    id="input-with-icon-grid"
                    label="Email *"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  </Box>
                </div>
              </Box>

              <Box className={classes.inputFieldBox}>
                <div className={classes.margin}>
                  <Box className={classes.eachTextFieldIcon}>
                    <LocationCityIcon />
                  </Box>
                  <Box className={classes.eachTextFieldSubItem}>

                  <TextField
                    id="input-with-icon-grid"
                    label="City *"
                    value={city}
                    onChange={handleCityChange}
                  />
                  </Box>
                </div>
              </Box>

              <Box className={classes.inputFieldBox}>
                <div className={classes.margin}>
                  <Box className={classes.eachTextFieldIcon}>
                    <PersonPinCircleIcon />
                  </Box>
                  <Box className={classes.eachTextFieldSubItem}>

                  <TextField
                    id="input-with-icon-grid"
                    label="Postal code *"
                    value={postalCode}
                    onChange={handlePostalCodeChange}
                  />
                  </Box>
                </div>
              </Box>

              <Box className={classes.inputFieldBox}>
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
              </Box>

              <Box className={classes.inputFieldBox}>
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
              </Box>

              <Box className={classes.buttonBox}>
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
              </Box>
            </Box>
          </form>
        </Card>
      </Box>
    </>
  );
};

export default AddressForm;
