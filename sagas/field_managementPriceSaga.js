// import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
// import {actionTypes} from '../store'
// import axios from 'axios'
// import {createReducer,Creator} from './helper'

// const SET_DATA = 'SET_DATA'

// export const setData = Creator(SET_DATA,'data')


// const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'

// export function* setFieldDataSaga() {
//     try {
//        const response = yield axios.get(apiUrl, {
//             params: {
//               apikey: 'da1ee23f12812a19dc57fa4cf3115519',
//               code:'piluj',
//               action:'gift_code_getlist',
//             },
//           })
//       yield put(setData({fieldsGift:response.data.response_data}))
//       console.log('gift',response.data.response_data)

     
//     } catch (err) {
//         console.log('error',err)
//     }
//   }


// export function* addFieldDataSaga({data}){
//     try {
//       yield axios.get(apiUrl, {
//           params: {
//             apikey: 'da1ee23f12812a19dc57fa4cf3115519',
//             code:'piluj',
//             action:'gift_code_add',
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



// export function* editFieldDataSaga({data}){
//    console.log('edit data',data)
//     try {
//         const response =  yield axios.get(apiUrl, {
//           params: {
//             apikey: 'da1ee23f12812a19dc57fa4cf3115519',
//             code:'piluj',
//             action:'gift_code_edit',
//             id:data.id,
//             name:data.name,
//             description: data.description,
//             is_dividable: data.is_dividable,
//             type: data.type,
//             stadium_doc_id:0,
//             field_id:0,
//           },
//         })
//         console.log('response',response)
      
//       yield call(setFieldDataSaga)
//   } catch (err) {
//       console.log('error',err)
//   }
// }

// export function* deleteFieldDataSaga({id}){
//     try {
//       yield axios.get(apiUrl, {
//           params: {
//             apikey: 'da1ee23f12812a19dc57fa4cf3115519',
//             code:'piluj',
//             action:'gift_code_delete',
//             id:id
//           },
//         })
//     yield call(setFieldDataSaga)
//   } catch (err) {
//       console.log('error',err)
//   }
// }

// export function* fieldManagementPriceWatcher() {
//     yield all([
//       takeLatest(actionTypes.SET_FIELD_DATA_PRICE, setFieldDataSaga),
//       takeLatest(actionTypes.ADD_FIELD_DATA_PRICE, addFieldDataSaga),
//       takeLatest(actionTypes.EDIT_FIELD_DATA_PRICE, editFieldDataSaga),
//       takeLatest(actionTypes.DELETE_FIELD_DATA_PRICE, deleteFieldDataSaga),
//     ])
// }
// const initial = {
//   fieldsPrice: [],
// }

// export default createReducer(initial, state => ({
//   [SET_DATA]: ({data}) => ({...state, ...data}),
// }))
