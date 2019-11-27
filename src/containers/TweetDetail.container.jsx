import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTweet } from '../actions';
import Tweet from '../components/Tweet';

class TweetDetailContainer extends Component {
  componentDidMount() {
    const { tweet, getTweet, match } = this.props;
    if (tweet) return;
    getTweet({
      tweetId: match.params.tid,
      userId: match.params.uid,
    });
  }

  goBack = () => {
    const { uid } = this.props.match.params;
    this.props.history.push(`/${uid}/tweets`);
  };

  render() {
    const { tweet } = this.props;
    return (
      tweet ? <Tweet tweet={tweet} goBack={this.goBack} /> : <span>No Tweet to display</span>
    );
  }
}

const mapStateToProps = ({ tweetReducer }) => ({
  tweet: tweetReducer.currentTweet,
});

const mapDispatchToProps = dispatch => ({
  getTweet: data => dispatch(fetchTweet( data ))
});

export default connect(mapStateToProps, mapDispatchToProps)(TweetDetailContainer);