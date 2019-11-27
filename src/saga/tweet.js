import { call, put, takeEvery } from 'redux-saga/effects'

import {
  FETCH_TWEETS,
  FETCH_TWEET
} from "../actionTypes";
import {
  requestTweetsSuccess,
  requestTweetsError,
  requestTweetSuccess,
  requestTweetError,
} from "../actions";
import fetchRequest from '../utils/request'
import API_ENDPOINT from '../constants/apiEndpoint'

function* tweetListWatcher() {
  yield takeEvery(FETCH_TWEETS, fetchTweetWorker);
}

function* fetchTweetWorker({ data }) {
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

function* tweetDetailsWatcher() {
  yield takeEvery(FETCH_TWEET, fetchTweetDetails);
}

function* fetchTweetDetails(action) {
  try {
    const data = yield fetchRequest( `${API_ENDPOINT}/${action.data.userId}/tweets/${action.data.tweetId}` )
    yield put(requestTweetSuccess(data));
  } catch (error) {
    yield put(requestTweetError());
  }
}

export {
  tweetListWatcher,
  tweetDetailsWatcher
}
