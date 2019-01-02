import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')


const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'

export function* addUesrDataSaga({newUser}) {
  console.log('newUser',newUser)
    try {
       const response = yield axios.get(apiUrl, {
            params: {
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'gdjxq',
              action:'register',
              // email: newUser.email,
              // firstname: newUser.firstname,
              // id: newUser.id,
              // lastname: newUser.lastname,
              // nickname: newUser.nickname,
              // note: newUser.note,
              // tel: newUser.tel,
              password: newUser.password,
              role: newUser.role,
              username: newUser.username,
            },
          })
      console.log('response',response)
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



export function* userManagementWatcher() {
    yield all([
      takeLatest(actionTypes.ADD_USERS_DATA, addUesrDataSaga),
      takeLatest(actionTypes.SET_USERS_DATA, setUsersDataSaga),
    ])
}

const initial = {
  users: [],
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
