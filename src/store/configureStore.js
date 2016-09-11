import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddlerware from 'redux-thunk'
import {rootReducer} from '../reducers'
import createLogger from 'redux-logger'

 
export default function configureStore() {
  const store = compose(
    applyMiddleware(thunkMiddlerware),
    applyMiddleware(createLogger())
  )(createStore)(rootReducer)

  return store
}
