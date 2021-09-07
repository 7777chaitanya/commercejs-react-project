import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Box, IconButton, Tooltip, Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";
import CopyrightIcon from "@material-ui/icons/Copyright";

const Footer = () => {
  const classes = useStyles();
  const location = useLocation();
  return (
    ((location.pathname!=="/signup") && (location.pathname!=="/login"))  ?
    (<Box className={classes.footerBackground}>
      <Typography align="center" display="block" variant="body1">
        Made with{" "}
        <Box display="inline" className={classes.span}>
          {"</>"}
        </Box>{" "}
        by Chaitanya
      </Typography>
      <Box className={classes.socialMediaIcons}>
        <a href="https://github.com/Chaitanya7666" target="_blank">
          <Tooltip title="GitHub">
            <IconButton aria-label="github" color="primary">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </a>
        <a
          href="https://www.linkedin.com/in/chaitanya-j-1799791b4/"
          target="_blank"
        >
          <Tooltip title="Linkedin">
            <IconButton aria-label="linkedin" color="primary">
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </a>

        <a href="https://twitter.com/chaitanya7666" target="_blank">
          <Tooltip title="Twitter">
            <IconButton color="primary" aria-label="twitter">
              <TwitterIcon />
            </IconButton>
          </Tooltip>
        </a>
      </Box>
      <Box className={classes.copyrightOuterBox}>
        <Box className={classes.copyrightInnerBoxLeft}>
        <CopyrightIcon className={classes.copyrightIcon}/>{" "}
        </Box>
        <Box className={classes.copyrightInnerBoxRight}>
          <Typography variant="body2">2021 HardwareHub</Typography>
        </Box>
      </Box>
    </Box>) : null
  );
};

export default Footer;
