import { FETCH_USERS } from "../actionTypes";
import { requestUsers, requestUsersSuccess, requestUsersError } from "../actions";
import { call ,put, takeEvery, all } from 'redux-saga/effects'


export function* watchListUser() {
    yield takeEvery(FETCH_USERS, watchListUserAsync);
  }
  
  function* watchListUserAsync() {
    try {
     console.log( 'ssssssssssss' )
      // yield put(requestUsers());
      const data = yield call(() => {
        // return fetch('https://b6344426.ngrok.io/accounts')
        return fetch( 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole' )
                .then(res => res.json())
        }
      )
      console.log( 'datassssssss', data )
      yield put(requestUsersSuccess(data));
    } catch (error) {
      yield put(requestUsersError());
    }
  }