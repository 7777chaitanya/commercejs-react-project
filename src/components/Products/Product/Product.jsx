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
import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useStyles from "./styles";

const Product = ({ product, addToCart }) => {
  const classes = useStyles();
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
        <Grid container justifyContent="flex-end">
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
