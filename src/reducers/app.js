import {
  APP_REQUEST,
  APP_SUCCESS,
  APP_FAIL
} from '../constants/App'

const initialState = {
  isFetching: false,
  error: false,
  errorMsg: null
}

export default function appState(state = initialState, action){
  switch (action.type){
    case APP_REQUEST:
      return {
        isFetching: true,
        error: false,
        errorMsg: null
      }

    case APP_SUCCESS:
      return {
        isFetching: false,
        error: false,
        errorMsg: null
      }

    case APP_FAIL:
      return {
        isFetching: false,
        error: true,
        errorMsg: action.payload.errorMsg
      }
    default:
      return state
  }

}

