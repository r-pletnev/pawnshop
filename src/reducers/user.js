import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

const initialState = {
  isAuthenticated: false,
  username: null,
  email: null
}

export default function userState(state = initialState, action){

  switch(action.type){
    case LOGOUT_SUCCESS:
    case LOGIN_FAIL:
    case LOGIN_REQUEST:
      return initialState

    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        username: action.payload.name,
        email: action.payload.email
      }

    default:
      return state
  }

}
