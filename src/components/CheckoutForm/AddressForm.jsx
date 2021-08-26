import {
  Divider,
  FormControl,
  Grid,
  MenuItem,
  TextField,
  InputLabel,
  Select,
  FormHelperText,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { useState } from "react";
import useStyles from "./styles";

const AddressForm = () => {
  const classes = useStyles();

  const [country, setCountry] = React.useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  console.log("firstName =>", firstName);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

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

  return (
    // <div marginLeft="100px" marginRight="20px" border="1px solid blue">
    <Grid container xs={12} sm={6} md={6}>
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
              Country
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={country}
              onChange={handleCountryChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>India</MenuItem>
              <MenuItem value={20}>Germany</MenuItem>
              <MenuItem value={30}>Sweden</MenuItem>
            </Select>
            <FormHelperText>Please enter your Country</FormHelperText>
          </FormControl>
        </div>
      </Grid>
    </Grid>
    // </div>
  );
};

export default AddressForm;
