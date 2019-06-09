import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')



const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'

export function* setFieldDataSaga() {
  yield put(setData({isLoading:true}))
  yield delay(1000)
  const id = yield select(state => state.auth.user[0].stadium_doc.id)
  console.log('id',id)
    try {
       const response = yield axios.get(apiUrl, {
            params: {
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'piluj',
              action:'stadium_doc_getbyid',
              id:id,
            },
          })
      yield put(setData({fieldsSTD:response.data.response_data}))
      
    } catch (err) {
        console.log('error',err)
    }
  yield put(setData({isLoading:false}))

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
        const response =  yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'stadium_doc_edit',
            id:data.id,
            stadium_doc_id:data.stadium_doc_id,
            phone:data.phone,
            location:data.location,
            description: data.description,
            facilities:JSON.stringify(data.facilities),
            name:"lenkila",
            open_time:moment.utc(data.open_time*1000).format('HH:mm:ss'),
            close_time:moment.utc(data.close_time*1000).format('HH:mm:ss'),
          },
        )
        console.log('response',response)
        if(!response.data.response_status){
          window.alert(response.data.response_message)
        }
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
  fieldsSTD: [],
  isLoading:false,
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
