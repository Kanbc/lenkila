import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'
import * as allReducers from '../reducers'
import user_managementSaga,{userManagementWatcher} from './user_managementSaga'


const saga = createSagaMiddleware()
export const reducers = combineReducers({user_managementSaga})


const store = createStore(reducers, applyMiddleware(saga))

function* rootSaga() {
  yield all([userManagementWatcher()])
}

saga.run(rootSaga)

export default store
