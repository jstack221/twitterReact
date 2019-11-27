import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'; 
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 33,
    padding: '0 30px',
    marginLeft: '5px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  selectField: {
    width: '100px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});

const Form = ({ classes, users, selectedUser, startDate, endDate, handleDateChange, handleUserChange, formSubmit }) => {
  const [focusedInput, setFocusedInput] = useState();
  return (
    <form className={classes.formControl} noValidate autoComplete="off">
      <div>
        <InputLabel id="user-select-label">Select User</InputLabel>
        <Select
          className={classes.selectField}
          labelId="user-select-label"
          id="user-select"
          value={selectedUser}
          displayEmpty
          onChange={handleUserChange}
        >
          <MenuItem value="">Select User</MenuItem>
          {users.map(user =>
            <MenuItem key={user.id} value={user.id}>{user.screen_name}</MenuItem>
          )}
        </Select>

        <DateRangePicker
          startDate={startDate}
          isOutsideRange={() => false}
          startDateId="startDate"
          endDate={endDate}
          endDateId="endDate"
          onDatesChange={handleDateChange} 
          focusedInput={focusedInput}
          onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        />

        <Button className={classes.root} onClick={formSubmit}>SUBMIT</Button>
      </div>
    </form>
  );
};

export default withStyles(styles, { withTheme: true })(Form);