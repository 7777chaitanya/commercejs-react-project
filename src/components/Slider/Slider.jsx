import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default function ContinuousSlider({handleProductsValueChange}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30000);

  const handleChange = (event, newValue) => {

      console.log(newValue);
      handleProductsValueChange(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Tooltip title="LowerPrice">
          <TrendingDownIcon />
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" min={650} max={30000} valueLabelDisplay="auto" color="primary"/>
        </Grid>
        <Grid item>
          <Tooltip title="HigherPrice">
          <TrendingUpIcon />
          </Tooltip>
        </Grid>
      </Grid>
      {/* <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" /> */}
    </div>
  );
}
