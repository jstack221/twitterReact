import { fork,all } from 'redux-saga/effects'
import { watchListUser, watchListTweets, watchTweetDetails }  from './main'

export default function* sagas() {
  yield all ([
    fork( watchListUser ),
    fork( watchListTweets ),
    fork( watchTweetDetails ),
  ])
}