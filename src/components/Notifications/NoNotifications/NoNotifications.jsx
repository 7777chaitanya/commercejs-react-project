import { Box, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from "../styles";
import {Link} from 'react-router-dom';

const NoNotifications = () => {
    const classes = useStyles();
    return (
        <Box className={classes.centerPaper}>
        <Paper className={classes.wishlistPaper} elevation={5}>
          <Box>
            <Typography display="block" variant="h4" align="center">
              Your don't have new notifications
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" display="block">
              <Typography component={Link} to="/" variant="h6" display="inline">
                Click here
              </Typography>{" "}
              to go back to shop
            </Typography>
          </Box>
        </Paper>
      </Box>
    )
}

export default NoNotifications
