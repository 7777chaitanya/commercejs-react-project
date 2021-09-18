import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme =>({
    reviewList:{
        [theme.breakpoints.down("sm")]: {
          // flexDirection: "column",
        },
        [theme.breakpoints.up("sm")]: {
          marginLeft : "10rem",
          marginRight : "10rem"
        },
      },
      root: {
        minWidth: 200,
        marginBottom : "2rem",
        [theme.breakpoints.down("sm")]: {
            // flexDirection: "column",
          },
          [theme.breakpoints.up("sm")]: {
            maxWidth : "80vw"
          },
      },
      value:{
          color : "green"
      },
      date:{
          color : "darkgray"
      },
      address:{
            color : "darkgray"
      },
      cartImage:{
        [theme.breakpoints.down('sm')]: {
            width : "2rem",
            height : "2rem",
            marginRight : "0.5rem"
          },
          [theme.breakpoints.up('sm')]: {
            width : "4rem",
            height : '4rem',
            marginRight : '1rem'
          },
      },
      priceText:{
        [theme.breakpoints.down('sm')]: {
            // width : "2rem",
            // height : "2rem",
            marginLeft : "0.5rem"
          },
          [theme.breakpoints.up('sm')]: {
            // width : "4rem",
            // height : '4rem',
            marginLeft : '1rem'
          },
      },
      statusAndDate:{
          marginLeft : "1rem"
      },
      dividerBox: {
        padding: "1rem",
        width: "fullWidth",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      divider: {
        height: "0.3rem",
        width: "40vw",
        marginBottom :"1rem"
      },

}));

export default useStyles;