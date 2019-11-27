import React from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = () => ({
  card: {
    maxWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const UserDetails = ({ classes, user }) => (
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
        Total Likes: {user.total_likes}
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
);

export default withStyles(styles)(UserDetails);