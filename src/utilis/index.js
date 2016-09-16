import _ from 'lodash'

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
