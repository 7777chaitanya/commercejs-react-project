import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import useStyles from "./styles";
import commerce from "../../lib/commerce";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from "../NavBar/NavBar";
import ContinuousSlider from "../Slider/Slider";
import Pagination from "@material-ui/lab/Pagination";

const Products = ({
  products,
  addToCart,
  fetchUserDetails,
  deleteFromWishlist,
  AddToWishlist,
  quantity,
  userDetails,
}) => {
  const classes = useStyles();
  console.log("products comp =>", products);
  const { currentUser } = useAuth();
  const [productValue, setproductValue] = useState(30000);
  const [value, setValue] = useState(30000);

  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 9;

  const handleProductsValueChange = (value) => {
    setproductValue(value);
  };

  useEffect(() => {
    currentUser && fetchUserDetails(currentUser.email);
  }, []);

  let productsToRender = products?.filter(
    (product) => product?.price?.raw <= productValue
  );

  console.log("new value => ", productsToRender);

  const handlePaginationChange = (e, value) => {
    console.log("value =>", value);
    setPageNumber(value);
  };

  const [checkedLowToHigh, setCheckedLowToHigh] = React.useState(false);
  const [checkedHighToLow, setCheckedHighToLow] = React.useState(false);

  const handleChangeCheckedLowToHigh = (event) => {
    setCheckedLowToHigh((p) => !p);
    setCheckedHighToLow(false);
  };

  const handleChangeCheckedHighToLow = (event) => {
    setCheckedHighToLow((p) => !p);
    setCheckedLowToHigh(false);
  };

  const [checked0To10000, setChecked0To10000] = React.useState(false);
  const [checked10000To20000, setChecked10000To20000] = React.useState(false);
  const [checked20000To30000, setChecked20000To30000] = React.useState(false);

  const handleChangeCheckedChecked0To10000 = (event) => {
    setChecked0To10000((p) => !p);
    setChecked10000To20000(false);
    setChecked20000To30000(false);
    setValue(10000);
    setproductValue(10000);
  };

  const handleChangeCheckedChecked10000To20000 = (event) => {
    setChecked10000To20000((p) => !p);
    setChecked0To10000(false);
    setChecked20000To30000(false);
    setValue(20000);
    setproductValue(20000);
  };

  const handleChangeCheckedChecked20000To30000 = (event) => {
    setChecked20000To30000((p) => !p);
    setChecked10000To20000(false);
    setChecked0To10000(false);
    setValue(30000);
    setproductValue(30000);
  };

  if (checkedLowToHigh) {
    productsToRender.sort((a, b) => (a.price.raw > b.price.raw ? 1 : -1));
  }

  if (checkedHighToLow) {
    productsToRender.sort((a, b) => (a.price.raw < b.price.raw ? 1 : -1));
  }

  let productsInCurrentPage = productsToRender.slice(
    (pageNumber - 1) * itemsPerPage,
    itemsPerPage * pageNumber
  );

  const handleFilterClearButton = () => {
    setproductValue(30000);
    setCheckedLowToHigh(false);
    setCheckedHighToLow(false);
    setValue(30000);
    setChecked0To10000(false);
    setChecked10000To20000(false);
    setChecked20000To30000(false);
  };
  
  if (pageNumber === 2) {
    !productsInCurrentPage?.length && setPageNumber(1);
  }

  return (
    <div>
      <Box className={classes.productsAndFilterBox}>
        <Box className={classes.filterBox}>
          <Card elevation={5} className={classes.filterCard}>
            <Box className={classes.filterCardHeader}>
              <Typography variant="h6" display="inline">
                FILTER
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleFilterClearButton}
              >
                Clear
              </Button>
            </Box>
            <Divider className={classes.divider} />
            <Box className={classes.slider}>
              <ContinuousSlider
                handleProductsValueChange={handleProductsValueChange}
                value={value}
                setValue={setValue}
              />
            </Box>
            <Divider className={classes.divider} />

            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <FormControlLabel
                  // value="top"
                  control={
                    <Checkbox
                      checked={checkedLowToHigh}
                      onChange={handleChangeCheckedLowToHigh}
                      inputProps={{ "aria-label": "primary checkbox" }}
                      color="primary"
                    />
                  }
                  label="Price -> Low to High"
                  labelPlacement="right"
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <FormControlLabel
                  // value="top"
                  control={
                    <Checkbox
                      checked={checkedHighToLow}
                      onChange={handleChangeCheckedHighToLow}
                      inputProps={{ "aria-label": "primary checkbox" }}
                      color="primary"
                    />
                  }
                  label="Price -> High to Low"
                  labelPlacement="right"
                />
              </ListItem>
            </List>

            <Divider className={classes.divider} />

            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <FormControlLabel
                  // value="top"
                  control={
                    <Checkbox
                      checked={checked0To10000}
                      onChange={handleChangeCheckedChecked0To10000}
                      inputProps={{ "aria-label": "primary checkbox" }}
                      color="primary"
                    />
                  }
                  label="Price -> 0 - 10000"
                  labelPlacement="right"
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <FormControlLabel
                  // value="top"
                  control={
                    <Checkbox
                      checked={checked10000To20000}
                      onChange={handleChangeCheckedChecked10000To20000}
                      inputProps={{ "aria-label": "primary checkbox" }}
                      color="primary"
                    />
                  }
                  label="Price -> 10000 - 20000"
                  labelPlacement="right"
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <FormControlLabel
                  // value="top"
                  control={
                    <Checkbox
                      checked={checked20000To30000}
                      onChange={handleChangeCheckedChecked20000To30000}
                      inputProps={{ "aria-label": "primary checkbox" }}
                      color="primary"
                    />
                  }
                  label="Price -> 20000 and more"
                  labelPlacement="right"
                />
              </ListItem>
            </List>
          </Card>
        </Box>

        <Box className={classes.productBox}>
          <Grid container spacing={1} justifyContent="center">
            {productsInCurrentPage &&
              productsInCurrentPage?.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4}>
                  <Product
                    product={product}
                    addToCart={addToCart}
                    AddToWishlist={AddToWishlist}
                    deleteFromWishlist={deleteFromWishlist}
                    userDetails={userDetails}
                  />
                </Grid>
              ))}
          </Grid>

          <Box className={classes.paginationBox}>
            <Pagination
              count={Math.ceil(productsToRender.length / itemsPerPage)}
              onChange={handlePaginationChange}
              color="primary"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Products;
