import React from 'react';
import 'react-dates/initialize';
import { fetchTweet } from '../actions';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ForwardIcon from '@material-ui/icons/Forward';
import Typography from '@material-ui/core/Typography';

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

class Tweet extends React.Component {
  
  componentDidMount(){
    this.props.getTweet({tweetId: this.props.tweetId, userId: this.props.userId})
  }

  render(){
    const { classes, tweet } = this.props;
    return (
      <Grid container spacing={4}>
        <Grid item key={tweet.id} xs={12} sm={6} md={4}>
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
      </Grid>
          
      );
  }
}



const mapStateToProps = state => ({ tweet: state.tweet } )

const mapDispatchToProps = dispatch => (
	{
    getTweet: data => dispatch( fetchTweet( data ) )
	}
)

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(styles)(Tweet))