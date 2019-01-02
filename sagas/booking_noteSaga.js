import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')


const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'

export function* addNoteSaga({note}) {
  console.log('note',note)
    try {
       const response = yield axios.get(apiUrl, {
            params: {
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'piluj',
              action:'note_add',
            },
          })
      console.log('response',response)
    } catch (err) {
        console.log('error',err)
    }
  }

export function* setNoteSaga(){
  try {
    const response = yield axios.get(apiUrl, {
        params: {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'note_getlist',
        },
      })
    console.log('response =>',response.data.response_data)
  yield put(setData({notes:response.data.response_data}))
} catch (err) {
    console.log('error',err)
}
}

export function* setNoteIdSaga(){
  try {
    const response = yield axios.get(apiUrl, {
        params: {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'note_getbyid',
        },
      })
    console.log('response =>',response.data.response_data)
  yield put(setData({notes:response.data.response_data}))
} catch (err) {
    console.log('error',err)
}
}

export function* setNoteDateSaga({date}){
    try {
      const response = yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'note_getbydate',
            doc_date:date
          },
        })
      console.log('response =>',response.data.response_data)
    yield put(setData({notes:response.data.response_data}))
  } catch (err) {
      console.log('error',err)
  }
}

export function* editNoteSaga({note}){
    console.log('edit note',note)
    try {
      const response = yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'note_getbyid',
          },
        })
      console.log('response =>',response.data.response_data)
    yield put(setData({notes:response.data.response_data}))
  } catch (err) {
      console.log('error',err)
  }
}




export function* noteWatcher() {
    yield all([
        takeLatest(actionTypes.SET_NOTE, setNoteSaga),
        takeLatest(actionTypes.ADD_NOTE, addNoteSaga),
    ])
}

const initial = {
  notes: [],
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
