import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')



const apiUrl = 'http://wolvescorp.com/lenkila/api/main/call.php'

export function* setFieldDataSaga() {
    try {
       const response = yield axios.get(apiUrl, {
            params: {
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'piluj',
              action:'stadium_doc_getlist',
            },
          })
      yield put(setData({fields:response.data.response_data}))
    } catch (err) {
        console.log('error',err)
    }
  }


// export function* addFieldDataSaga({data}){
//     try {
//       yield axios.get(apiUrl, {
//           params: {
//             apikey: 'da1ee23f12812a19dc57fa4cf3115519',
//             code:'piluj',
//             action:'field_doc_add',
//             name:data.name,
//             description: data.description,
//             is_dividable: data.is_dividable,
//             type: data.typeField,
//             stadium_doc_id:0,
//             field_id:0,
//           },
//         })
  
//       yield call(setFieldDataSaga)
//   } catch (err) {
//       console.log('error',err)
//   }
// }



export function* editFieldDataSaga({data}){
  console.log('data',data)
    try {
        const response =  yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'stadium_doc_edit',
            id:data.id,
            stadium_doc_id:data.stadium_doc_id,
            phone:data.phone,
            location:data.location,
            description: data.description,
            facilities:data.facilities,
            name:"lenkila",
            start_time:moment.utc(data.start_time*1000).format('HH:mm:ss'),
            end_time:moment.utc(data.end_time*1000).format('HH:mm:ss'),
          },
        })
        console.log('response',response)
      
      yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}



export function* fieldManagementStadiumWatcher() {
    yield all([
      takeLatest(actionTypes.SET_FIELD_DATA_STD, setFieldDataSaga),
      // takeLatest(actionTypes.ADD_FIELD_DATA_STD, addFieldDataSaga),
      takeLatest(actionTypes.EDIT_FIELD_DATA_STD, editFieldDataSaga),
    ])
}
const initial = {
  fields: [],
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
