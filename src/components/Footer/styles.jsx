import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    socialMediaIcons:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    footerBackground :{
        marginTop: "2rem",
       backgroundColor : "lightgray",
       paddingTop:"1rem",
       paddingBottom:"1rem"
    },
    span:{
        color : "darkslateblue",
        fontWeight : "600"
    },
    copyrightOuterBox:{
            display : "flex",
            alignItems:"center",
            justifyContent:"center"
    }
    ,
    copyrightInnerBoxLeft: {

    },
    copyrightInnerBoxRight:{

    }
})

export default useStyles;