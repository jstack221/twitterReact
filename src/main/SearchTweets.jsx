import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'; 
import { connect } from 'react-redux'
import { fetchUsers, fetchTweets } from '../actions';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
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
    marginTop: '8px'
  },
});

class SearchTweets extends React.Component {
  state = {
    startDate: '',
    endDate: ''
  }
  componentDidMount(){
    this.props.getUsers()
  }

  formSubmit = (event) => {  
    this.props.handleSubmit({text: this.props.text });
  }

  handletextChange = (event) => {
    this.props.setTextState(event.target.value)
  }

  render(){
    const { classes } = this.props;
    // if(this.props.tweets.length > 0){
      return (
        <form className={classes.formControl} noValidate autoComplete="off">
          <div>

          <TextField onChange={this.handletextChange} id="standard-basic" label="Search Tweets" />

          <Button className={classes.button} onClick={this.formSubmit}>SUBMIT</Button>
          
          </div>
        </form>
      );
    // }
  }
}


const mapStateToProps = state => ({ users: state.users, tweets: state.tweets } )

const mapDispatchToProps = dispatch => (
	{
    getUsers: () => dispatch( fetchUsers() ),
    getTweets: data => dispatch( fetchTweets( data ) )
	}
)

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(styles)(SearchTweets))