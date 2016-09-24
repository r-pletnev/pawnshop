import _ from 'lodash'
import {UserAuthWrapper} from 'redux-auth-wrapper'
import {showLoginWindow} from '../actions/AppActions'
import LoginWidget from '../containers/Page/LoginWidget'

export function getWorkInteval(){
  return `${_.padStart(this.workTime.begin, 2 ,'0')}.00-${_.padStart(this.workTime.end, 2, '0')}.00` 
}

export function addToDate(amountOfTime, type='m', dateToAdd=new Date){
  const timeTypes = {
    m: 'Minutes',
    ms: 'Milliseconds',
    h: 'Hours',
    s: 'Seconds'
  }

  const setFuncName = `set${timeTypes[type]}`
  const getFuncName = `get${timeTypes[type]}`
  return +dateToAdd[setFuncName](dateToAdd[getFuncName]() + amountOfTime)
}

export function formatDate(currentDate=new Date, locale='ru', options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          }){
  return currentDate.toLocaleString(locale, options)
}

export function tokenIsValid(tokenObj, checkingDate=new Date()){
  if (_.isEmpty(tokenObj)) return false
  return tokenObj.expired >= +checkingDate
}

export const UserIsAuthenticated = UserAuthWrapper ({
  authSelector: state => state.user,
  predicate: user => user.isAuthenticated,
  wrapperDisplayName: 'UserIsAuthenticated',
  redirectAction: showLoginWindow
})

export const UserOrElse = (Component, FailureComponent) => UserAuthWrapper({
  authSelector: state => state.user,
  predicate: user => user.isAuthenticated,
  wrapperDisplayName: 'UserOrElse',
  FailureComponent
})(Component)
