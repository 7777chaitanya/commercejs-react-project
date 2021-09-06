import { Box, Card, CardMedia, Typography,IconButton, Button } from "@material-ui/core";
import React, {useState} from "react";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ProductDescription = ({ products, match,addToCart,
    AddToWishlist,
    deleteFromWishlist,
    userDetails, }) => {
  const classes = useStyles();
  // console.log(match.params.productId);
  // console.log(products)
  const product = products.filter(
    (product) => product.id === match.params.productId
  )[0];
  //   console.log(product.media.source);

  const LoadingProductDescription = () => {
    return (
      <Card className={classes.loadingTextCard}>
        <Typography variant="h4">
          Loading product information. Please wait!....
        </Typography>
      </Card>
    );
  };

  const handleAddOrRemoveFromWishlist = (productId) => {
    if (wishlistPresence) {
      deleteFromWishlist(productId);
    } else {
      AddToWishlist(productId);
    }
    setWishlistPresence(wishlistPresence ? false : true);
  };

  const isItemPresentInWishList = () => {
    let flag = 0;
    // console.log("isItemPresentInWishList", product.id, userDetails);
    Object.keys({ ...userDetails }).length &&
      userDetails.wishlist.forEach((item) => {
        if (item === product.id) {
          flag = 1;
        }
      });
    if (flag === 0) {
      return false;
    } else {
      return true;
    }
  };

  const [wishlistPresence, setWishlistPresence] = useState(
    isItemPresentInWishList()
  );

  return product ? (
    <Card className={classes.outerCard}>
      <Box className={classes.innerBoxLeft}>
        <img
          src={product.media.source}
          alt="product Image"
          className={classes.productImage}
        />
      </Box>
      <Box className={classes.innerBoxRight}>
        <Typography variant="h4">{product.name}</Typography>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body1"
          color="textSecondary"
        />
        <Typography
          // display="inline"
          gutterBottom
          variant="h6"
          // component="h2"
        >
          {product.price.formatted_with_symbol}
        </Typography>
        <Box className={classes.productDescriptionButtons} display="block">
          <IconButton
            aria-label="Add to cart"
            onClick={() => {
              handleAddOrRemoveFromWishlist(product.id);
            }}
          >
            {wishlistPresence ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon color="primary" />
            )}
          </IconButton>
          <IconButton
            aria-label="Add to cart"
            onClick={() => {
              addToCart(product.id, 1);
            }}
          >
            <AddShoppingCartIcon color="primary" />
          </IconButton>
        </Box>
        <Box className={classes.button}>
        <Button color="secondary" variant="outlined" className={classes.backToShopButton}
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon/>}
          >
          {" "}Back to Shop
        </Button>
        </Box>
      </Box>
    </Card>
  ) : (
    <LoadingProductDescription />
  );
};

export default ProductDescription;
