import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './reducers'

const exampleInitialState = {
  users: null,
}

// Redux = Action Creators + Reducers (Action type in the middle)

// 1. Action Types
export const actionTypes = {
  //user-management
  SET_USERS_DATA: 'SET_USERS_DATA',
  ADD_USERS_DATA: 'ADD_USERS_DATA',
  EDIT_USERS_DATA: 'EDIT_USERS_DATA',
  DELETE_USERS_DATA: 'DELETE_USERS_DATA',

  SET_ADMIN_DATA: 'SET_ADMIN_DATA',
  EDIT_ADMIN_DATA: 'EDIT_ADMIN_DATA',

  SET_THIS_DAY_NOTE: 'SET_THIS_DAY_NOTE',
  ADD_THIS_DAY_NOTE: 'ADD_THIS_DAY_NOTE',
  EDIT_THIS_DAY_NOTE: 'EDIT_THIS_DAY_NOTE',
  DELETE_THIS_DAY_NOTE: 'DELETE_THIS_DAY_NOTE',

  SET_THIS_BOOKING_DISCOUNT: 'SET_THIS_BOOKING_DISCOUNT',
  ADD_THIS_BOOKING_DISCOUNT: 'ADD_THIS_BOOKING_DISCOUNT',
  EDIT_THIS_BOOKING_DISCOUNT: 'EDIT_THIS_BOOKING_DISCOUNT',
  DELETE_THIS_BOOKING_DISCOUNT: 'DELETE_THIS_BOOKING_DISCOUNT',

  SET_PAYMENT_DATA: 'SET_PAYMENT_DATA',
  ADD_PAYMENT_DATA: 'ADD_PAYMENT_DATA',

  SET_FIELD_DATA: 'SET_FIELD_DATA',
  ADD_FIELD_DATA: 'ADD_FIELD_DATA',
  EDIT_FIELD_DATA: 'EDIT_FIELD_DATA',

  //field-management-holiday
  SET_FIELD_DATA_HOLIDAY: 'SET_FIELD_DATA_HOLIDAY',
  ADD_FIELD_DATA_HOLIDAY: 'ADD_FIELD_DATA_HOLIDAY',
  EDIT_FIELD_DATA_HOLIDAY: 'EDIT_FIELD_DATA_HOLIDAY',
  DELETE_FIELD_DATA_HOLIDAY: 'DELETE_FIELD_DATA_HOLIDAY',
  SETID_FIELD_DATA_HOLIDAY: 'SETID_FIELD_DATA_HOLIDAY',
  //field-management-field
  SET_FIELD_DATA_FIELD: 'SET_FIELD_DATA_FIELD',
  ADD_FIELD_DATA_FIELD: 'ADD_FIELD_DATA_FIELD',
  EDIT_FIELD_DATA_FIELD: 'EDIT_FIELD_DATA_FIELD',
  DELETE_FIELD_DATA_FIELD: 'DELETE_FIELD_DATA_FIELD',
  SETID_FIELD_DATA_FIELD: 'SETID_FIELD_DATA_FIELD',
  //field-management-stadium
  SET_FIELD_DATA_STD: 'SET_FIELD_DATA_STD',
  ADD_FIELD_DATA_STD: 'ADD_FIELD_DATA_STD',
  EDIT_FIELD_DATA_STD: 'EDIT_FIELD_DATA_STD',

  //field-management-giftcode
  SET_FIELD_DATA_GIFT: 'SET_FIELD_DATA_GIFT',
  ADD_FIELD_DATA_GIFT: 'ADD_FIELD_DATA_GIFT',
  EDIT_FIELD_DATA_GIFT: 'EDIT_FIELD_DATA_GIFT',
  DELETE_FIELD_DATA_GIFT: 'DELETE_FIELD_DATA_GIFT',

  //field-management-price
  SET_FIELD_DATA_PRICE: 'SET_FIELD_DATA_PRICE',
  ADD_FIELD_DATA_PRICE: 'ADD_FIELD_DATA_PRICE',
  EDIT_FIELD_DATA_PRICE: 'EDIT_FIELD_DATA_PRICE',
  DELETE_FIELD_DATA_PRICE: 'DELETE_FIELD_DATA_PRICE',
  IMPORT_FIELD_PRICE: 'IMPORT_FIELD_PRICE',

  SET_NOTE: 'SET_NOTE',
  SET_NOTE_ID: 'SET_NOTE_ID',
  SET_NOTE_DATE: 'SET_NOTE_DATE',
  ADD_NOTE: 'ADD_NOTE',
  EDIT_NOTE: 'EDIT_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
  //auth
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  GETUSER_INFO: 'GETUSER_INFO',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  RESET_PASSWORD: 'RESET_PASSWORD',
  CHANGE_PASSWORD_USER: 'CHANGE_PASSWORD_USER',

  //customer type
  GET_CUSTOMER_TYPE: 'GET_CUSTOMER_TYPE',
  ADD_CUSTOMER_TYPE: 'ADD_CUSTOMER_TYPE',
  EDIT_CUSTOMER_TYPE: 'EDIT_CUSTOMER_TYPE',
  DELETE_CUSTOMER_TYPE: 'DELETE_CUSTOMER_TYPE',
  GET_CUSTOMER_TYPE_ID: 'GET_CUSTOMER_TYPE_ID',
  GET_CUSTOMER_TYPE_ID_NEXT: 'GET_CUSTOMER_TYPE_ID_NEXT',

  //customer
  GET_CUSTOMER: 'GET_CUSTOMER',
  ADD_CUSTOMER: 'ADD_CUSTOMER',
  EDIT_CUSTOMER: 'EDIT_CUSTOMER',
  DELETE_CUSTOMER: 'DELETE_CUSTOMER',

  //customer history
  GET_CUSTOMER_HISTORY: 'GET_CUSTOMER_HISTORY',
  ADD_CUSTOMER_HISTORY: 'ADD_CUSTOMER_HISTORY',

  //booking
  GETLIST_BOOKING: 'GETLIST_BOOKING',
  ADD_BOOKING:'ADD_BOOKING',
  CHECK_PRICE:'CHECK_PRICE',
  DELETE_BOOKING:'DELETE_BOOKING',
  EDIT_BOOKING:'EDIT_BOOKING',
  EXPORT_CSV:'EXPORT_CSV',
  GET_EDIT_MAIN_ID:'GET_EDIT_MAIN_ID',

  //boost
  GETLIST_BOOST:'GETLIST_BOOST',
  ADD_BOOST:'ADD_BOOST',
}

