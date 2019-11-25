import { fork,all } from 'redux-saga/effects'
import { watchListUser, watchListTweets }  from './main'

export default function* sagas() {
  yield all ([
    fork( watchListUser ),
    fork( watchListTweets ),
  ])
}