import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {actionTypes} from '../store'
import axios from 'axios'
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
              action:'field_doc_getlist',
              stadium_doc_id:stadiumId,
            },
          })
      console.log('response field',response)
      yield put(setData({fields:response.data.response_data}))
    } catch (err) {
        console.log('error',err)
    }
  }


export function* addFieldDataSaga({data}){
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    try {
      yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'field_doc_add',
            name:data.name,
            description: data.description,
            is_dividable: data.is_dividable,
            type: data.typeField,
            stadium_doc_id:stadiumId,
          },
        )
  
      yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}



export function* editFieldDataSaga({data}){
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)

   console.log('edit data',data)
    try {
        const response =  yield axios.post(apiUrl, {
        
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'field_doc_edit',
            id:data.id,
            name:data.name,
            description: data.description,
            is_dividable: data.is_dividable,
            type: data.type,
            stadium_doc_id:stadiumId,
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
            action:'field_doc_delete',
            id:id
          },
        })
    yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* fieldManagementFieldWatcher() {
    yield all([
      takeLatest(actionTypes.SET_FIELD_DATA_FIELD, setFieldDataSaga),
      takeLatest(actionTypes.ADD_FIELD_DATA_FIELD, addFieldDataSaga),
      takeLatest(actionTypes.EDIT_FIELD_DATA_FIELD, editFieldDataSaga),
      takeLatest(actionTypes.DELETE_FIELD_DATA_FIELD, deleteFieldDataSaga),
    ])
}
const initial = {
  fields: [],
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
