import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './reducers';

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
    SET_FIELD_DATA_HOLIDAY:'SET_FIELD_DATA_HOLIDAY',
    ADD_FIELD_DATA_HOLIDAY:'ADD_FIELD_DATA_HOLIDAY',
    EDIT_FIELD_DATA_HOLIDAY:'EDIT_FIELD_DATA_HOLIDAY',
    DELETE_FIELD_DATA_HOLIDAY:'DELETE_FIELD_DATA_HOLIDAY',
    SETID_FIELD_DATA_HOLIDAY:'SETID_FIELD_DATA_HOLIDAY',
    //field-management-field
    SET_FIELD_DATA_FIELD:'SET_FIELD_DATA_FIELD',
    ADD_FIELD_DATA_FIELD:'ADD_FIELD_DATA_FIELD',
    EDIT_FIELD_DATA_FIELD:'EDIT_FIELD_DATA_FIELD',
    DELETE_FIELD_DATA_FIELD:'DELETE_FIELD_DATA_FIELD',
    SETID_FIELD_DATA_FIELD:'SETID_FIELD_DATA_FIELD',
    //field-management-stadium
    SET_FIELD_DATA_STD:'SET_FIELD_DATA_STD',
    ADD_FIELD_DATA_STD:'ADD_FIELD_DATA_STD',
    EDIT_FIELD_DATA_STD:'EDIT_FIELD_DATA_STD',

    SET_NOTE:'SET_NOTE',
    SET_NOTE_ID:'SET_NOTE_ID',
    SET_NOTE_DATE:'SET_NOTE_DATE',
    ADD_NOTE:'ADD_NOTE',
    EDIT_NOTE:'EDIT_NOTE',
    DELETE_NOTE:'DELETE_NOTE',

    LOGIN:'LOGIN'

}

// 2. Action Creators
export const setUsersData = () => {
    return {
        type: actionTypes.SET_USERS_DATA,
    }
}
export const addUsersData = (newUser) => {
    return {
        type: actionTypes.ADD_USERS_DATA,
        newUser,
    }
}
export const editUsersData = (newUser) => {
    return {
        type: actionTypes.EDIT_USERS_DATA,
        newUser,
    }
}
export const setAdminData = (admin) => {
    return {
        type: actionTypes.SET_ADMIN_DATA,
        admin,
    }
}
export const editAdminData = (admin) => {
    return {
        type: actionTypes.EDIT_ADMIN_DATA,
        admin,
    }
}
export const setThisDayNote = (newNote) => {
    return {
        type: actionTypes.SET_THIS_DAY_NOTE,
        newNote,
    }
}
export const addThisDayNote = (newNote) => {
    return {
        type: actionTypes.ADD_THIS_DAY_NOTE,
        newNote,
    }
}
export const editThisDayNote = (newNote) => {
    return {
        type: actionTypes.EDIT_THIS_DAY_NOTE,
        newNote,
    }
}
export const deleteThisDayNote = (newNote) => {
    return {
        type: actionTypes.DELETE_THIS_DAY_NOTE,
        newNote,
    }
}
export const setThisBookingDiscount = (newDiscount) => {
    console.log('Set discount data!: ', newDiscount);
    return {
        type: actionTypes.SET_THIS_BOOKING_DISCOUNT,
        newDiscount,
    }
}
export const addThisBookingDiscount = (newDiscount) => {
    return {
        type: actionTypes.ADD_THIS_BOOKING_DISCOUNT,
        newDiscount,
    }
}
export const editThisBookingDiscount = (newDiscount) => {
    return {
        type: actionTypes.EDIT_THIS_BOOKING_DISCOUNT,
        newDiscount,
    }
}
export const deleteThisBookingDiscount = (newDiscount) => {
    return {
        type: actionTypes.DELETE_THIS_BOOKING_DISCOUNT,
        newDiscount,
    }
}
export const setPaymentData = (newPayment) => {
    return {
        type: actionTypes.SET_PAYMENT_DATA,
        newPayment,
    }
}
export const addPaymentData = (newPayment) => {
    return {
        type: actionTypes.ADD_PAYMENT_DATA,
        newPayment,
    }
}
export const setFieldData = (newField) => {
    return {
        type: actionTypes.SET_FIELD_DATA,
        newField,
    }
}
export const addFieldData = (newField) => {
    return {
        type: actionTypes.ADD_FIELD_DATA,
        newField,
    }
}
export const editFieldData = (newField) => {
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
export const addFieldDataHoliday = (data) => {
    return {
        type: actionTypes.ADD_FIELD_DATA_HOLIDAY,
        data,
    }
}
export const editFieldDataHoliday = (data) => {
    return {
        type: actionTypes.EDIT_FIELD_DATA_HOLIDAY,
        data,
    }
}
export const deleteFieldDataHoliday = (id) => {
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
export const addFieldDataField = (data) => {
    return {
        type: actionTypes.ADD_FIELD_DATA_FIELD,
        data,
    }
}
export const editFieldDataField = (data) => {
    return {
        type: actionTypes.EDIT_FIELD_DATA_FIELD,
        data,
    }
}
export const deleteFieldDataField = (id) => {
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
export const addFieldDataSTD = (data) => {
    return {
        type: actionTypes.ADD_FIELD_DATA_STD,
        data,
    }
}
export const editFieldDataSTD = (data) => {
    return {
        type: actionTypes.EDIT_FIELD_DATA_STD,
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

export const setNoteDate = (date) => {
    return {
        type: actionTypes.SET_NOTE_DATE,
        date,
    }
}
export const addNote = (data) => {
    return {
        type: actionTypes.ADD_NOTE,
        data,
    }
}
export const editNote = (data) => {
    return {
        type: actionTypes.EDIT_NOTE,
        data,
    }
}

export const deleteNote = (id) => {
    return {
        type: actionTypes.DELETE_NOTE,
        id,
    }
}

export const login = (data) => {
    return {
        type: actionTypes.LOGIN,
        data,
    }
}



// export function initializeStore(initialState = exampleInitialState) {
//     return createStore(combineReducers({ ...reducers }), initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
// }