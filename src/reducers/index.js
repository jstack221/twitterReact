import { USERS_LIST_REQUEST, USERS_LIST_SUCCESS, USERS_LIST_ERROR,
  TWEETS_LIST_SUCCESS, TWEETS_LIST_ERROR, FETCH_TWEETS, 
  TWEET_DETAILS_SUCCESS, TWEET_DETAILS_ERROR, FETCH_TWEET	} from "../actionTypes";

const initialState = {
	url: '',
	loading: false,
	error: false,
  users: [],
  tweets: [],
  tweet: ''
};
export function reducer (state = initialState, action){
	switch (action.type) {
		case USERS_LIST_REQUEST:
			return {
        ...state,
				url: '',
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
				url: '',
				loading: false,
				error: true,
      };

    case FETCH_TWEETS:
			return {
        ...state,
				url: '',
				loading: true,
				error: false,
			};
		case TWEETS_LIST_SUCCESS:
			return {
        ...state,
				tweets: action.data.results,
				loading: false,
				error: false,
			};
		case TWEETS_LIST_ERROR:
			return {
        ...state,
				url: '',
				loading: false,
				error: true,
      };

      case FETCH_TWEET:
        return {
          ...state,
          url: '',
          loading: true,
          error: false,
        };
      case TWEET_DETAILS_SUCCESS:
        return {
          ...state,
          tweet: action.data,
          loading: false,
          error: false,
        };
      case TWEET_DETAILS_ERROR:
        return {
          ...state,
          url: '',
          loading: false,
          error: true,
        };
      
		default:
			return state;
	}
};