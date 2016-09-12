import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import user from './user'
import app from './app'

export const rootReducer = combineReducers({
  user,
  app,
  form: formReducer
})
