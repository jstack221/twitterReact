import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'; 
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux'
import { fetchUsers, fetchTweets } from '../actions';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

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

class Form extends React.Component {
  state = {
    startDate: '',
    endDate: ''
  }
  componentDidMount(){
    this.props.getUsers()
  }

  formSubmit = (event) => {  
    console.log("asdasdasd", this.props.user)
    this.props.handleSubmit({userId: this.props.userId });
  }

  handeUserChange = (event) => {
    this.props.setUserState(event.target.value)
  }

  render(){
    const { classes } = this.props;
    console.log("SDSDSDDS", this.props.startDate)
    return (
      <form className={classes.formControl} noValidate autoComplete="off">
        <div>

          <InputLabel id="demo-simple-select-label">Select User</InputLabel>
          <Select
            className={classes.selectField}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={this.handeUserChange}
          >
            {this.props.users.map(user => (
              <MenuItem key={user.id} value={user.id}>{user.screen_name}</MenuItem>
            ))}
          </Select>

          <DateRangePicker
            startDate={this.props.startDate}
            isOutsideRange={() => false}
            startDateId="your_unique_start_date_id"
            endDate={this.props.endDate}
            endDateId="your_unique_end_date_id"
            onDatesChange={({ startDate, endDate }) => this.props.handleDateChange({ startDate, endDate })} 
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />

          <Button className={classes.root} onClick={this.formSubmit}>SUBMIT</Button>
        
        </div>
      </form>
      );
  }
}


const mapStateToProps = state => ({ users: state.users, tweets: state.tweets } )

const mapDispatchToProps = dispatch => (
	{
    getUsers: () => dispatch( fetchUsers() ),
    getTweets: data => dispatch( fetchTweets( data ) )
	}
)

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(styles)(Form))