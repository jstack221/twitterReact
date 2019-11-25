// Store

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { reducer } from '../reducers'; 
import sagas from '../saga/sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas)

export {
  store
}
    