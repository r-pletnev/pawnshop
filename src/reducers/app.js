import {
  APP_REQUEST,
  APP_SUCCESS,
  APP_FAIL,
  APP_ON_LOGIN_MODAL,
  APP_OFF_LOGIN_MODAL
} from '../constants/App'

const initialState = {
  isFetching: false,
  error: false,
  errorMsg: null,
  showLoginModal: false
}

export default function appState(state = initialState, action){
  switch (action.type){
    case APP_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false,
        errorMsg: null
      }

    case APP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        errorMsg: null
      }

    case APP_FAIL:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMsg: action.payload.errorMsg
      }

    case APP_ON_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: true
      }

    case APP_OFF_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: false
      }

    default:
      return state
  }

}