// 2. Action Creators
export const setUsersData = () => {
  return {
    type: actionTypes.SET_USERS_DATA,
  }
}
export const addUsersData = newUser => {
  return {
    type: actionTypes.ADD_USERS_DATA,
    newUser,
  }
}
export const editUsersData = newUser => {
  return {
    type: actionTypes.EDIT_USERS_DATA,
    newUser,
  }
}

export const deleteUsersData = id => {
  return {
    type: actionTypes.DELETE_USERS_DATA,
    id,
  }
}

export const resetpasswordUsersData = data => {
  return {
    type: actionTypes.RESET_PASSWORD,
    data,
  }
}

export const setAdminData = admin => {
  return {
    type: actionTypes.SET_ADMIN_DATA,
    admin,
  }
}
export const editAdminData = admin => {
  return {
    type: actionTypes.EDIT_ADMIN_DATA,
    admin,
  }
}
export const setThisDayNote = newNote => {
  return {
    type: actionTypes.SET_THIS_DAY_NOTE,
    newNote,
  }
}
export const addThisDayNote = newNote => {
  return {
    type: actionTypes.ADD_THIS_DAY_NOTE,
    newNote,
  }
}
export const editThisDayNote = newNote => {
  return {
    type: actionTypes.EDIT_THIS_DAY_NOTE,
    newNote,
  }
}
export const deleteThisDayNote = newNote => {
  return {
    type: actionTypes.DELETE_THIS_DAY_NOTE,
    newNote,
  }
}
export const setThisBookingDiscount = newDiscount => {
  return {
    type: actionTypes.SET_THIS_BOOKING_DISCOUNT,
    newDiscount,
  }
}
export const addThisBookingDiscount = newDiscount => {
  return {
    type: actionTypes.ADD_THIS_BOOKING_DISCOUNT,
    newDiscount,
  }
}
export const editThisBookingDiscount = newDiscount => {
  return {
    type: actionTypes.EDIT_THIS_BOOKING_DISCOUNT,
    newDiscount,
  }
}
export const deleteThisBookingDiscount = newDiscount => {
  return {
    type: actionTypes.DELETE_THIS_BOOKING_DISCOUNT,
    newDiscount,
  }
}
export const setPaymentData = newPayment => {
  return {
    type: actionTypes.SET_PAYMENT_DATA,
    newPayment,
  }
}
export const addPaymentData = newPayment => {
  return {
    type: actionTypes.ADD_PAYMENT_DATA,
    newPayment,
  }
}
export const setFieldData = newField => {
  return {
    type: actionTypes.SET_FIELD_DATA,
    newField,
  }
}
export const addFieldData = newField => {
  return {
    type: actionTypes.ADD_FIELD_DATA,
    newField,
  }
}
export const editFieldData = newField => {
  return {
    type: actionTypes.EDIT_FIELD_DATA,
    newField,
  }
}

