import _ from 'lodash'
import React, {Component} from 'react'
import Card from './Card'
import {filials} from '../data/filials'
import Cardset from './Cardset'
import Evaluation from './Evaluation'
import Procent from './Procent'

export default class Container extends Component {
  getCardset(){
    const lombards = _.map(filials.results, id => { return filials[id]})
    const lombardCards = _.map(lombards, (elm, index) => {
      return (
        <Card
          key={index}
          name={elm.name}
          address={elm.address}
          phone={elm.phone}
          image={elm.image}
          id={elm.id}
          lat={elm.latitude}
          lon={elm.longitude}
          workInterval={elm.workInterval}
          daysInterval={elm.daysInterval}
          workTime={elm.workTime}
        />
       )
    })
    return <Cardset> {lombardCards} </Cardset>
  }


  render(){
     return (
       <div className="container">
         <hr className="featurette-divider" id="evaluation"/>
          <div className="featurette" >
            <Evaluation />
          </div>

          <hr className="featurette-divider" id="filials"/>

          <div className="featurette" >
            {this.getCardset()}
          </div>

          <hr className="featurette-divider" id="procent"/>

          <div className="featurette" >
            <Procent />
          </div>
          <hr className="featurette-divider" />
      </div>
    )
  }
}
