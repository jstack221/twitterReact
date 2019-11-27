import * as actions from "../actionTypes";

const requestUsers = () => {
	return { type: actions.USERS_LIST_REQUEST }
};

const requestUsersSuccess = (data) => {
	return { type: actions.USERS_LIST_SUCCESS, data }
};

const requestUsersError = () => {
	return { type: actions.USERS_LIST_ERROR }
};

const fetchUsers = () => {
	return { type: actions.FETCH_USERS }
};

const requestTweetsSuccess = (data) => {
	return { type: actions.TWEETS_LIST_SUCCESS, data }
};

const requestTweetsError = () => {
	return { type: actions.TWEETS_LIST_ERROR }
};

const fetchTweets = ( data ) => {
	return { type: actions.FETCH_TWEETS, data }
};

const requestTweetSuccess = (data) => {
	return { type: actions.TWEET_DETAILS_SUCCESS, data }
};

const requestTweetError = () => {
	return { type: actions.TWEET_DETAILS_ERROR }
};

const fetchTweet = ( data ) => {
	return { type: actions.FETCH_TWEET, data }
};

const requestUserSuccess = (data) => {
	return { type: actions.USER_DETAILS_SUCCESS, data }
};

const requestUserError = () => {
	return { type: actions.USER_DETAILS_ERROR }
};

const fetchUser = ( data ) => {
	return { type: actions.FETCH_USER, data }
};

export {
	requestUsers,
	requestUsersSuccess,
	requestUsersError,
	fetchUsers,
	requestTweetsSuccess,
	requestTweetsError,
	fetchTweets,
	fetchTweet,
	requestTweetSuccess,
	requestTweetError,
	requestUserSuccess,
	requestUserError,
	fetchUser
}