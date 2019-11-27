import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { fetchTweets } from '../actions';
import UserDetailContainer from './UserDetail.container';
import SearchControl from '../components/SearchControl/SearchControl';
import TweetList from '../components/TweetList/TweetList';

class TweetContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      currentRange: {
        start: null,
        end: null,
      }
    }
  }

  componentDidMount() {
    const { tweets, getTweets, match, currentRange } = this.props;
    if (tweets && tweets.length) return;
    getTweets({
      user: match.params.uid,
      startDate: currentRange.start,
      endDate: currentRange.end,
    });
  }

  goBack = () => this.props.history.push('/');

  goToTweetDetails = (tweetId) => () => this.props.history.push(`tweets/${tweetId}`);

  onChange = (ev) => {
    const { value } = ev.target;
    this.setState({
      searchText: value,
    });
  }

  onSearchSubmit = () => {
    const { getTweets, match, currentRange } = this.props;
    const { searchText } = this.state;
    getTweets({
      user: match.params.uid,
      text: searchText,
      startDate: currentRange.start,
      endDate: currentRange.end,
    });
  }

  renderTweetList = () => (
    <Fragment>
      <SearchControl 
        handleSubmit={this.onSearchSubmit}
        text={this.state.searchText}
        onChange={this.onChange}
        tweets={this.props.tweets} 
      />
      <TweetList tweets={this.props.tweets} showDetails={this.goToTweetDetails} />
    </Fragment>
  );

  renderNoTweetsMsg = () => (
    <div>
      <span>There are no tweets from the current user in the selected date range!</span>
    </div>
  )

  render() {
    const { tweets, match } = this.props;
    return (
      <Fragment>
        <div>
          <IconButton onClick={this.goBack} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <UserDetailContainer userId={match.params.uid} />
        </div>
        {tweets && tweets.length ? this.renderTweetList() : this.renderNoTweetsMsg()}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ tweetReducer }) => ({
  tweets: tweetReducer.tweets,
  currentRange: tweetReducer.currentRange,
});

const mapDispatchToProps = dispatch => ({
  getTweets: data => dispatch(fetchTweets(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TweetContainer));