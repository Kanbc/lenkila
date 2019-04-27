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
    if(item.is_dividable === "0"){
      result.push({id: item.id, field: item.name , 
        children: [
        {
          id: `${item.id}-1`,
          field: `Left ${item.name}`,
        }, {
          id: `${item.id}-2`,
          field: `Right ${item.name}`,
        },
      ]})
    }
    else {
      result.push({id: item.id, field: item.name})
    }
  } 
  return result
}

const newPriceFields = (result, item) => {
  const todayTime = moment().format('YYYY-MM-DD');
  if (item){
    result.push({
      id:item.id,
      resourceId: item.id,
      start: moment(`${todayTime} ${item.start_time}`),
      end: moment(`${todayTime} ${item.end_time}`),
      color: item.color,
      rendering: 'background',
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
    const fieldsPrice = response.data.response_data.field_price_list.reduce(newPriceFields, [])

    
    console.log('fieldsBooking',fieldsBooking)
    yield put(setDataBooking({fieldPriceList:response.data.response_data.field_price_list}))
    yield put(setDataBooking({reservationList:response.data.response_data.reservation_list}))
    yield put(setDataBooking({stadiumDoc:response.data.response_data.stadium_doc}))
    yield put(setDataBooking({fieldsBooking:fieldsBooking}))
    yield put(setDataBooking({fieldDetail:fieldDetail}))
    yield put(setDataBooking({fieldsPrice:fieldsPrice}))
  } catch (err) {
      console.log('error',err)
  }
}



export function* bookingWatcher() {
    yield all([
      takeLatest(actionTypes.GETLIST_BOOKING, getBookingSaga),
    ])
}

const initial = {
  fieldPriceList : [],
  reservationList : [],
  stadiumDoc : {},
  fieldsBooking:[],
  fieldDetail:{},
  fieldsPrice:[],
}

export default createReducer(initial, state => ({
  [SET_DATA_BOOKING]: ({data}) => ({...state, ...data}),
}))
