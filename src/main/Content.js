import React from 'react';
import { fetchTweets, fetchUser } from '../actions';
import { withStyles } from '@material-ui/core/styles'; 
import { connect } from 'react-redux'
import Form from './Form';
import SearchTweets from './SearchTweets';
import Tweet from './Tweet';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import UserDetail from './UserDetail';

const styles = theme => ({
  table: {
    minWidth: 650,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  headColor: {
    color: '#3f51b5'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Content extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
       userId: "",
       startDate: "",
       endDate: "",
       focusedInput: false,
       tweetId: null,
       text: ""
    }
  }

  handleSubmit = (event) => {
    const { props,state } = this
    const { getTweets, getUser } = props
    const { userId, text } = state
    var startDate = this.state.startDate && this.state.startDate.format("MM/DD/YYYY")
    var endDate = this.state.endDate && this.state.endDate.format("MM/DD/YYYY")
    console.warn("textssssssss", this.state.text)
    getTweets( {userId: userId, startDate: startDate, endDate: endDate, text: text} )
    getUser(userId)
    // this.state.endDate.format("DD/MM/YYYY")
  }

  showTweet = (tweetId) => {
    this.setState({ tweetId: tweetId })
  }

  setUserState = (userId) => {
    this.setState({userId: userId});
  }

  setTextState = (text) => {
    this.setState({text: text})
  }

  handleDateChange = ({startDate, endDate}) => {
    this.setState({startDate: startDate, endDate: endDate})
  }

  render(){
    const { classes, tweets } = this.props;
    if(this.state.tweetId){
      return (
        <Tweet 
          tweetId={this.state.tweetId} 
          userId={this.state.userId}
        /> 
      )
    } else{
      return (
        <React.Fragment>
          <Form 
            handleSubmit={this.handleSubmit}
            setUserState={this.setUserState}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            userId={this.state.userId}
            handleDateChange={this.handleDateChange}
            setTextState={this.setTextState}
          />
          <UserDetail
            userId={this.state.userId} 
          />
          <SearchTweets 
            handleSubmit={this.handleSubmit}
            text={this.state.text}
            setTextState={this.setTextState}
            tweets={this.props.tweets} 
          />

          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tweet</TableCell>
                  <TableCell align="right">Likes</TableCell>
                  <TableCell align="right">Replys</TableCell>
                  <TableCell align="right">Retweets</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tweets && tweets.map(tweet => (
                  <TableRow key={tweet.id}>
                    <TableCell component="th" scope="row">
                      {tweet.text}
                    </TableCell>
                    <TableCell align="right">{tweet.favorite_count}</TableCell>
                    <TableCell align="right">{tweet.reply_count}</TableCell>
                    <TableCell align="right">{tweet.retweet_count}</TableCell>
                    <TableCell align="right">
                    <Button onClick={() => { this.showTweet(tweet.id) }} size="small" color="primary">
                      View
                    </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({ tweets: state.tweets } )

const mapDispatchToProps = dispatch => (
	{
    getTweets: data => dispatch( fetchTweets( data ) ),
    getUser: data => dispatch( fetchUser( data ) )
	}
)

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(styles)(Content))