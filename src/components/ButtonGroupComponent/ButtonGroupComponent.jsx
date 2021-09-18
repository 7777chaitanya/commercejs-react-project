import React, {useState} from 'react';
import useStyles from "./styles.js"
import { Box, Button, ButtonGroup } from '@material-ui/core';
import Orders from "../Orders/Orders";
import Addresses from "../Addresses/Addresses"

const ButtonGroupComponent = ({userDetails, fetchUserDetails}) => {
    const classes = useStyles();
    
    const [currentTab, setCurrentTab] = useState("Your details")

    const handleCurrentTabChange = (value) => {
        setCurrentTab(value);
      }
    return (
        <>
        <Box className={classes.buttonGroup}>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="contained primary button group"
          fullWidth={true}
        >
          <Button className={classes.eachButtonInButtonGroup} onClick={() => handleCurrentTabChange("Your details")}>Your Details</Button>
          <Button className={classes.eachButtonInButtonGroup} onClick={() => handleCurrentTabChange("Orders")}>Orders</Button>
          <Button className={classes.eachButtonInButtonGroup} onClick={() => handleCurrentTabChange("Addresses")}>Addresses</Button>
        </ButtonGroup>
      </Box>

      <Box>
        {/* {currentTab==="posts" && <MyPosts2 />} */}
        {currentTab==="Orders" && <Orders userDetails={userDetails} fetchUserDetails={fetchUserDetails} />}
        {currentTab==="Addresses" && <Addresses />}
        
      </Box>
      <h1>{currentTab}</h1>
    
    </>
    )
}

export default ButtonGroupComponent
