import {DEBT_QUERY_SUCCESS, DEBT_QUERIES_ERASE} from '../constants/Debt'
import {fetchPercent} from '../api/User'
import {errorDispatcher} from './AppActions'
import {SubmissionError} from 'redux-form'
import {store} from '../index.js'


function pushPercent(payload){
  return {
    type: DEBT_QUERY_SUCCESS,
    payload: {
      query: {
        ...payload,
        percent: parseFloat(payload.percent)}
    }
  }
}

export function getPercent(payload){
  const {zalog, surname} = payload
  return dispatch => {
    return fetchPercent({zalog, surname})
      .then(data => {
        dispatch(pushPercent(data))
      })
      .catch(error => {
        errorDispatcher(dispatch)(error)
        throw new SubmissionError({_error: 'Нет данных!'})
      })
  }
}

export function eraseQueries(){
  return {
    type: DEBT_QUERIES_ERASE
  }
}

