import { FETCH_USER, FETCH_USERS, FETCH_TWEETS, FETCH_TWEET } from "../actionTypes";
import { requestUsersSuccess, requestUsersError, 
          requestTweetsSuccess,requestTweetsError, 
          requestTweetSuccess, requestTweetError,
          requestUserSuccess, requestUserError} from "../actions";
import { call ,put, takeEvery } from 'redux-saga/effects'

  function* watchListUser() {
    yield takeEvery(FETCH_USERS, watchListUserAsync);
  }
  
  function* watchListUserAsync() {
    try {
      // yield put(requestUsers());
      const data = yield call(() => {
        return fetch( 'http://localhost:5000/accounts' )
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
  
  function* watchTweetsAsync(action) {
    try {
      const data = yield call(() => {
        return fetch( `http://localhost:5000/accounts/${action.data.userId}/tweets?start_date=${action.data.startDate}&end_date=${action.data.endDate}&text=${action.data.text}` )
                .then(res => res.json())
        }
      )
      yield put(requestTweetsSuccess(data));
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
        return fetch( `http://localhost:5000/accounts/${action.data.userId}/tweets/${action.data.tweetId}` )
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
        return fetch( `http://localhost:5000/accounts/${action.data}` )
                .then(res => res.json())
        }
      )
      console.log("245234234234234234234234234", data)
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


  