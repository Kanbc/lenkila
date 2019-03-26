import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'
import user_managementSaga,{userManagementWatcher} from './user_managementSaga'
import field_managementHolidaySaga,{fieldManagementHolidayWatcher} from './field_managementHolidaySaga'
import field_managementFieldSaga,{fieldManagementFieldWatcher} from './field_managementFieldSaga'
import field_managementStadiumSaga,{fieldManagementStadiumWatcher} from './field_managementStadiumSaga'
import field_managementGiftCodeSaga,{fieldManagementGiftCodeWatcher} from './field_managementGiftCodeSaga'
import field_managementPriceSaga,{fieldManagementPriceWatcher} from './field_managementPriceSaga'
import booking_noteSaga,{noteWatcher} from './booking_noteSaga'
import auth,{authWatcher} from './auth'
import customer_typeSaga,{CustomerTypeWatcher} from './customer_typeSaga'


const saga = createSagaMiddleware()
export const reducers = combineReducers(
  {
    user_managementSaga,
    field_managementHolidaySaga,
    field_managementFieldSaga,
    field_managementStadiumSaga,
    field_managementGiftCodeSaga,
    field_managementPriceSaga,
    booking_noteSaga,
    auth,
    customer_typeSaga,
  }
)


const store = createStore(reducers, applyMiddleware(saga))

function* rootSaga() {
  yield all([
    userManagementWatcher(),
    fieldManagementHolidayWatcher(),
    fieldManagementFieldWatcher(),
    fieldManagementStadiumWatcher(),
    fieldManagementGiftCodeWatcher(),
    fieldManagementPriceWatcher(),
    noteWatcher(),
    authWatcher(),
    CustomerTypeWatcher(),
  ])
}

saga.run(rootSaga)

export default store
