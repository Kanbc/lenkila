import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')



const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'



export function* getCustomerTypeSaga() {
   yield put(setData({isLoading:true}))
    yield delay(1000)
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    try {
       const response = yield axios.get(apiUrl, {
            params: {
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'piluj',
              action:'_customer_type_get_list',
              stadium_id:stadiumId,
            },
          })
      console.log('response customer type',response)
      if(!response.data.response_status){
        window.alert(response.data.response_message)
      }
      yield put(setData({customerType:response.data.response_data}))
    } catch (err) {
        console.log('error',err)
    }
    yield put(setData({isLoading:false}))
}

export function* addCustomerTypeSaga({data}){
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    console.log('data add',data)
    try {
      const response = yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'_customer_type_insert',
            stadium_id:stadiumId,
            ...data,
          },
        )
        if(!response.data.response_status){
          window.alert(response.data.response_message)
        }
      yield call(getCustomerTypeSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* editCustomerTypeSaga({data}){
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    console.log('edit data',data)
   
    try {
        const response = yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'_customer_type_get_edit',
            stadium_id:stadiumId,
            ...data,
          },
        )
        if(!response.data.response_status){
          window.alert(response.data.response_message)
        }
      yield call(getCustomerTypeSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* deleteCustomerTypeSaga({id}){
  console.log('delete')
    try {
      const response = yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'_customer_type_remove',
            id:id
          },
        })
        if(!response.data.response_status){
          window.alert(response.data.response_message)
        }
    yield call(getCustomerTypeSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* getCustomerTypeIdSaga({id}) {
  try {
    if(id !== null){
      const response = yield axios.get(apiUrl, {
           params: {
             apikey: 'da1ee23f12812a19dc57fa4cf3115519',
             code:'piluj',
             action:'_customer_type_get_by_id',
             id:id,
           },
         })
         if(!response.data.response_status){
          window.alert(response.data.response_message)
        }
     console.log('response customer ID  type',response)
     yield put(setData({customerTypeId:response.data.response_data}))
    }
    else{
     yield put(setData({customerTypeId:[]}))

    }
  } catch (err) {
      console.log('error',err)
  }
}

export function* getCustomerTypeIdNextSaga({id}) {
  try {
    if(id !== null){
     const response = yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'_customer_type_get_by_id',
            id:id,
          },
        })
        if(!response.data.response_status){
          window.alert(response.data.response_message)
        }
    console.log('response customer ID next type',response)
    yield put(setData({customerTypeIdNext:response.data.response_data}))
    }
    else{
      yield put(setData({customerTypeIdNext:[]}))
    }
  } catch (err) {
      console.log('error',err)
  }
}


export function* CustomerTypeWatcher() {
    yield all([
      takeLatest(actionTypes.GET_CUSTOMER_TYPE, getCustomerTypeSaga),
      takeLatest(actionTypes.ADD_CUSTOMER_TYPE, addCustomerTypeSaga),
      takeLatest(actionTypes.EDIT_CUSTOMER_TYPE, editCustomerTypeSaga),
      takeLatest(actionTypes.DELETE_CUSTOMER_TYPE, deleteCustomerTypeSaga),
      takeLatest(actionTypes.GET_CUSTOMER_TYPE_ID, getCustomerTypeIdSaga),
      takeLatest(actionTypes.GET_CUSTOMER_TYPE_ID_NEXT, getCustomerTypeIdNextSaga),
    ])
}
const initial = {
  customerType: [],
  customerTypeId:[],
  customerTypeIdNext:[],
  isLoading:false,
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
