import { put, takeEvery } from 'redux-saga/effects'

import {
  FETCH_USERS,
  FETCH_USER
} from "../actionTypes";
import {
  requestUsersSuccess,
  requestUsersError,
  requestUserSuccess,
  requestUserError
} from "../actions";
import fetchRequest from '../utils/request'
import API_ENDPOINT from '../constants/apiEndpoint'

function* userListWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserList);
}

function* fetchUserList( action ) {
  try {
    const data = yield fetchRequest( API_ENDPOINT )
    yield put(requestUsersSuccess(data));
  } catch (error) {
    yield put(requestUsersError());
  }
}

function* userDetailsWatcher() {
  yield takeEvery(FETCH_USER, fetchUserDetails);
}

function* fetchUserDetails(action) {
  try {
    const data = yield fetchRequest( `${API_ENDPOINT}/${action.data}` )
    yield put(requestUserSuccess(data));
  } catch (error) {
    yield put(requestUserError());
  }
}

export {
  userListWatcher,
  userDetailsWatcher
}
