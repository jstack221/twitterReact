import { USERS_LIST_REQUEST, USERS_LIST_SUCCESS, USERS_LIST_ERROR } from "../actionTypes";

const initialState = {
	url: '',
	loading: false,
	error: false,
	users: [],
};
export function reducer (state = initialState, action){
	switch (action.type) {
		case USERS_LIST_REQUEST:
			return {
				url: '',
				loading: true,
				error: false,
			};
		case USERS_LIST_SUCCESS:
			console.log( 'hhhhhhhhhh', action )
			return {
				users: action.data.results,
				loading: false,
				error: false,
			};
		case USERS_LIST_ERROR:
			return {
				url: '',
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};