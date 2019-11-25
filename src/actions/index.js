import { USERS_LIST_REQUEST, USERS_LIST_SUCCESS, USERS_LIST_ERROR, FETCH_USERS, TWEETS_LIST_SUCCESS, TWEETS_LIST_ERROR, FETCH_TWEETS } from "../actionTypes";

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

export {
	requestUsers,
	requestUsersSuccess,
	requestUsersError,
	fetchUsers,
	requestTweetsSuccess,
	requestTweetsError,
	fetchTweets
}