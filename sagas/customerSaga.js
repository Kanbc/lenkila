import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')



const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'



export function* getCustomerSaga() {
    yield delay(1000)
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    try {
       const response = yield axios.get(apiUrl, {
            params: {
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'piluj',
              action:'_customer_get_list',
              stadium_id:stadiumId,
            },
          })
      console.log('response customer',response)
      yield put(setData({customer:response.data.response_data}))
    } catch (err) {
        console.log('error',err)
    }
}

export function* addCustomerSaga({data}){
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    console.log('data add',data)
    try {
      yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'_customer_insert',
            stadium_id:stadiumId,
            ...data,
          },
        })
      yield call(getCustomerSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* editCustomerSaga({data}){
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    console.log('edit data',data)
   
    try {
        yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'_customer_get_edit',
            stadium_id:stadiumId,
            ...data,
          },
        })
      yield call(getCustomerSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* deleteCustomerSaga({id}){
  console.log('delete')
    try {
      yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'_customer_remove',
            id:id
          },
        })
    yield call(getCustomerSaga)
  } catch (err) {
      console.log('error',err)
  }
}


export function* CustomerWatcher() {
    yield all([
      takeLatest(actionTypes.GET_CUSTOMER, getCustomerSaga),
      takeLatest(actionTypes.ADD_CUSTOMER, addCustomerSaga),
      takeLatest(actionTypes.EDIT_CUSTOMER, editCustomerSaga),
      takeLatest(actionTypes.DELETE_CUSTOMER, deleteCustomerSaga),
    ])
}
const initial = {
  customer: [],
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
