import _ from 'lodash'
import React, {Component} from 'react'
import Card from './Card'
import {filials} from '../../data/filials'
import Cardset from './Cardset'
import Evaluation from './Evaluation'
import ImageHeader from './ImageHeader'


export default class Container extends Component {
  getCardset(){
    const lombards = _.map(filials.results, id => {return filials[id]})
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
      <div>
        <ImageHeader />
        <div className="container">
          <hr className="featurette-divider" id="evaluation"/>
          <div className="featurette" >
            <Evaluation />
          </div>
          <hr className="featurette-divider" id="filials"/>
          <div className="featurette" >
            {this.getCardset()}
          </div>
        </div>
      </div>
    )
  }
}
