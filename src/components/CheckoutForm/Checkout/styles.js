import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    checkoutOuterMostBox:{
      marginTop : "4.5rem"
    }
  }));

export default useStyles;
  