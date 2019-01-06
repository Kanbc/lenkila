import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')


const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'

export function* addNoteSaga({data}) {
  console.log('addnote Saga',data)
    try {
       const response = yield axios.get(apiUrl, {
            params: {
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'piluj',
              action:'note_add',
              name:data.name,
              tel:data.tel,
              detail:data.note,
              doc_date:data.doc_date,
              // stadium_id:xxxx
            },
      })
      yield call(setNoteDateSaga, {date:data.doc_date})
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
    console.log('response => setNote',response.data.response_data)
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
  console.log('date',date)
    try {
      const response = yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'note_getbydate',
            doc_date:date,
          },
        })
      console.log('response => noteDate',response.data.response_data)
    yield put(setData({notes:response.data.response_data}))
  } catch (err) {
      console.log('error',err)
  }
}

export function* editNoteSaga({data}){
    try {
      const response = yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'note_edit',
            id:data.id,
            name:data.name,
            tel:data.tel,
            detail:data.detail,
            doc_date:data.doc_date,
          },
        })
      console.log('response => edit' ,response)
      yield call(setNoteDateSaga, {date:data.doc_date})
  } catch (err) {
      console.log('error',err)
  }
}


export function* deleteNoteSaga({id}){
  console.log('deleteNoteSaga',id)
  try {
    const response = yield axios.get(apiUrl, {
        params: {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'note_delete',
          id:id.id,
        },
      })
    yield call(setNoteDateSaga, {date:id.doc_date})
} catch (err) {
    console.log('error',err)
}
}





export function* noteWatcher() {
    yield all([
        takeLatest(actionTypes.SET_NOTE, setNoteSaga),
        takeLatest(actionTypes.SET_NOTE_DATE, setNoteDateSaga),

        takeLatest(actionTypes.ADD_NOTE, addNoteSaga),
        takeLatest(actionTypes.EDIT_NOTE, editNoteSaga),
        takeLatest(actionTypes.DELETE_NOTE, deleteNoteSaga),
    ])
}

const initial = {
  notes: [],
  doc_date:'',
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
