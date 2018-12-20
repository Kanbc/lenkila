import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'
import user_managementSaga,{userManagementWatcher} from './user_managementSaga'
import field_managementHolidaySaga,{fieldManagementHolidayWatcher} from './field_managementHolidaySaga'
import field_managementFieldSaga,{fieldManagementFieldWatcher} from './field_managementFieldSaga'
import field_managementStadiumSaga,{fieldManagementStadiumWatcher} from './field_managementStadiumSaga'


const saga = createSagaMiddleware()
export const reducers = combineReducers(
  {
    user_managementSaga,
    field_managementHolidaySaga,
    field_managementFieldSaga,
    field_managementStadiumSaga,
  }
)


const store = createStore(reducers, applyMiddleware(saga))

function* rootSaga() {
  yield all([
    userManagementWatcher(),
    fieldManagementHolidayWatcher(),
    fieldManagementFieldWatcher(),
    fieldManagementStadiumWatcher(),
  ])
}

saga.run(rootSaga)

export default store
