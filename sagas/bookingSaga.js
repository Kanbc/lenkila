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
      id:item.id+'_field',
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

const todayBooking = (reservation) => (result,item) => {

  const dataToday = reservation.reduce((newData,value)=>{
    if(value.resourceId === item.id){
      newData.push(value)
    }
    if(item.children){
      if(value.resourceId === item.children[0].id || value.resourceId === item.children[1].id ){
        newData.push(value)
      }
    }
    return newData
  },[])

 if(item){
   result.push({
    id: item.id,
    field: item.field,
    side: 'Left',
    bookings: dataToday,
   })
 }
 return result
}


const modifireFieldDocList = (checkprice) => (result, item) => {
  if (item){
      result.push({
        start_time:item.start_time,
        end_time:item.end_time,
        field_doc_id:item.field_id,
        price_field:JSON.stringify(checkprice),
      })
  } 
  return result
}




export function* getBookingSaga({date}) {

  console.log('booking date =>>>>>>',date)

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
    const todayBookingList = fieldsBooking.reduce(todayBooking(reservationAddData),[])
    
    yield put(setDataBooking({fieldPriceList:response.data.response_data.field_price_list}))
    yield put(setDataBooking({reservationList:response.data.response_data.reservation_list}))
    yield put(setDataBooking({stadiumDoc:response.data.response_data.stadium_doc}))
    yield put(setDataBooking({fieldsBooking:fieldsBooking}))
    yield put(setDataBooking({fieldDetail:fieldDetail}))
    yield put(setDataBooking({fieldsPrice:fieldsPrice}))
    yield put(setDataBooking({reservationAddData:reservationAddData}))
    yield put(setDataBooking({todayBookingList:todayBookingList}))
  } catch (err) {
  }
}

export function* addBookingSaga({data}){
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
  console.log('data add Booking',data)
  const paramsCheckprice = yield select(state => state.bookingSaga.paramsCheckprice)
  const checkPriceData = yield select(state => state.bookingSaga.checkPriceData)
  const modifireFieldDoc = paramsCheckprice.reduce(modifireFieldDocList(checkPriceData),[])
  console.log('fieldList',modifireFieldDoc)
//   try {
//     const response = yield axios.post(apiUrl, {
        
//           apikey: 'da1ee23f12812a19dc57fa4cf3115519',
//           code:'piluj',
//           action:'reservation_add_array',
//           stadium_id:stadiumId,
//           ...data,
//           field_doc_list:modifireFieldDoc
//         },
//       )
//     console.log('response add booking ',response)  
//   yield call(getBookingSaga,{date:data.reservation_date})
// } catch (err) {
//     console.log('error',err)
// }
}

export function* priceCheckingBookingSaga({data,customer}){
  let realCustomer = data.customer_type 
  const paramsCheckprice = yield select(state => state.bookingSaga.paramsCheckprice)
  let newCheckprice = []
  if(customer){
    paramsCheckprice.map(value=>value.customer_type = realCustomer)
    newCheckprice = [...paramsCheckprice]
    yield put(setDataBooking({paramsCheckprice:newCheckprice})) 
  }
  else{
    newCheckprice = [...paramsCheckprice,data]
    yield put(setDataBooking({paramsCheckprice:newCheckprice})) 
  }

  try {
    const response = yield axios.post(apiUrl, {
      
      apikey: 'da1ee23f12812a19dc57fa4cf3115519',
      code:'piluj',
      action:'reservation_price_checking_array',
      params:newCheckprice,
    },
    )
    console.log('response check price booking ',response) 
    yield put(setDataBooking({checkPriceData:response.data.response_data})) 
    

} catch (err) {
    console.log('error',err)
}
}


export function* editBookingSaga({data}){
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
  console.log('data edit booking',data)
  try {
    const response = yield axios.post(apiUrl, {
        
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'reservation_edit_main',
          stadium_id:stadiumId,
          ...data,
        },
      )
    yield call(getBookingSaga,{date:data.reservation_date})
    console.log('response edit booking ',response)  
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
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)

  console.log('exportCsv ',data)
  try {
    const response = yield axios.post(apiUrl, {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'reservation_exportcsv',
          ...data,
          stadium_id:stadiumId,
        },
    )
    yield put(setDataBooking({csv:response.data})) 
    console.log('response export csv',response)
} catch (err) {
    console.log('error',err)
}
}


export function* getBoostSaga({date}){
  yield delay(1000)
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)

  console.log('getBoost date ',date)
  try {
    // const response = yield axios.get(apiUrl, {
    //   params: {
    //       apikey: 'da1ee23f12812a19dc57fa4cf3115519',
    //       code:'piluj',
    //       action:'_boost_get_list',
    //       ...data,
    //       stadium_id:stadiumId,
    //     },
    // }
    // )
    yield put(setDataBooking({boostList:[
      {
      id:'1'+'_boost',
      resourceId: "87",
      start: moment(`${date} 11:00:01`),
      end: moment(`${date} 13:00:00`),
      color: '#000000',
      rendering: 'background'
    }
    ]})) 
    // console.log('response boostList ',response)
  } catch (err) {
      console.log('error',err)
  }
}


export function* addBoostSaga({data}){
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)

  console.log('addBoostSaga ',data)
//   try {
//     const response = yield axios.get(apiUrl, {
//       params: {
//           apikey: 'da1ee23f12812a19dc57fa4cf3115519',
//           code:'piluj',
//           action:'_boost_insert',
//           ...data,
//           stadium_doc_id:stadiumId,
//         },
//     }
//     )
//     console.log('response export csv',response)
// } catch (err) {
//     console.log('error',err)
// }
}



export function* bookingWatcher() {
    yield all([
      takeLatest(actionTypes.GETLIST_BOOKING, getBookingSaga),
      takeLatest(actionTypes.ADD_BOOKING, addBookingSaga),
      takeLatest(actionTypes.CHECK_PRICE, priceCheckingBookingSaga),
      takeLatest(actionTypes.DELETE_BOOKING, deleteBookingSaga),
      takeLatest(actionTypes.EDIT_BOOKING, editBookingSaga),
      takeLatest(actionTypes.EXPORT_CSV, exportCsvSaga),
      takeLatest(actionTypes.GETLIST_BOOST, getBoostSaga),
      takeLatest(actionTypes.ADD_BOOST, addBoostSaga),
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
  paramsCheckprice:[],
  paramsFieldDocList:[],
  csv:'',
  todayBookingList:[],
  boostList:[],
}

export default createReducer(initial, state => ({
  [SET_DATA_BOOKING]: ({data}) => ({...state, ...data}),
}))
