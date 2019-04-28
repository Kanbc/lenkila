import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {actionTypes} from '../store'
import {delay} from 'redux-saga'
import axios from 'axios'
import {createReducer,Creator} from './helper'
import moment from 'moment'

const SET_DATA_BOOKING = 'SET_DATA_BOOKING'

export const setDataBooking = Creator(SET_DATA_BOOKING,'data')


const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'

const newFields = (result, item) => {
  if (item){
    if(item.is_dividable === "1"){
      result.push({id: item.id, field: item.name , 
        children: [
        {
          id: item.children[0] && item.children[0].id,
          field: item.children[0] && item.children[0].name,
        }, {
          id: item.children[1] && item.children[1].id,
          field: item.children[1] && item.children[1].name,
        },
      ]})
    }
    else {
      result.push({id: item.id, field: item.name})
    }
  } 
  return result
}

const newPriceFields = (date) => (result, item) => {

  if (item){
    result.push({
      id:item.id,
      resourceId: item.field_id,
      start: moment(`${date} ${item.start_time}`),
      end: moment(`${date} ${item.end_time}`),
      color: item.color,
      rendering: 'background',
    })
  } 
  return result
}

const newReservation = (date) => (result, item) => {
  if (item){
    result.push({
      id: item.id,
      resourceId: item.field_doc_id,
      title: item.customer_name,
      start: moment(`${date} ${item.start_time}`),
      end: moment(`${date} ${item.end_time}`),
      color: item.color,
      textColor: 'black',
    })
  } 
  return result
}




export function* getBookingSaga({date}) {
  console.log('date booking getlist',date)
  yield delay(1000)
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
  try {
     const response = yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'reservation_price_getlist',
            stadium_doc_id:stadiumId,
            date
          },
        })
    console.log('response getBookingSaga',response)
    const fieldsBooking = response.data.response_data.stadium_doc.field_list.reduce(newFields, [])
    const fieldDetail = {
      open: response.data.response_data.stadium_doc.open_time,
      close: response.data.response_data.stadium_doc.close_time,
      weekdayOpen: [0, 1, 2, 3, 4, 5, 6], // Monday - Friday (0=Sunday)
      minTime: '05:00:00',
      maxTime: '29:00:00',
    };
    const fieldsPrice = response.data.response_data.field_price_list.reduce(newPriceFields(date), [])
    const reservationAddData = response.data.response_data.reservation_list.reduce(newReservation(date),[])
    
    console.log('fieldsBooking',fieldsBooking)
    yield put(setDataBooking({fieldPriceList:response.data.response_data.field_price_list}))
    yield put(setDataBooking({reservationList:response.data.response_data.reservation_list}))
    yield put(setDataBooking({stadiumDoc:response.data.response_data.stadium_doc}))
    yield put(setDataBooking({fieldsBooking:fieldsBooking}))
    yield put(setDataBooking({fieldDetail:fieldDetail}))
    yield put(setDataBooking({fieldsPrice:fieldsPrice}))
    yield put(setDataBooking({reservationAddData:reservationAddData}))
  } catch (err) {
      console.log('error',err)
  }
}

export function* addBookingSaga({data}){
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
  console.log('data add',data)
  try {
    const response = yield axios.post(apiUrl, {
        
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'reservation_add',
          stadium_id:stadiumId,
          ...data,
        },
      )
    console.log('response add booking ',response)  
  yield call(getBookingSaga,{date:data.reservation_date})
} catch (err) {
    console.log('error',err)
}
}

export function* priceCheckingBookingSaga({data}){
  console.log('check price',data)
  try {
    const response = yield axios.post(apiUrl, {
        
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'reservation_price_checking',
          ...data,
        },
      )
    console.log('response price booking ',response) 
    yield put(setDataBooking({checkPriceData:response.data.response_data})) 

} catch (err) {
    console.log('error',err)
}
}


export function* editBookingSaga({data}){
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
  console.log('data add',data)
  try {
    const response = yield axios.post(apiUrl, {
        
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'reservation_edit',
          stadium_id:stadiumId,
          ...data,
        },
      )
    yield call(getBookingSaga,{date:data.reservation_date})
    console.log('response add booking ',response)  
  yield call(getBookingSaga,{date:data.reservation_date})
} catch (err) {
    console.log('error',err)
}
}


export function* deleteBookingSaga({id,date}){
  console.log('deleteBookingSaga ',id,date)
  try {
    const response = yield axios.post(apiUrl, {

          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'reservation_delete',
          id:id,
        },
      )
    yield call(getBookingSaga,{date:date})
} catch (err) {
    console.log('error',err)
}
}


export function* exportCsvSaga({data}){
  console.log('exportCsv ',data)
  try {
    const response = yield axios.get(apiUrl, {
      params: {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'reservation_exportcsv',
          ...data,
        },
    }
    )
    console.log('response export csv',response)
} catch (err) {
    console.log('error',err)
}
}



export function* bookingWatcher() {
    yield all([
      takeLatest(actionTypes.GETLIST_BOOKING, getBookingSaga),
      takeLatest(actionTypes.ADD_BOOKING, addBookingSaga),
      takeLatest(actionTypes.CHECK_PRICE, priceCheckingBookingSaga),
      takeLatest(actionTypes.DELETE_BOOKING, deleteBookingSaga),
      takeLatest(actionTypes.EDIT_BOOKING, editBookingSaga),
      takeLatest(actionTypes.EXPORT_CSV, exportCsvSaga),
    ])
}

const initial = {
  fieldPriceList : [],
  reservationList : [],
  stadiumDoc : {},
  fieldsBooking:[],
  fieldDetail:{},
  fieldsPrice:[],
  reservationAddData:[],
  checkPriceData:[],
}

export default createReducer(initial, state => ({
  [SET_DATA_BOOKING]: ({data}) => ({...state, ...data}),
}))
