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
  constructor(props) {
    super(props);
  
    this.state = {
       userId: "",
       stateDate: "",
       endDate: "",
       focusedInput: false
    }
 }

  componentDidMount(){
    this.props.getUsers()
  }

  componentDidUpdate(){
		console.log( 'propspropspropspropsprops', this.props )
	}

	handleSubmit = () => {
    const { props,state } = this
    const { getTweets } = props
    const { userId } = state
    console.log( 'ssssssssssssssoihfjhfdfhdskhfdskfhdsfhdskf',this.state.userId, typeof ( this.state.userId ) )
    getTweets( userId )
    // this.state.endDate.format("DD/MM/YYYY")
  }
  
  handeUserChange = (event) => {
    this.setState({userId: event.target.value});
  }
  
  render(){
    console.log( 'usersssssssssss',this.props.users )
    const { classes } = this.props;
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
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/>

        <Button className={classes.root} onClick={this.handleSubmit}>SUBMIT</Button>
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

// export default withStyles(styles)(Form);
export default connect( mapStateToProps, mapDispatchToProps )(withStyles(styles)(Form))