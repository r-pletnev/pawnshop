import _ from 'lodash'
import React, {Component} from 'react'
import InputRange from 'react-input-range'
import './styles/react-input-range.css'
import {gold} from './data/gold'

export default class Evaluation extends Component {
  constructor(props){
    super(props)
    this.state = { weigth: 5, price: 0, goldPrice: 0 }
  }
  handleValueChange(component, value){
    this.setState({weigth: value}, this.changeGoldPrice.bind(this)())
  }

  handleInputChange(e){
    this.setState({weigth: parseInt(e.target.value)}, this.changeGoldPrice.bind(this)())
  }

  handleChangeGold(e){
    const goldTest = parseInt(e.target.value)
    if(_.isNaN(goldTest)) return
    const goldElm = _.find(gold, (elm => {return elm.id === goldTest}))
    this.setState({
      price: _.isEmpty(goldElm) ? 0 : goldElm.price
   }, this.changeGoldPrice.bind(this)() )
  }

  changeGoldPrice(){
    this.setState({
      goldPrice: this.state.weigth * this.state.price
    })
  }

  getSelectGold(){
    const goldOptions = gold.map(elm => {
      return (
        <option value={elm.id}>{elm.name}</option>
      )
    })
    goldOptions.unshift(<option value=''>{'Выберите пробу'}</option>)
    return (
          <select
            style={{height: '3em'}}
            onChange={this.handleChangeGold.bind(this)}
          >
            {goldOptions}
          </select>
    )
  }

  render(){
    return (
      <div>
        <h2 id='evaluation'>Оценка золота</h2>
        <div className='row'>
          <div className='col-sm-5'>
            <h4 className='text-center'>Вес изделия</h4>
          </div>
          <div className='col-sm-3'>
            <h4 className='text-center'>Проба</h4>
          </div>
          <div className='col-sm-4'>
            <h4 className='text-center'>Цена</h4>
          </div>
        </div>
        <div className='row' style={{height: '4em'}}>
          <div className='col-sm-4'>
            <InputRange
              maxValue={100}
              minValue={1}
              value={this.state.weigth}
              onChange={this.handleValueChange.bind(this)}
              labelSuffix={' г.'}
              name={'Вес'}
            />
          </div>
          <div className='col-sm-1'>
            <input 
              style={{height:'3em'}}
              className='text-center'
              type='number'
              min={1}
              max={100}
              value={this.state.weigth}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className='col-sm-3'>
            {this.getSelectGold.bind(this)()}
          </div>
          <div className='col-sm-4'>
            <input
              style={{height: '3em'}}
              className='text-center'
              type='number'
              min={ 0 }
              value={this.state.goldPrice}
              disabled
            />
          </div>
        </div>
      </div>
    )
  }
}
