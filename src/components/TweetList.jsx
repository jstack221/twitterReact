import React from 'react';
import { withStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    '& > *': {
      margin: 12,
      width: 200,
    },
  },
  table: {
    minWidth: 650,
  },
});

const TweetList = ({ classes, tweets, showDetails }) => (
  <Paper className={classes.root}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Tweet</TableCell>
          <TableCell align="right">Likes</TableCell>
          <TableCell align="right">Replies</TableCell>
          <TableCell align="right">Retweets</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tweets.map(tweet => (
          <TableRow key={tweet.id}>
            <TableCell component="th" scope="row">
              {tweet.text}
            </TableCell>
            <TableCell align="right">{tweet.favorite_count}</TableCell>
            <TableCell align="right">{tweet.reply_count}</TableCell>
            <TableCell align="right">{tweet.retweet_count}</TableCell>
            <TableCell align="right">
            <Button onClick={showDetails(tweet.id)} size="small" color="primary">
              View
            </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default withStyles(styles, { withTheme: true })(TweetList);