//field holiday
export const setFieldDataHoliday = () => {
  return {
    type: actionTypes.SET_FIELD_DATA_HOLIDAY,
  }
}
export const addFieldDataHoliday = data => {
  return {
    type: actionTypes.ADD_FIELD_DATA_HOLIDAY,
    data,
  }
}
export const editFieldDataHoliday = data => {
  return {
    type: actionTypes.EDIT_FIELD_DATA_HOLIDAY,
    data,
  }
}
export const deleteFieldDataHoliday = id => {
  return {
    type: actionTypes.DELETE_FIELD_DATA_HOLIDAY,
    id,
  }
}

//field document

export const setFieldDataField = () => {
  return {
    type: actionTypes.SET_FIELD_DATA_FIELD,
  }
}
export const addFieldDataField = data => {
  return {
    type: actionTypes.ADD_FIELD_DATA_FIELD,
    data,
  }
}
export const editFieldDataField = data => {
  return {
    type: actionTypes.EDIT_FIELD_DATA_FIELD,
    data,
  }
}
export const deleteFieldDataField = id => {
  return {
    type: actionTypes.DELETE_FIELD_DATA_FIELD,
    id,
  }
}

//field stadium
export const setFieldDataSTD = () => {
  return {
    type: actionTypes.SET_FIELD_DATA_STD,
  }
}
export const addFieldDataSTD = data => {
  return {
    type: actionTypes.ADD_FIELD_DATA_STD,
    data,
  }
}
export const editFieldDataSTD = data => {
  return {
    type: actionTypes.EDIT_FIELD_DATA_STD,
    data,
  }
}

//field stadium GIFT

export const setFieldDataGift = () => {
  return {
    type: actionTypes.SET_FIELD_DATA_GIFT,
  }
}
export const addFieldDataGift = data => {
  return {
    type: actionTypes.ADD_FIELD_DATA_GIFT,
    data,
  }
}
export const editFieldDataGift = data => {
  return {
    type: actionTypes.EDIT_FIELD_DATA_GIFT,
    data,
  }
}
export const deleteFieldDataGift = id => {
  return {
    type: actionTypes.DELETE_FIELD_DATA_GIFT,
    id,
  }
}

//field price

export const setFieldDataPrice = () => {
  return {
    type: actionTypes.SET_FIELD_DATA_PRICE,
  }
}
export const addFieldDataPrice = data => {
  return {
    type: actionTypes.ADD_FIELD_DATA_PRICE,
    data,
  }
}
export const editFieldDataPrice = data => {
  return {
    type: actionTypes.EDIT_FIELD_DATA_PRICE,
    data,
  }
}
export const deleteFieldDataPrice = id => {
  return {
    type: actionTypes.DELETE_FIELD_DATA_PRICE,
    id,
  }
}

