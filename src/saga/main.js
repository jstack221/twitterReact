import {
  FETCH_USER,
  FETCH_USERS,
  FETCH_TWEETS,
  FETCH_TWEET
} from "../actionTypes";
import {
  requestUsersSuccess,
  requestUsersError,
  requestTweetsSuccess,
  requestTweetsError,
  requestTweetSuccess,
  requestTweetError,
  requestUserSuccess,
  requestUserError
} from "../actions";
import { call ,put, takeEvery } from 'redux-saga/effects'

// TODO: This should be picked up from config or env
const API_ENDPOINT = 'http://localhost:5000/accounts';

function* watchListUser() {
  yield takeEvery(FETCH_USERS, watchListUserAsync);
}

function* watchListUserAsync() {
  try {
    const data = yield call(() => {
      return fetch(API_ENDPOINT)
              .then(res => res.json())
      }
    )
    yield put(requestUsersSuccess(data));
  } catch (error) {
    yield put(requestUsersError());
  }
}

function* watchListTweets() {
  yield takeEvery(FETCH_TWEETS, watchTweetsAsync);
}

function* watchTweetsAsync({ data }) {
  try {
    const { user, startDate, endDate, text } = data;
    let dateQueryParams = '';
    if (startDate && endDate) {
      dateQueryParams = `start_date=${startDate}&end_date=${endDate}`;
    }

    let textQueryParams = '';
    if (text) {
      textQueryParams = `text=${text}`;
    }

    let URL = `${API_ENDPOINT}/${user}/tweets`;
    if (dateQueryParams || textQueryParams) {
      URL += `?`;
      if (dateQueryParams && textQueryParams) URL += `${dateQueryParams}&${textQueryParams}`;
      else if (dateQueryParams) URL += dateQueryParams;
      else URL += textQueryParams;
    }
    const response = yield call(() => {
      return fetch(URL)
      .then(res => res.json())
    });
    yield put(requestTweetsSuccess(response));
  } catch (error) {
    yield put(requestTweetsError());
  }
}

function* watchTweetDetails() {
  yield takeEvery(FETCH_TWEET, watchTweetAsync);
}

function* watchTweetAsync(action) {
  try {
    const data = yield call(() => {
      return fetch( `${API_ENDPOINT}/${action.data.userId}/tweets/${action.data.tweetId}` )
              .then(res => res.json())
      }
    )
    yield put(requestTweetSuccess(data));
  } catch (error) {
    yield put(requestTweetError());
  }
}

function* watchUserDetails() {
  yield takeEvery(FETCH_USER, watchUserAsync);
}

function* watchUserAsync(action) {
  try {
    const data = yield call(() => {
      return fetch( `${API_ENDPOINT}/${action.data}` )
              .then(res => res.json())
      }
    )
    yield put(requestUserSuccess(data));
  } catch (error) {
    yield put(requestUserError());
  }
}


export {   
  watchListUser,
  watchListTweets,
  watchTweetDetails,
  watchUserDetails
}


  