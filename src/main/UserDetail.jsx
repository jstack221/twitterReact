import React from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import { connect } from 'react-redux'
import { fetchUser } from '../actions';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  card: {
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Form extends React.Component {
  state = {
    startDate: '',
    endDate: ''
  }
  componentDidMount(){
    this.props.getUser(this.props.userId)
    
  }

componentDidUpdate() {
  console.warn("===============USER DETAILSSS===============", this.props.user)
}
  render(){
    const { classes, user } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    if(user){
      return (

        <Card className={classes.card} >
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              User Details
            </Typography>
            <Typography variant="h5" component="h2">
              {user.screen_name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {user.description}
            </Typography>
            <Typography variant="body2" component="p">
              Total Likes: {user.favourites_count}
            </Typography>

            <Typography variant="body2" component="p">
              Total Followers: {user.followers_count}
            </Typography>

            <Typography variant="body2" component="p">
              Total Retweets: {user.total_retweet}
            </Typography>

            <Typography variant="body2" component="p">
              Total Friends: {user.friends_count}
            </Typography>
          </CardContent>
        </Card>
        )
    }else{
      return(
        <div></div>
      )
    }
  }
}


const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = dispatch => (
	{
    getUser: ( data ) => dispatch( fetchUser( data ) )
	}
)

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(styles)(Form))