import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'
import Router from 'next/router';


const SET_DATA = 'SET_DATA'
export const setData = Creator(SET_DATA,'data')


const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'

export function* loginSaga({data}) {
    try {
        const response = yield axios.get(apiUrl, {
            params: {
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'gdjxq',
              action:'login',
              username:data.username,
              password:data.password,
            },
          })
          console.log('response auth',response)
          if(response.data.response_status){
            yield put(setData({user:response.data.response_data}))
            yield put(setData({roleUser:response.data.response_data[0].role}))

            window.sessionStorage.setItem("LenkilaLogin", true);
            window.sessionStorage.setItem("LenkilaLoginID", response.data.response_data[0].user_id);
            Router.push({ pathname: '/' })
          }else{
            yield put(setData({errorMessage:response.data.response_status}))
          }
       
      
    } catch (error) {
      console.log('loginSaga error', error)
      const {status} = error.response
    }
}


export function* logOutSaga() {
    try {
       Router.push({ pathname: '/login' })
       window.sessionStorage.removeItem('LenkilaLogin');
       window.sessionStorage.removeItem('LenkilaLoginID');
    } catch (error) {
      console.log('logOutSaga error', error)
      
    }
}

export function* getUserInfoSaga({id}) {
  console.log('userInfo',id)
  try {
    const response = yield axios.get(apiUrl, {
      params: {
        apikey: 'da1ee23f12812a19dc57fa4cf3115519',
        code:'gdjxq',
        action:'user_getbyid',
        user_id:id,
      },
    })
    yield put(setData({user:response.data.response_data}))
    yield put(setData({roleUser:response.data.response_data[0].role}))
  } catch (error) {
    console.log('getUserInfoSaga error', error)
  }
}






export function* authWatcher() {
        yield takeLatest(actionTypes.LOGIN, loginSaga)
        yield takeLatest(actionTypes.LOGOUT, logOutSaga)
        yield takeLatest(actionTypes.GETUSER_INFO, getUserInfoSaga)
}




const initial = {
  isLogin: false,
  errorMessage: true,
  user:[],
  roleUser:"",
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
