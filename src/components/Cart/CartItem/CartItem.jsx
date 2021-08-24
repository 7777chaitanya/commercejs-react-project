import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddCircleIcon from "@material-ui/icons/AddCircle";
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
          <Typography gutterBottom={false} variant="h6" component="h2">
            {item.name}
          </Typography>
        </CardContent>
        <Grid container justifyContent="space-around">
          <Grid item>
            <Typography variant="body1">
              {item.price.formatted_with_symbol}
            </Typography>
          </Grid>

          <Grid item>
            <Button size="small" color="secondary" variant="contained">
              Remove Item
            </Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item>
            <IconButton aria-label="delete" color="primary">
              <AddCircleIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="textPrimary" className={classes.qty}>
              {item.quantity} pcs
            </Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="delete" color="secondary">
              <IndeterminateCheckBoxIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default CartItem;
