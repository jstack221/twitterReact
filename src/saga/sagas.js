import { fork,all } from 'redux-saga/effects'
import { watchListUser, watchListTweets, watchTweetDetails, watchUserDetails }  from './main'

export default function* sagas() {
  yield all ([
    fork( watchListUser ),
    fork( watchListTweets ),
    fork( watchTweetDetails ),
    fork( watchUserDetails ),
  ])
}