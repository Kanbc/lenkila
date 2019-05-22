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
      main_id:item.reservation_main_id,
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

const modifireFieldDocListEdit = (price) => (result, item) => {
  if (item){
      result.push({
        start_time:item.start_time,
        end_time:item.end_time,
        field_doc_id:item.field_doc_id || item.field_id,
        price_field:price,
      })
  } 
  return result
}


const modifireCheckPriceEdit = (data) => (result, item) => {
  if (item){
      result.push({
        field_id:item.field_doc_id,
        customer_type:data.customer_type,
        start_time:item.start_time,
        end_time:item.end_time,
        date:data.date,
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
  console.log('data check add Booking',data)

  const paramsCheckprice = yield select(state => state.bookingSaga.paramsCheckprice)
  console.log('paramsCheckprice',paramsCheckprice)
  const checkPriceData = yield select(state => state.bookingSaga.checkPriceData)
  console.log('checkPriceData',checkPriceData)

  if(Object.keys(data.checkData).length !== 0){
    Object.keys(checkPriceData).map(key => {
      const fieldBook = checkPriceData[key]
      console.log('fieldbook',fieldBook)
      fieldBook.map((val,index) => {
        if(data.checkData[key] !== undefined){
          if(data.checkData[key][index] !== undefined){
            val.price = parseInt(data.checkData[key][index])
          }
        }
        return val
      })
    })
  }

  console.log('checkPriceData new',checkPriceData)

  const modifireFieldDoc = paramsCheckprice.reduce(modifireFieldDocList(checkPriceData),[])
  console.log('fieldList',modifireFieldDoc)
  try {
    const response = yield axios.post(apiUrl, {     
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'reservation_add_array',
          stadium_id:stadiumId,
          ...data,
          field_doc_list:modifireFieldDoc
        },
      )
    console.log('response add booking ',response)  
  yield call(getBookingSaga,{date:data.reservation_date})
} catch (err) {
    console.log('error',err)
}
}

export function* priceCheckingBookingSaga({data,customer,edit,callback}){
  let realCustomer = data.customer_type 
  const paramsCheckprice = yield select(state => state.bookingSaga.paramsCheckprice)
  const editFieldDocList = yield select(state => state.bookingSaga.editFieldDocList)
  const editAddmore = yield select(state => state.bookingSaga.editAddmore)
  let newCheckprice = []
  if(customer){
    if(edit){
      if(editAddmore){
        paramsCheckprice.map(value=>value.customer_type = realCustomer)
        newCheckprice = [...paramsCheckprice]
        yield put(setDataBooking({paramsCheckprice:newCheckprice})) 
      }else{
        const modifireCheckEdit = editFieldDocList.reduce(modifireCheckPriceEdit(data),[])
        newCheckprice = [...modifireCheckEdit]
        yield put(setDataBooking({paramsCheckprice:newCheckprice})) 
      }
    }
    else{
      paramsCheckprice.map(value=>value.customer_type = realCustomer)
      newCheckprice = [...paramsCheckprice]
      yield put(setDataBooking({paramsCheckprice:newCheckprice})) 
    }
  }
  else{
    if(edit){
      const modifireCheckEdit = editFieldDocList.reduce(modifireCheckPriceEdit(data),[])
      newCheckprice = [...modifireCheckEdit,data]
      yield put(setDataBooking({paramsCheckprice:newCheckprice})) 
      yield put(setDataBooking({editAddmore:true}))
    }
    else{
      newCheckprice = [...paramsCheckprice,data]
      yield put(setDataBooking({paramsCheckprice:newCheckprice})) 
    }
  }

  console.log('newCheckprice',newCheckprice)

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
    if(callback){
      callback(response.data.response_data)
    }

} catch (err) {
    console.log('error',err)
}
}


export function* editBookingSaga({data,flag}){
  console.log('data edit booking',data)
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
  const editFieldDocList = yield select(state => state.bookingSaga.editFieldDocList)
  const editAddmore = yield select(state => state.bookingSaga.editAddmore)
  const paramsCheckprice = yield select(state => state.bookingSaga.paramsCheckprice)

  let modifireFieldDoc

  if(Object.keys(data.checkData).length !== 0){
    Object.keys(data.price_field).map(key => {
      const fieldBook = data.price_field[key]
      fieldBook.map((val,index) => {
        if(data.checkData[key] !== undefined){
          if(data.checkData[key][index] !== undefined){
            val.price = parseInt(data.checkData[key][index])
          }
        }
        return val
      })
    })
  }
  console.log('editFieldDocList',editFieldDocList)
  if(editAddmore){
    modifireFieldDoc = paramsCheckprice.reduce(modifireFieldDocListEdit(JSON.stringify(data.price_field)),[])
  }
  else{
    modifireFieldDoc = editFieldDocList.reduce(modifireFieldDocListEdit(JSON.stringify(data.price_field)),[])
  }
  console.log('fieldDocList edit',modifireFieldDoc)

  console.log('edit price data new',data)
  try {
    const response = yield axios.post(apiUrl, {
        
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'reservation_edit_main',
          stadium_id:stadiumId,
          id:data.reservation_main_id,
          reservation_date:data.reservation_date,
          customer_name:data.customer_name,
          customer_tel:data.customer_tel,
          customer_type:data.customer_type,
          flag_status:flag ? data.flag_status === '0' ? '1' : '0' :data.flag_status,
          player_value:data.player_value,
          deposit:data.deposit,
          rebate_other:data.rebate_other,
          create_by:data.create_by,
          cashier_by:data.cashier_by,
          field_doc_list:editFieldDocList,
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
          action:'reservation_remove_main',
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
    const response = yield axios.get(apiUrl, {
      params: {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'_boost_get_list',
          date:date
          // stadium_id:stadiumId,
        },
    }
    )
    // yield put(setDataBooking({boostList:[
    //   {
    //   id:'1'+'_boost',
    //   resourceId: "87",
    //   start: moment(`${date} 11:00:01`),
    //   end: moment(`${date} 13:00:00`),
    //   color: '#000000',
    //   rendering: 'background'
    // }
    // ]})) 
    console.log('response boostList ',response)
  } catch (err) {
      console.log('error',err)
  }
}


export function* addBoostSaga({data}){
  const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)

  console.log('addBoostSaga ',data)
  try {
    const response = yield axios.get(apiUrl, {
      params: {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'_boost_insert',
          ...data,
          stadium_doc_id:stadiumId,
          field_id:[data.field_id]
        },
    }
    )
    console.log('response addBoostSaga',response)
    yield call(getBoostSaga,{date:data.date})
} catch (err) {
    console.log('error',err)
}
}

export function* getEditMainByIdsaga({id}){

  console.log('getEditMainByIdsaga ',id)
  
  
  try {
    const response = yield axios.get(apiUrl, {
      params:{
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'reservation_getbyid_main',
          id:id
        },
    }
    )
    console.log('getEditMainByIdsaga',response)
    const modifireFieldDoc = response.data.response_data.reservation_detail.reduce(modifireFieldDocListEdit(
      response.data.response_data.reservation_detail[0].price_field),[])
    yield put(setDataBooking({editFieldDocList:modifireFieldDoc})) 
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
      takeLatest(actionTypes.GETLIST_BOOST, getBoostSaga),
      takeLatest(actionTypes.ADD_BOOST, addBoostSaga),
      takeLatest(actionTypes.GET_EDIT_MAIN_ID, getEditMainByIdsaga),
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
  editFieldDocList:[],
  editAddmore:false,
  csv:'',
  todayBookingList:[],
  boostList:[],
}

export default createReducer(initial, state => ({
  [SET_DATA_BOOKING]: ({data}) => ({...state, ...data}),
}))
