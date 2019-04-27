import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {actionTypes} from '../store'
import {delay} from 'redux-saga'
import axios from 'axios'
import moment from 'moment';
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')


const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'

export function* setFieldDataSaga() {

    yield delay(1000)
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    try {
       const response = yield axios.get(apiUrl, {
            params: {
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'piluj',
              action:'holiday_getlist',
              stadium_id:stadiumId,
            },
          })
      console.log('response',response)
      yield put(setData({fieldsHLD:response.data.response_data}))
    } catch (err) {
        console.log('error',err)
    }
  }


export function* addFieldDataSaga({data}){
    console.log('data add',data)
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    try {
      yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'holiday_add',
            stadium_id:stadiumId,
            name:data.name,
            flag:data.flag,
            start_date:moment(data.start_date).format("YYYY-MM-DD"),
            end_date:moment(data.end_date).format("YYYY-MM-DD"),
            start_time:moment.utc(data.start_time*1000).format('HH:mm:ss'),
            end_time:moment.utc(data.end_time*1000).format('HH:mm:ss'),
          },
        )
  
      yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}



export function* editFieldDataSaga({data}){
  console.log('edit holiday add',data)
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    try {
        yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'holiday_edit',
            id:data.id,
            stadium_id:stadiumId,
            name:data.name,
            flag:data.flag,
            start_date:moment(data.start_date).format("YYYY-MM-DD"),
            end_date:moment(data.end_date).format("YYYY-MM-DD"),
            start_time:moment.utc(data.start_time*1000).format('HH:mm:ss'),
            end_time:moment.utc(data.end_time*1000).format('HH:mm:ss'),
          },
        )
      
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
      takeLatest(actionTypes.ADD_FIELD_DATA_HOLIDAY, addFieldDataSaga),
      takeLatest(actionTypes.EDIT_FIELD_DATA_HOLIDAY, editFieldDataSaga),
      takeLatest(actionTypes.DELETE_FIELD_DATA_HOLIDAY, deleteFieldDataSaga),
    ])
}
const initial = {
  fieldsHLD: [],
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
