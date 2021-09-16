import React, { useContext } from "react";
import useStyles from "./styles";
import UserCard from "../UserCard/UserCard";
import { Card } from "@material-ui/core";



const PopUp = ({ searchTerm, products,handleProductClick }) => {

  const classes = useStyles();
  console.log("products=>", products)


  let filteredArray = [];

  if(searchTerm!==""){
      filteredArray = products.filter(doc => doc.name.toLowerCase().indexOf(searchTerm.toLowerCase().trim()) !== -1)
  }
 
  console.log("filtered Array =>", filteredArray);
  if (filteredArray.length === 0 && searchTerm !== "") {
    filteredArray = [{name : "No results found!", avatarUrl : "hi"}];
  }
  if (filteredArray.length === 0 && searchTerm === "") {
    filteredArray = [{name : "Enter a word to Search!", avatarUrl : "hi"}];
  }

  
  return (
    <Card className={classes.root}>
      {filteredArray.map((item) => (
        <UserCard item={item} searchTerm={searchTerm} handleProductClick={handleProductClick}></UserCard>
      ))}
    </Card>
  );
};

export default PopUp;
