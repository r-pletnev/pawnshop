import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from '../constants/User'

import {appRequest, appSuccess} from './AppActions'
import {userLogin} from '../api/User'

export function loginUser(payload){
  const {username, password} = payload
  return dispatch => {
    dispatch(appRequest())
    userLogin({username, password}, (data) => {
      dispatch(loginUserSuccess({token: data.token})),
      dispatch(appSuccess())
    }, dispatch)
  }
}
