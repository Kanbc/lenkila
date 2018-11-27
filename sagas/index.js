import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'
import user_managementSaga,{userManagementWatcher} from './user_managementSaga'
import field_managementHolidaySaga,{fieldManagementHolidayWatcher} from './field_managementHolidaySaga'


const saga = createSagaMiddleware()
export const reducers = combineReducers(
  {
    user_managementSaga,
    field_managementHolidaySaga,
  }
)


const store = createStore(reducers, applyMiddleware(saga))

function* rootSaga() {
  yield all([
    userManagementWatcher(),
    fieldManagementHolidayWatcher()
  ])
}

saga.run(rootSaga)

export default store
