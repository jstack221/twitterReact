import { FETCH_USERS } from "../actionTypes";
import { requestUsersSuccess, requestUsersError } from "../actions";
import { call ,put, takeEvery } from 'redux-saga/effects'


export function* watchListUser() {
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
  