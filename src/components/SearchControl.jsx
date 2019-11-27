import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'; 
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  pullRight:{
    float: 'right',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 33,
    padding: '0 30px',
    marginLeft: '5px',
    marginTop: '14px'
  },
});

const SearchControl = ({ classes, onChange, handleSubmit, text }) => (
  <form className={classes.formControl} noValidate autoComplete="off">
    <div className={classes.pullRight}>
      <TextField
        onChange={onChange}
        id="search-tweets"
        label="Search Tweets"
        value={text}
      />
      <Button
        className={classes.button}
        onClick={handleSubmit}
      >
        SUBMIT
      </Button>
    </div>
  </form>
);

export default withStyles(styles)(SearchControl);