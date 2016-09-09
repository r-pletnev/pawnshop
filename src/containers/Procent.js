import React, {Component} from 'react'

export default class Procent extends Component {
  render(){
    return(
      <div>
        <h2>Оплатить проценты</h2>
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="exampleInputName2">Залоговый билет</label>{' '}
            <input type="number" className="form-control" id="exampleInputName2" placeholder="23255" />
          </div>
          {' '}
          <div className="form-group">
            <label htmlFor="exampleInputEmail2">Кредитная карта</label>{' '}
            <input type="text" className="form-control" id="exampleInputEmail2" placeholder="" />
          </div>
          {' '}
          <button type="submit" className="btn btn-primary"><span className='glyphicon glyphicon-credit-card'>Оплатить</span></button>
        </form>
      </div>
    )
  }
}