export const importPrice = data => {
  return {
    type: actionTypes.IMPORT_FIELD_PRICE,
    data,
  }
}

//note

export const setNote = () => {
  return {
    type: actionTypes.SET_NOTE,
  }
}

export const setNoteId = () => {
  return {
    type: actionTypes.SET_NOTE_ID,
  }
}

export const setNoteDate = date => {
  return {
    type: actionTypes.SET_NOTE_DATE,
    date,
  }
}
export const addNote = data => {
  return {
    type: actionTypes.ADD_NOTE,
    data,
  }
}
export const editNote = data => {
  return {
    type: actionTypes.EDIT_NOTE,
    data,
  }
}

export const deleteNote = id => {
  return {
    type: actionTypes.DELETE_NOTE,
    id,
  }
}

export const login = data => {
  return {
    type: actionTypes.LOGIN,
    data,
  }
}
export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  }
}

export const getUserInfo = id => {
  return {
    type: actionTypes.GETUSER_INFO,
    id,
  }
}
//customer_type

export const getCustomerType = () => {
  return {
    type: actionTypes.GET_CUSTOMER_TYPE,
  }
}
export const addCustomerType = data => {
  return {
    type: actionTypes.ADD_CUSTOMER_TYPE,
    data,
  }
}
export const editCustomerType = data => {
  return {
    type: actionTypes.EDIT_CUSTOMER_TYPE,
    data,
  }
}
export const deleteCustomerType = id => {
  return {
    type: actionTypes.DELETE_CUSTOMER_TYPE,
    id,
  }
}

export const getCustomerTypeId = id => {
  return {
    type: actionTypes.GET_CUSTOMER_TYPE_ID,
    id: id,
  }
}

export const getCustomerTypeIdNext = id => {
  return {
    type: actionTypes.GET_CUSTOMER_TYPE_ID_NEXT,
    id: id,
  }
}

// customer

export const getCustomer = () => {
  return {
    type: actionTypes.GET_CUSTOMER,
  }
}
export const addCustomer = data => {
  return {
    type: actionTypes.ADD_CUSTOMER,
    data,
  }
}
export const editCustomer = data => {
  return {
    type: actionTypes.EDIT_CUSTOMER,
    data,
  }
}
export const deleteCustomer = id => {
  return {
    type: actionTypes.DELETE_CUSTOMER,
    id,
  }
}

export const addCustomerHistory = data => {
  return {
    type: actionTypes.ADD_CUSTOMER_HISTORY,
    data,
  }
}

export const getCustomerHistory = id => {
  return {
    type: actionTypes.GET_CUSTOMER_HISTORY,
    id,
  }
}

export const forgotPassword = email => {
  return {
    type: actionTypes.FORGOT_PASSWORD,
    email,
  }
}

export const changeUserPassword = data => {
  return {
    type: actionTypes.CHANGE_PASSWORD_USER,
    data,
  }
}

export const getListBooking = date => {
  return {
    type: actionTypes.GETLIST_BOOKING,
    date,
  }
}

export const addBooking = data => {
  return {
    type: actionTypes.ADD_BOOKING,
    data,
  }
}

export const editBooking = data => {
  return {
    type: actionTypes.EDIT_BOOKING,
    data,
  }
}

export const checkPrice = (data,customer) => {
  return {
    type: actionTypes.CHECK_PRICE,
    data,
    customer,
  }
}

export const deleteBooking = (id,date) => {
  return {
    type: actionTypes.DELETE_BOOKING,
    id,
    date,
  }
}

export const exportCsv = data => {
  return {
    type: actionTypes.EXPORT_CSV,
    data,
  }
}

export const getListBoost = date => {
  return {
    type: actionTypes.GETLIST_BOOST,
    date,
  }
}

export const addBoost = data => {
  return {
    type: actionTypes.ADD_BOOST,
    data,
  }
}

export const getEditMainByid = id => {
  return {
    type: actionTypes.GET_EDIT_MAIN_ID,
    id,
  }
}


// export function initializeStore(initialState = exampleInitialState) {
//     return createStore(combineReducers({ ...reducers }), initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
// }
