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
              action:'gift_code_getlist',
              stadium_id:stadiumId
            },
          })
      yield put(setData({fieldsGift:response.data.response_data}))
      console.log('gift',response.data.response_data)

     
    } catch (err) {
        console.log('error',err)
    }
  }


export function* addFieldDataSaga({data}){
  console.log('data gift',data)

  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)

    try {
      yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'gift_code_add',
            stadium_id:stadiumId,
            name:data.name,
            type:data.type,
            discount_amount:data.discount_amount,
            used_amount:data.used_amount,
            per_person_limit_amount:data.per_person_limit_amount,
            expired_at:moment(data.expired_at).format("YYYY-MM-DD"),
            start_time:data.is_allday?"00:00:00":moment.utc(data.start_time*1000).format('HH:mm:ss'),
            end_time:data.is_allday?"00:00:00":moment.utc(data.end_time*1000).format('HH:mm:ss'),
            is_allday:data.is_allday?"0":"1",
          },
        )
  
      yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}



export function* editFieldDataSaga({data}){
   console.log('edit data',data)
   const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    try {
        const response =  yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'gift_code_edit',
            id:data.id,
            stadium_id:stadiumId,
            name:data.name,
            type:data.type,
            discount_amount:data.discount_amount,
            used_amount:data.used_amount,
            per_person_limit_amount:data.per_person_limit_amount,
            expired_at:moment(data.expired_at).format("YYYY-MM-DD"),
            start_time:data.is_allday?"00:00:00":moment.utc(data.start_time*1000).format('HH:mm:ss'),
            end_time:data.is_allday?"00:00:00":moment.utc(data.end_time*1000).format('HH:mm:ss'),
            is_allday:data.is_allday?"0":"1",
          },
        )
        console.log('response',response)
      
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
            action:'gift_code_delete',
            id:id
          },
        })
    yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* fieldManagementGiftCodeWatcher() {
    yield all([
      takeLatest(actionTypes.SET_FIELD_DATA_GIFT, setFieldDataSaga),
      takeLatest(actionTypes.ADD_FIELD_DATA_GIFT, addFieldDataSaga),
      takeLatest(actionTypes.EDIT_FIELD_DATA_GIFT, editFieldDataSaga),
      takeLatest(actionTypes.DELETE_FIELD_DATA_GIFT, deleteFieldDataSaga),
    ])
}
const initial = {
  fieldsGift: [],
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
