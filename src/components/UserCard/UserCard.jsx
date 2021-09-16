import React from "react";
import { CardHeader, Avatar, IconButton } from '@material-ui/core';
import { Card } from '@material-ui/core';
import useStyles from './styles.js';
import {Link} from "react-router-dom";


const UserCard = ({item, searchTerm, handleProductClick}) => {
    const classes = useStyles();
    
  return (
    <Card className={classes.root}>
      {(item?.avatarUrl!=="hi") ? (
      <CardHeader
        onClick={handleProductClick}
        component={Link}
        to={`/products/${item.id}`}
        avatar={
          
            <Avatar
              alt={item?.name}
              src={item?.media?.source}
              className={classes.avatarSize}
            />
        
        }
      
        title={item.name}
      />) :
      (
        <CardHeader
        // onClick={handleProductClick}
        // component={Link}
        // to={`/products/${item.id}`}
        // avatar={
          
        //     <Avatar
        //       alt={item?.name}
        //       src={item?.media?.source}
        //       className={classes.avatarSize}
        //     />
        
        // }
      
        title={item.name}
      />
      )}
    </Card>
  );
};

export default UserCard;
