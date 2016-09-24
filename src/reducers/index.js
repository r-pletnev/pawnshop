import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import user from './user'
import app from './app'
import debt from './debt'

export const rootReducer = combineReducers({
  user,
  app,
  debt,
  form: formReducer
})
