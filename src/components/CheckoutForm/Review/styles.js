import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    reviewList:{
        [theme.breakpoints.down("sm")]: {
          // flexDirection: "column",
        },
        [theme.breakpoints.up("sm")]: {
          marginLeft : "10rem",
          marginRight : "10rem"
        },
      }
}))

export default useStyles;