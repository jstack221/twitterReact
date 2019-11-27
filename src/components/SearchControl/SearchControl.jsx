import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'; 
import TextField from '@material-ui/core/TextField';
import style from './style'

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

export default withStyles(style, { withTheme: true })(SearchControl);