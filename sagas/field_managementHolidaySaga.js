import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')


const apiUrl = 'http://wolvescorp.com/lenkila/api/main/call.php'

export function* setFieldDataSaga() {
    try {
       const response = yield axios.get(apiUrl, {
            params: {
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'piluj',
              action:'holiday_getlist',
            },
          })
      console.log('response',response)
      yield put(setData({fields:response.data.response_data}))
    } catch (err) {
        console.log('error',err)
    }
  }

export function* setIdFieldDataSaga(){
  try {
    const response = yield axios.get(apiUrl, {
        params: {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'gdjxq',
          action:'user_getall',
        },
      })
    console.log('response =>',response.data.response_data)
  yield put(setData({users:response.data.response_data}))
} catch (err) {
    console.log('error',err)
}
}

export function* addFieldDataSaga({data}){
    console.log('data Add fmHoliday',data)
    
    const startDate = data.start_date
    const endDate = data.end_date._d.toLocaleDateString()
    console.log('startTime',startDate)
    console.log('endData',endDate)
    // console.log('test data Time',data.end_time._d.toLocaleTimeString())

    try {
      const response = yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'holiday_add',
            name:data.name,
            flag:data.flag,
            start_date:data.start_date,
            end_date:data.end_date,
            start_time:data.start_time,
            end_time:data.end_time,
          },
        })
  
      yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* editFieldDataSaga({data}){
  console.log('data edit',data)
    try {
        yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'holiday_edit',
            id:data.id,
            name:data.name,
            flag:data.flag,
            start_date:data.start_date,
            end_date:data.end_date,
            start_time:data.start_time,
            end_time:data.end_time,
          },
        })
      
      yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* deleteFieldDataSaga({id}){
    try {
      yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'holiday_delete',
            id:id
          },
        })
    yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* fieldManagementHolidayWatcher() {
    yield all([
      takeLatest(actionTypes.SET_FIELD_DATA_HOLIDAY, setFieldDataSaga),
      takeLatest(actionTypes.SETID_FIELD_DATA_HOLIDAY, setIdFieldDataSaga),
      takeLatest(actionTypes.ADD_FIELD_DATA_HOLIDAY, addFieldDataSaga),
      takeLatest(actionTypes.EDIT_FIELD_DATA_HOLIDAY, editFieldDataSaga),
      takeLatest(actionTypes.DELETE_FIELD_DATA_HOLIDAY, deleteFieldDataSaga),
    ])
}
const initial = {
  fields: [],
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
