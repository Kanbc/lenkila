import { call, put, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {actionTypes} from '../store'
import axios from 'axios'
import {createReducer,Creator} from './helper'

const SET_DATA_BOOKING = 'SET_DATA_BOOKING'

export const setDataBooking = Creator(SET_DATA_BOOKING,'data')


const apiUrl = 'https://wolvescorp.com/lenkila/api/main/call.php'






export function* bookingWatcher() {
    yield all([

    ])
}

const initial = {

}

export default createReducer(initial, state => ({
  [SET_DATA_BOOKING]: ({data}) => ({...state, ...data}),
}))
