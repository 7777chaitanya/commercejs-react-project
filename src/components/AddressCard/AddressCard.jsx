import React,{useContext} from "react";
import useStyles from "./styles";
import {
  ListItem,
  List,
  ListItemText,
  Typography,
  Card,
  Box,
  IconButton,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { CurrentUserDetailsContext } from "../../contexts/userDetails";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";



const AddressCard = ({ eachAddress }) => {
  console.log("eachAddresss => ", eachAddress);
  const classes = useStyles();
  const [currentUserDoc, setCurrentUserDoc] = useContext(CurrentUserDetailsContext);


  let address = `${eachAddress?.firstName} ${eachAddress?.lastName} , 
                 ${eachAddress?.address}, 
                 ${eachAddress?.city}, 
                 ${eachAddress?.selectedShippingSubdivision}, 
                 ${eachAddress?.selectedShippingCountry}, 
                 Postalcode : ${eachAddress?.postalCode}
                 Email : ${eachAddress?.email}`;
  console.log("eachaddress => ", address);

  

  const handleAddressDelete = () => {
    
    setCurrentUserDoc(prevState => {
        let currentUserDocCopy = {...prevState};
        let filteredCurrentUserDocaddressesCopy = currentUserDocCopy.addresses.filter(oneAddress => eachAddress?.address!==oneAddress?.address);
        currentUserDocCopy.addresses=[...filteredCurrentUserDocaddressesCopy];
        
        return {...currentUserDocCopy};

    });
    const handleAddressDeleteFromFirestore =async () => {
        const currentUserDocRef = doc(db, "customerDetails", currentUserDoc?.email);

        await updateDoc(currentUserDocRef, {
            addresses: arrayRemove({...eachAddress})
        });
        
    }
    handleAddressDeleteFromFirestore();


    
  }

  return (
    <>
      <Card className={classes.root}>
        <Box className={classes.addressBox}>
          <Typography variant="body1" display="inline">
            {eachAddress?.firstName} {eachAddress?.lastName}
          </Typography>
          {/* <Typography variant="body1" display >{eachAddress?.lastName}</Typography> */}
          <Typography variant="body1">{eachAddress?.address}</Typography>
          <Typography variant="body1">{eachAddress?.city}</Typography>
          <Typography variant="body1">
            {eachAddress?.selectedShippingSubdivision}
          </Typography>
          <Typography variant="body1">
            {eachAddress?.selectedShippingCountry}
          </Typography>
          <Typography variant="body1">
            Postalcode : {eachAddress?.postalCode}
          </Typography>
          <Typography variant="body1">Email : {eachAddress?.email}</Typography>
        </Box>
        <Box className={classes.addressDeleteIcon}>
          <IconButton color="secondary" aria-label="delete the address"  onClick={handleAddressDelete}>
            <DeleteForeverIcon/>
          </IconButton>
        </Box>
      </Card>
    </>
  );
};

export default AddressCard;
