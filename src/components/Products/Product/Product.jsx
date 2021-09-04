import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useStyles from "./styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Product = ({ product, addToCart, AddToWishlist, deleteFromWishlist }) => {
  const classes = useStyles();
  const [wishlistPresence, setWishlistPresence] = useState(false)

  const handleAddOrRemoveFromWishlist = (productId) => {
      if(wishlistPresence){
        deleteFromWishlist(productId);
      }
      else{
        AddToWishlist(productId)
      }
      setWishlistPresence(wishlistPresence ? false : true);
  }

  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title="Contemplative Reptile"
        />
        <CardContent style={{ paddingBottom: "0" }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography
                display="inline"
                gutterBottom
                variant="h6"
                // component="h2"
              >
                {product.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                display="inline"
                gutterBottom
                variant="h6"
                // component="h2"
              >
                {product.price.formatted_with_symbol}
              </Typography>
            </Grid>
          </Grid>

          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
          />

          {/* </Typography> */}
        </CardContent>
      </CardActionArea>

      <CardActions disableSpacing>
        <Grid container justifyContent="space-evenly">
        <IconButton
            aria-label="Add to cart"
            onClick={() => {
              handleAddOrRemoveFromWishlist(product.id)
            }}
          >

            {wishlistPresence ? 
            <FavoriteIcon color="primary" /> :
            <FavoriteBorderIcon color="primary" />}
          </IconButton>
          <IconButton
            aria-label="Add to cart"
            onClick={() => {
              addToCart(product.id, 1);
            }}
          >
            <AddShoppingCartIcon color="primary" />
          </IconButton>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Product;
