import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  table: {
    maxWidth: 400,
  },
});

const Tweet = ({ classes, tweet, goBack }) => (
  <div>
    <Typography variant="h5" gutterBottom>
      <IconButton  onClick={goBack} aria-label="back">
        <ArrowBackIcon />
      </IconButton>
      Tweet Details
    </Typography>
    <Paper className={classes.root}>
      <Typography component="p">
        {tweet.text}
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
        </TableHead>
        <TableBody>
          <TableRow key={tweet.id}>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow key={tweet.id}>
            <TableCell>Total Reply</TableCell>
            <TableCell>{tweet.reply_count}</TableCell>
          </TableRow>
          <TableRow key={tweet.id}>
            <TableCell>Total Retweets</TableCell>
            <TableCell>{tweet.retweet_count}</TableCell>
          </TableRow>
          <TableRow key={tweet.id}>
            <TableCell>Toatal Reached</TableCell>
            <TableCell>{tweet.reach}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default withStyles(styles)(Tweet);