import {
  TWEETS_LIST_SUCCESS,
  TWEETS_LIST_ERROR,
  FETCH_TWEETS, 
  TWEET_DETAILS_SUCCESS,
  TWEET_DETAILS_ERROR,
  FETCH_TWEET,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: false,
  tweets: [],
  currentTweet: null,
  currentRange: {
    start: null,
    end: null,
  },
};

const tweetReducer = (state = initialState, action) => {
	switch (action.type) {
    case FETCH_TWEETS:
      const { startDate, endDate } = action.data;
			return {
        ...state,
				loading: true,
        error: false,
        currentRange: {
          start: startDate,
          end: endDate,
        }
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
				loading: false,
				error: true,
      };
    case FETCH_TWEET:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case TWEET_DETAILS_SUCCESS:
      return {
        ...state,
        currentTweet: action.data,
        loading: false,
        error: false,
      };
    case TWEET_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
		default:
			return state;
	}
};

export default tweetReducer;