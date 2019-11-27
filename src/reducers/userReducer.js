import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_ERROR,
  FETCH_USER,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: false,
  users: [],
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USERS_LIST_REQUEST:
			return {
        ...state,
				loading: true,
				error: false,
			};
		case USERS_LIST_SUCCESS:
			return {
        ...state,
				users: action.data.results,
				loading: false,
				error: false,
			};
		case USERS_LIST_ERROR:
			return {
        ...state,
				loading: false,
				error: true,
      };
    case FETCH_USER:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        currentUser: action.data,
        loading: false,
        error: false,
      };
    case USER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
		default:
			return state;
	}
};

export default userReducer;