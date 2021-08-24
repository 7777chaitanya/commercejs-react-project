import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles.js";

const CartItem = ({ cart, item }) => {
  const classes = useStyles();
  console.log("cartItem =>", item);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.media.source}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom={false} variant="h5" component="h2">
            {item.name}
          </Typography>
        </CardContent>
        <Grid container justifyContent="space-around">
          <Grid item>
            <Typography variant="h6">
              {item.price.formatted_with_symbol}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="textPrimary">
              {item.quantity} pcs
            </Typography>
          </Grid>
          <Grid item>
            <Button size="small" color="secondary">
              Remove Item
            </Button>
          </Grid>
        </Grid>
      </CardActionArea>
      
     
    </Card>
  );
};

export default CartItem;
