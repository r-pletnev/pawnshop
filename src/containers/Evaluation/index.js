import _ from 'lodash'
import React, {Component} from 'react'
import InputRange from 'react-input-range'
import './react-input-range.css'
import {gold} from '../../data/gold'

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
    if (_.isEmpty(goldElm)) return

    const {price} = goldElm

    this.setState({
      price,
      goldPrice: price * this.state.weigth
    })
  }

  changeGoldPrice(){
    this.setState({
      goldPrice: this.state.weigth * this.state.price
    })
  }

  getSelectGold(){
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
        <form className='form-inline'>
          <div className='form-group'>
            <label for='goldWeigth'>Вес изделия</label>
            {' '}
            <div className='input-group'>
              <div className='input-group-addon' style={{width: '250px'}}>
                <InputRange
                  maxValue={10}
                  minValue={1}
                  value={this.state.weigth}
                  onChange={this.handleValueChange.bind(this)}
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
                  onChange={this.handleInputChange.bind(this)}
                  id='goldWeigth'
                />
              </div>
            </div>
          </div>
          {' '}
          <div className='form-group'>
            <label for='goldMark'>Проба</label>
            {' '}
            {this.getSelectGold.bind(this)()}
          </div>
          {' '}
          <div className='form-group'>
            <label for='goldPrice'>Цена</label>
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


        {/*<div className='row'>
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
              maxValue={10}
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
              max={10}
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
        </div>*/}
      </div>
    )
  }
}
