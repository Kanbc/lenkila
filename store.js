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
    SET_USERS_DATA: 'SET_USERS_DATA',
    ADD_USERS_DATA: 'ADD_USERS_DATA',
    EDIT_USERS_DATA: 'EDIT_USERS_DATA',
    SET_ADMIN_DATA: 'SET_ADMIN_DATA',
    EDIT_ADMIN_DATA: 'EDIT_ADMIN_DATA',
}

// 2. Action Creators
export const setUsersData = (newUsers) => {
    return {
        type: actionTypes.SET_USERS_DATA,
        newUsers,
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
    console.log('Set admin data!: ', admin);
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


export function initializeStore(initialState = exampleInitialState) {
    return createStore(combineReducers({ ...reducers }), initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}