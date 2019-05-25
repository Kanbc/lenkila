import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {actionTypes} from '../store'
import moment from 'moment';
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')



const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'



export function* getCustomerSaga() {
  yield put(setData({isLoading:true}))
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
  yield put(setData({isLoading:false}))
  
}

export function* addCustomerSaga({data}){
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    const newData = {...data,date_of_birth:moment(data.date_of_birth).format("YYYY-MM-DD")}
    console.log('data add',newData)
    try {
      yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'_customer_insert',
            stadium_id:stadiumId,
            ...newData,
          },
        )
      yield call(getCustomerSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* editCustomerSaga({data}){
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    const newData = {...data,date_of_birth:moment(data.date_of_birth).format("YYYY-MM-DD")}
    console.log('edit data',newData)
    try {
        yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'_customer_get_edit',
            stadium_id:stadiumId,
            ...newData,
          },
        )
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

export function* addCustomerTypeHistorySaga({data}){
  console.log('data add',data)
  try {
    const response = yield axios.post(apiUrl, {
        
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'_customer_type_history_insert',
          ...data,
        },
      )
    console.log('response add history',response)
    yield call(getCustomerSaga)
} catch (err) {
    console.log('error',err)
}
}

export function* getCustomerTypeHistorySaga({id}){
    try {
      const response = yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'_customer_type_log',
            customer_id:id
          },
        })
    yield put(setData({history:response.data.response_data}))
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
      takeLatest(actionTypes.ADD_CUSTOMER_HISTORY, addCustomerTypeHistorySaga),
      takeLatest(actionTypes.GET_CUSTOMER_HISTORY, getCustomerTypeHistorySaga),
    ])
}
const initial = {
  customer: [],
  history:[],
  isLoading:false,
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
