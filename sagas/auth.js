import { call, put, select, takeEvery, takeLatest, all,cancelled } from 'redux-saga/effects'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'
import Router from 'next/router';


const SET_DATA_AUTH = 'SET_DATA_AUTH'
export const setData = Creator(SET_DATA_AUTH,'data')


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
      window.sessionStorage.removeItem('LenkilaLogin');
      window.sessionStorage.removeItem('LenkilaLoginID');
      window.location.reload()
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

export function* forgotPaswordSaga({email}) {
  console.log('email',email)
  try {
    const response = yield axios.post(apiUrl, {
        apikey: 'da1ee23f12812a19dc57fa4cf3115519',
        code:'gdjxq',
        action:'resetpassword_sendmail',
        email:email,
        link_reset:"https://lenkila-dev.netlify.com/reset-password",
    })

  } catch (error) {
    console.log('forgotPaswordSaga error', error)
  }
}

export function* changeUserPaswordSaga({data}) {
  console.log('data',data)
  try {
    const response = yield axios.post(apiUrl, {
        apikey: 'da1ee23f12812a19dc57fa4cf3115519',
        code:'gdjxq',
        action:'resetpassword_editpassword',
        user_id:data.user_id,
        newpassword:data.newpassword,
    })
    console.log('response change',response)
    yield put(setData({errorMessage:response.status}))

    Router.push({pathname:'/login'})

  } catch (error) {
    console.log('changeUserPaswordSaga error', error)
  }
}





export function* authWatcher() {
        yield takeLatest(actionTypes.LOGIN, loginSaga)
        yield takeLatest(actionTypes.LOGOUT, logOutSaga)
        yield takeLatest(actionTypes.GETUSER_INFO, getUserInfoSaga)
        yield takeLatest(actionTypes.FORGOT_PASSWORD, forgotPaswordSaga)
        yield takeLatest(actionTypes.CHANGE_PASSWORD_USER, changeUserPaswordSaga)
}




const initial = {
  isLogin: false,
  errorMessage: true,
  user:[{stadium_doc:{id:''}},],
  roleUser:"",
}

export default createReducer(initial, state => ({
  [SET_DATA_AUTH]: ({data}) => ({...state, ...data}),
}))
