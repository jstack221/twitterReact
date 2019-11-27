import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'; 
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import style from './style'

const Form = ({ classes, users, selectedUser, startDate, endDate, handleDateChange, handleUserChange, formSubmit }) => {
  const [focusedInput, setFocusedInput] = useState();
  return (
    <form className={classes.formControl} noValidate autoComplete="off">
      <div>
        <InputLabel id="user-select-label">Select User</InputLabel>
        <div className={classes.searchParent}>
        <div className={classes.searchField}>
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
        </div>

        <div className={classes.searchField}>
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
        </div>

        <div className={classes.searchField}>
          <Button className={classes.root} onClick={formSubmit}>SUBMIT</Button>
        </div>
        </div>
      </div>
    </form>
  );
};

export default withStyles(style, { withTheme: true })(Form);