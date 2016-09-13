import _ from 'lodash'

export function getWorkInteval(){
  return `${_.padStart(this.workTime.begin, 2 ,'0')}.00-${_.padStart(this.workTime.end, 2, '0')}.00` 
}

