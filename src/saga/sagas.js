import { fork,all } from 'redux-saga/effects'
import { userListWatcher, userDetailsWatcher }  from './user'
import { tweetListWatcher, tweetDetailsWatcher }  from './tweet'

export default function* sagas() {
  yield all ([
    fork( userListWatcher ),
    fork( tweetListWatcher ),
    fork( tweetDetailsWatcher ),
    fork( userDetailsWatcher ),
  ])
}