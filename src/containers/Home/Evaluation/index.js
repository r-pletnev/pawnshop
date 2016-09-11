import _ from 'lodash'
import React, {Component} from 'react'
import InputRange from 'react-input-range'
import './react-input-range.css'
import {gold} from '../../../data/gold'

export default class Evaluation extends Component {
  constructor(props){
    super(props)
    this.state = { weigth: 2, price: 0, goldPrice: 0 }
    this.handleWeightChange = this.handleWeightChange.bind(this)
    this.getSelectGoldWidget = this.getSelectGoldWidget.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChangeGold = this.handleChangeGold.bind(this)
  }

  handleWeightChange(component, value){
    this.setState({
      weigth: value,
      goldPrice: value * this.state.price
    })
  }

  handleInputChange(e){
    this.handleWeightChange(null, parseInt(e.target.value))
  }

  handleChangeGold(e){
    const goldTest = parseInt(e.target.value)
    if(_.isNaN(goldTest)) return
    const goldElm = _.find(gold, (elm => {return elm.id === goldTest}))
    if (_.isEmpty(goldElm)) return

    const {price} = goldElm

    this.setState({
      price,
      goldPrice: price * this.state.weigth
    })
  }

  getSelectGoldWidget(){
    const goldOptions = gold.map((elm, index) => {
      return (
        <option value={elm.id} key={index}>{elm.name}</option>
      )
    })
    goldOptions.unshift(<option value='' key={99}>{'Выберите пробу'}</option>)
    return (
      <select
        style={{height: '3em'}}
        id='goldMark'
        onChange={this.handleChangeGold}
        className='form-control'
      >
        {goldOptions}
      </select>
    )
  }

  render(){
    return (
      <div>
        <h2 id='evaluation'>Оценка золота</h2>
        <form className='form-inline'>
          <div className='form-group'>
            <label htmlFor='goldWeigth'>Вес изделия</label>
            {' '}
            <div className='input-group'>
              <div className='input-group-addon' style={{width: '250px'}}>
                <InputRange
                  maxValue={10}
                  minValue={1}
                  value={this.state.weigth}
                  onChange={this.handleWeightChange}
                  labelSuffix={' г.'}
                  name={'Вес'}
                />
              </div>
              <div className='input-group-addon'>
                <input 
                  className='form-control'
                  type='number'
                  min={1}
                  max={10}
                  value={this.state.weigth}
                  onChange={this.handleInputChange}
                  id='goldWeigth'
                />
              </div>
            </div>
          </div>
          {' '}
          <div className='form-group'>
            <label htmlFor='goldMark'>Проба</label>
            {' '}
            {this.getSelectGoldWidget()}
          </div>
          {' '}
          <div className='form-group'>
            <label htmlFor='goldPrice'>Цена</label>
            {' '}
            <input
              style={{height: '3em'}}
              className='form-control'
              type='number'
              min={ 0 }
              value={this.state.goldPrice}
              id='goldPrice'
              disabled
            />
          </div>
        </form>
      </div>
    )
  }
}
