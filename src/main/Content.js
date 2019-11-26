import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { fetchTweets } from '../actions';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles'; 
import { connect } from 'react-redux'
import Form from './Form';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ForwardIcon from '@material-ui/icons/Forward';
import Tweet from './Tweet';

const styles = theme => ({
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
       tweetId: ""
    }
  }

  handleSubmit = (event) => {
    console.log("submited", event)
    const { props,state } = this
    const { getTweets } = props
    const { userId } = state
    var startDate = this.state.startDate && this.state.startDate.format("MM/DD/YYYY")
    var endDate = this.state.endDate && this.state.endDate.format("MM/DD/YYYY")
    getTweets( {userId: userId, startDate: startDate, endDate: endDate} )
    // this.state.endDate.format("DD/MM/YYYY")
  }

  showTweet = (tweetId) => {
    this.setState({ tweetId: tweetId })
  }

  setUserState = (userId) => {
    this.setState({userId: userId});
  }
  handleDateChange = ({startDate, endDate}) => {
    this.setState({startDate: startDate, endDate: endDate})
  }

  render(){
    const { classes, tweets } = this.props;
    if(this.state.tweetId){
      return (
        <Tweet /> 
      )
    } else{
      return (
        <React.Fragment>
          <CssBaseline />
          <main>
            <Container className={classes.cardGrid} maxWidth="md">
              <Form 
                handleSubmit={this.handleSubmit}
                setUserState={this.setUserState}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                userId={this.state.userId}
                handleDateChange={this.handleDateChange}
              />
                <Grid container spacing={4}>
                  {tweets && tweets.map(tweet => (
                    <Grid conClick={this.showTweet(tweet.id)} item key={tweet.id} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <Typography className={classes.headColor} gutterBottom variant="h5" component="h2">
                            {tweet.text}
                          </Typography>
                          <Typography>
                            Date: {tweet.created_at}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            <ThumbUpIcon /> {tweet.favorite_count}
                          </Button>
                          <Button size="small" color="primary">
                            <ChatBubbleIcon /> {tweet.reply_count}
                          </Button>
                          <Button size="small" color="primary">
                            <ForwardIcon /> {tweet.retweet_count}
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
            </Container>
          </main>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({ tweets: state.tweets } )

const mapDispatchToProps = dispatch => (
	{
    getTweets: data => dispatch( fetchTweets( data ) )
	}
)

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(styles)(Content))