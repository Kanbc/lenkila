import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {actionTypes} from '../store'
import axios from 'axios'
import {delay} from 'redux-saga'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')


const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'

export function* addUesrDataSaga({newUser}) {
  console.log('newUser',newUser)
  const upline = yield select(state => state.auth.user[0].user_id)
    try {
       const response = yield axios.post(apiUrl, {
            
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'gdjxq',
              action:'register',
              email: newUser.email,
              name: newUser.firstname,
              username: newUser.username,
              surname: newUser.lastname,
              nickname: newUser.nickname,
              address: newUser.note,
              tel: newUser.tel,
              password: newUser.password,
              role: newUser.role,
              upline_id:upline,
             
            },
          )
      console.log('response Add',response)
      if(!response.data.response_status){
        window.alert(response.data.response_message)
      }
      yield call(setUsersDataSaga)
    } catch (err) {
        console.log('error',err)
    }
  }

export function* setUsersDataSaga(){
  yield put(setData({isLoading:true}))
  yield delay(1000)
  const stadium_doc_id = yield select(state => state.auth.user[0].stadium_doc.id)
  try {
    const response = yield axios.get(apiUrl, {
        params: {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'gdjxq',
          action:'user_getall',
          stadium_doc_id:stadium_doc_id,
        },
      })
      if(!response.data.response_status){
        window.alert(response.data.response_message)
      }
  yield put(setData({users:response.data.response_data}))
} catch (err) {
    console.log('error',err)
}
yield put(setData({isLoading:false}))

}

export function* deleteUsersDataSaga({id}){
  console.log('id',id)
  try {
    const response = yield axios.get(apiUrl, {
        params: {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'gdjxq',
          action:'userban',
          user_id:id
        },
      })
      console.log('delete',response)
      if(!response.data.response_status){
        window.alert(response.data.response_message)
      }
  yield call(setUsersDataSaga)
} catch (err) {
    console.log('error',err)
}
}


export function* editUserDataSaga({newUser}) {
  console.log('newUser',newUser)
    try {
       const response = yield axios.post(apiUrl, {
            
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'gdjxq',
              action:'edit',
              email: newUser.email,
              name: newUser.firstname,
              username: newUser.username,
              surname: newUser.lastname,
              nickname: newUser.nickname,
              address: newUser.note,
              tel: newUser.tel,
              role: newUser.role,
              user_id:newUser.id,
            },
          )
      console.log('response Edit',response)
      if(!response.data.response_status){
        window.alert(response.data.response_message)
      }
      yield call(setUsersDataSaga)
    } catch (err) {
        console.log('error',err)
    }
  }

  export function* resetPasswordUserSaga({data}) {
    console.log('password',data)
    try {
      const response = yield axios.get(apiUrl, {
        params: {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'gdjxq',
          action:'resetpassword_editpassword',
          user_id:data.id,
          newpassword:data.password,
          //newpassword
        },
      })
      if(!response.data.response_status){
        window.alert(response.data.response_message)
      }
      yield call(setUsersDataSaga)
    } catch (error) {
      console.log('resetPasswordUserSaga error', error)
    }
  }



export function* userManagementWatcher() {
    yield all([
      takeLatest(actionTypes.ADD_USERS_DATA, addUesrDataSaga),
      takeLatest(actionTypes.SET_USERS_DATA, setUsersDataSaga),
      takeLatest(actionTypes.EDIT_USERS_DATA, editUserDataSaga),
      takeLatest(actionTypes.DELETE_USERS_DATA, deleteUsersDataSaga),
      takeLatest(actionTypes.RESET_PASSWORD, resetPasswordUserSaga),
    ])
}

const initial = {
  users: [],
  isLoading:false,
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
