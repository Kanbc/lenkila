import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')


const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'

export function* addUesrDataSaga({newUser}) {
  console.log('newUser',newUser)
  const upline = yield select(state => state.auth.user[0].upline_id)
    try {
       const response = yield axios.get(apiUrl, {
            params: {
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
          })
      console.log('response Add',response)
      yield call(setUsersDataSaga)
    } catch (err) {
        console.log('error',err)
    }
  }

export function* setUsersDataSaga(){
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
  yield call(setUsersDataSaga)
} catch (err) {
    console.log('error',err)
}
}


export function* editUserDataSaga({newUser}) {
  console.log('newUser',newUser)
    try {
       const response = yield axios.get(apiUrl, {
            params: {
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
          })
      console.log('response Edit',response)
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
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
