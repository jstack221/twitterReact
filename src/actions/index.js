import { USERS_LIST_REQUEST, USERS_LIST_SUCCESS, USERS_LIST_ERROR, FETCH_USERS } from "../actionTypes";

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

export {
	requestUsers,
	requestUsersSuccess,
	requestUsersError,
	fetchUsers
}