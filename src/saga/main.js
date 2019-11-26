import { FETCH_USERS, FETCH_TWEETS } from "../actionTypes";
import { requestUsersSuccess, requestUsersError, requestTweetsSuccess,requestTweetsError } from "../actions";
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
        return fetch( `http://localhost:5000/accounts/${action.data.userId}/tweets?start_date=${action.data.startDate}&end_date=${action.data.endDate}` )
                .then(res => res.json())
        }
      )
      yield put(requestTweetsSuccess(data));
    } catch (error) {
      yield put(requestTweetsError());
    }
  }


  export {   
    watchListUser,
    watchListTweets,
  }


  