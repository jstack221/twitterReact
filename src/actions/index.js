import { USERS_LIST_REQUEST, USERS_LIST_SUCCESS, USERS_LIST_ERROR, FETCH_USERS, 
			TWEETS_LIST_SUCCESS, TWEETS_LIST_ERROR, FETCH_TWEETS, 
			FETCH_TWEET, TWEET_DETAILS_SUCCESS, TWEET_DETAILS_ERROR,
			FETCH_USER, USER_DETAILS_SUCCESS, USER_DETAILS_ERROR } from "../actionTypes";

const requestUsers = () => {
	return { type: USERS_LIST_REQUEST }
};

const requestUsersSuccess = (data) => {
	return { type: USERS_LIST_SUCCESS, data }
};

const requestUsersError = () => {
	return { type: USERS_LIST_ERROR }
};

const fetchUsers = () => {
	return { type: FETCH_USERS }
};

const requestTweetsSuccess = (data) => {
	return { type: TWEETS_LIST_SUCCESS, data }
};

const requestTweetsError = () => {
	return { type: TWEETS_LIST_ERROR }
};

const fetchTweets = ( data ) => {
	return { type: FETCH_TWEETS, data }
};

const requestTweetSuccess = (data) => {
	return { type: TWEET_DETAILS_SUCCESS, data }
};

const requestTweetError = () => {
	return { type: TWEET_DETAILS_ERROR }
};

const fetchTweet = ( data ) => {
	return { type: FETCH_TWEET, data }
};

const requestUserSuccess = (data) => {
	return { type: USER_DETAILS_SUCCESS, data }
};

const requestUserError = () => {
	return { type: USER_DETAILS_ERROR }
};

const fetchUser = ( data ) => {
	return { type: FETCH_USER, data }
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