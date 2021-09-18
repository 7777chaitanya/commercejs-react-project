import React, { useContext } from "react";
import useStyles from "./styles";
import { CurrentUserDetailsContext } from "../../contexts/userDetails";
import {
  ListItem,
  List,
  ListItemText,
  Typography,
  Card,
  Box,
  Divider,
} from "@material-ui/core";
import moment from "moment";
import { Link } from "react-router-dom";

const SingleOrder = ({ eachOrder }) => {
  const classes = useStyles();
  const [currentUserDoc, setCurrentUserDoc] = useContext(
    CurrentUserDetailsContext
  );
  let thisOrder = currentUserDoc[eachOrder?.orderNumber];
  console.log("each order => ", eachOrder);

  const calculateTotal = (cart) => {
    let total = 0;
    cart?.forEach(item => {
      total = total + (item.price.raw * item.quantity);
      
    })
    // cart?.map((item) => (total = total + item.price.raw * item.quantity));
    return total;
  };

  let address = `${eachOrder?.shippingAddress?.firstName} ${eachOrder?.shippingAddress?.lastName} , 
                 ${eachOrder?.shippingAddress?.address}, 
                 ${eachOrder?.shippingAddress?.city}, 
                 ${eachOrder?.shippingAddress?.selectedShippingSubdivision}, 
                 ${eachOrder?.shippingAddress?.selectedShippingCountry}, 
                 Postalcode : ${eachOrder?.shippingAddress?.postalCode}
                 Email : ${eachOrder?.shippingAddress?.email}`;

  // console.log("address => ",address);
  // console.log("first Name address => ",eachOrder?.address?.firstName)

  const dateChecker = () => {
    if (eachOrder?.date.getMonth) {
      return moment(eachOrder?.date).format("MMMM Do YYYY, h:mm:ss a");
    } else {
      return moment(eachOrder?.date?.toDate()).format("MMMM Do YYYY, h:mm:ss a");
    }
  };
  return (
    <div>
      <Card className={classes.root}>
        <List className={classes.reviewList}>
          <Typography
            variant="h6"
            color="primary"
            className={classes.statusAndDate}
          >
            Order status : <span className={classes.value}>Success</span>
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            className={classes.statusAndDate}
          >
            Date : <span className={classes.date}>{dateChecker()}</span>
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            className={classes.statusAndDate}
          >
            Order reference number :{" "}
            <span className={classes.address}>{eachOrder?.referenceNumber}</span>
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            className={classes.statusAndDate}
          >
            Shipping Address :{" "}
            <span className={classes.address}>{address}</span>
          </Typography>

          {thisOrder?.map((cartItem) => (
            <ListItem
              key={cartItem.id}
              component={Link}
              to={`/products/${cartItem.product_id}`}
            >
              <img
                src={cartItem.media.source}
                alt=""
                className={classes.cartImage}
              />
              <ListItemText
                primary={cartItem.name}
                secondary={`Qty: ${cartItem.quantity}`}
              />
              {/* <ListItemText>{cartItem.quantity}</ListItemText> */}
              <Typography variant="body2" className={classes.priceText}>{`₹ ${
                cartItem.price.raw * cartItem.quantity
              }`}</Typography>
              {/* <ListItemText>{`₹ ${cartItem.price.raw*2}`}</ListItemText> */}
            </ListItem>
          ))}

          <ListItem>
            <ListItemText>
              <Typography variant="h6" color="primary">
                OrderTotal :
              </Typography>
            </ListItemText>

            <Typography variant="h6" align="center" color="primary">
              {`₹ ${calculateTotal(thisOrder)}`}
            </Typography>
          </ListItem>
        </List>
      </Card>
      <Box className={classes.dividerBox}>
            <Divider className={classes.divider}/>
        </Box>
    </div>
  );
};

export default SingleOrder;
