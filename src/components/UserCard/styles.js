import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop : "0.5rem",
      },
      productname:{
        textDecoration : "none",
        color : "black",
        "&:hover": {
          // backgroundColor: 'rgb(7, 177, 77, 0.42)',
          backgroundColor : "rgb(63,81,181,0.5)"

        }
      }

})

export default useStyles;