import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA = 'SET_DATA'

export const setData = Creator(SET_DATA,'data')

const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'

export function* setFieldDataSaga() {

    yield delay(1500)
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    const firstTime = yield select(state => state.field_managementPriceSaga.firstTime)

    let fieldId
    if(firstTime){
      const fieldIdSelected = yield select(state => state.field_managementFieldSaga.fields[0].id)
      fieldId=fieldIdSelected
      yield put(setData({firstTime:false,fieldId:fieldId,fieldIdImport:fieldId}))
    }else{
      const fieldIdSelected = yield select(state => state.field_managementPriceSaga.fieldId)
      fieldId=fieldIdSelected
    }

    try {
       const response = yield axios.get(apiUrl, {
            params: {
              apikey: 'da1ee23f12812a19dc57fa4cf3115519',
              code:'piluj',
              action:'field_price_getlist',
              field_id:fieldId,
              stadium_doc_id:stadiumId,
            },
          })
      yield put(setData({fieldsPrice:response.data.response_data}))
     
    } catch (err) {
        console.log('error',err)
    }
  }


export function* addFieldDataSaga({data}){
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    console.log('data add',data)
    try {
      yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'field_price_add',
            field_id:data.field_id,
            stadium_doc_id:stadiumId,
            is_mon:data.is_mon?"0":'1',
            is_tue:data.is_tue?"0":'1',
            is_wed:data.is_wed?"0":'1',
            is_thu:data.is_thu?"0":'1',	
            is_fri:data.is_fri?"0":'1',	
            is_sat:data.is_sat?"0":'1',	
            is_sun:data.is_sun?"0":'1',	
            is_hol:data.is_hol?"0":'1',
            start_time:moment.utc(data.start_time*1000).format('HH:mm:ss'),
            end_time:moment.utc(data.end_time*1000).format('HH:mm:ss'),
            color:data.color,
            normal_class:data.normal_class,
            student_class:data.student_class,
            student_class_half:data.student_class_half,	
            college_class:data.college_class,	
            college_class_half:data.college_class_half,	
            aged_class:data.aged_class,	
            aged_class_half:data.aged_class_half,	
            vip_class:data.vip_class,	
            vip_class_half:data.vip_class_half,	
            silver_class:data.silver_class,	
            silver_class_half:data.silver_class_half,	
            gold_class:data.gold_class,	
            gold_class_half:data.gold_class_half,	
            one_class:data.one_class,	
            one_class_half:data.one_class_half,	
            two_class:data.two_class,	
            two_class_half:data.two_class_half,	
            three_class:data.three_class,	
            three_class_half:data.three_class_half,
          },
        )
      yield setData({colorPrice:"#CA0813"})
      yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}



export function* editFieldDataSaga({data}){
    const stadiumId = yield select(state => state.auth.user[0].stadium_doc.id)
    try {
        yield axios.post(apiUrl, {
          
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'field_price_edit',
            id:data.id,
            field_id:data.field_id,
            stadium_doc_id:stadiumId,
            is_mon:data.is_mon?"0":'1',
            is_tue:data.is_tue?"0":'1',
            is_wed:data.is_wed?"0":'1',
            is_thu:data.is_thu?"0":'1',	
            is_fri:data.is_fri?"0":'1',	
            is_sat:data.is_sat?"0":'1',	
            is_sun:data.is_sun?"0":'1',	
            is_hol:data.is_hol?"0":'1',
            start_time:moment.utc(data.start_time*1000).format('HH:mm:ss'),
            end_time:moment.utc(data.end_time*1000).format('HH:mm:ss'),
            color:data.color,
            normal_class:data.normal_class,
            student_class:data.student_class,
            student_class_half:data.student_class_half,	
            college_class:data.college_class,	
            college_class_half:data.college_class_half,	
            aged_class:data.aged_class,	
            aged_class_half:data.aged_class_half,	
            vip_class:data.vip_class,	
            vip_class_half:data.vip_class_half,	
            silver_class:data.silver_class,	
            silver_class_half:data.silver_class_half,	
            gold_class:data.gold_class,	
            gold_class_half:data.gold_class_half,	
            one_class:data.one_class,	
            one_class_half:data.one_class_half,	
            two_class:data.two_class,	
            two_class_half:data.two_class_half,	
            three_class:data.three_class,	
            three_class_half:data.three_class_half,
          },
        )
      yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}

export function* deleteFieldDataSaga({id}){
    try {
      yield axios.get(apiUrl, {
          params: {
            apikey: 'da1ee23f12812a19dc57fa4cf3115519',
            code:'piluj',
            action:'field_price_delete',
            id:id
          },
        })
    yield call(setFieldDataSaga)
  } catch (err) {
      console.log('error',err)
  }
}


export function* importPriceSaga({data}){
  const fieldIdImport = yield select(state => state.field_managementPriceSaga.fieldIdImport)
  try {
    yield axios.get(apiUrl, {
        params: {
          apikey: 'da1ee23f12812a19dc57fa4cf3115519',
          code:'piluj',
          action:'field_price_import',
          field_id_from:fieldIdImport,
          field_id_to:data.fieldId
        },
      })
  yield call(setFieldDataSaga)
} catch (err) {
    console.log('error',err)
}
}

export function* fieldManagementPriceWatcher() {
    yield all([
      takeLatest(actionTypes.SET_FIELD_DATA_PRICE, setFieldDataSaga),
      takeLatest(actionTypes.ADD_FIELD_DATA_PRICE, addFieldDataSaga),
      takeLatest(actionTypes.EDIT_FIELD_DATA_PRICE, editFieldDataSaga),
      takeLatest(actionTypes.DELETE_FIELD_DATA_PRICE, deleteFieldDataSaga),
      takeLatest(actionTypes.IMPORT_FIELD_PRICE, importPriceSaga),
    ])
}
const initial = {
  fieldsPrice: [],
  colorPrice:"#CA0813",
  colorPriceEdit:'',
  fieldId:0,
  fieldIdImport:0,
  firstTime:true,
}

export default createReducer(initial, state => ({
  [SET_DATA]: ({data}) => ({...state, ...data}),
}))
