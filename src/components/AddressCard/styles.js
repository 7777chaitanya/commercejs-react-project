import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root : {
        display : "flex",
       
        marginBottom : "2rem",
        [theme.breakpoints.down("sm")]: {
            width  : "90vw",
            
          },
          [theme.breakpoints.up("sm")]: {
            width : "40vw",
          },
          paddingTop : "1rem",
          paddingBottom : "1rem"
    },
    addressBox:{
        paddingLeft : "2rem",
        flex : 8
    },
    addressDeleteIcon:{
        flex : 2,
       marginTop : "auto",
       marginBottom : "auto",
       marginRight : "2rem",
       [theme.breakpoints.down("sm")]: {
        marginRight  : "1rem",
        
      },
    }
}));

export default useStyles;