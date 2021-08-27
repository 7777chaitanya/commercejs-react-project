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

const CartItem = ({ cart, item, incrementItem, decrementItem, removeItem, emptyCart}) => {
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
             ₹{item.price.raw*item.quantity}
            </Typography>
          </Grid>

          <Grid item>
            <Button size="small" color="secondary" variant="contained" onClick={()=>removeItem(item.id)}>
              Remove Item
            </Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item>
            <IconButton aria-label="" color="secondary" onClick={()=>decrementItem(item,-1)}>
              <IndeterminateCheckBoxIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textPrimary" className={classes.qty}>
              {item.quantity} pcs
            </Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="increment" color="primary" onClick={()=>incrementItem(item, 1)}>
              <AddCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default CartItem;
