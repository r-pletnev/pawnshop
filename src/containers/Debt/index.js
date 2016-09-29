import _ from 'lodash'
import React, {Component} from 'react'
import GradientHeader from '../GradientHeader'
import DebtForm from '../forms/DebtForm'
import {connect} from 'react-redux'
import {formatDate} from '../../utilis'
import {eraseQueries} from '../../actions/DebtActions'

const yellowCross = {
  position: 'relative',
  top: '-2em',
  right: '-2em',
  fontSize: '22px',
  color: 'orange'
}
class Debt extends Component {
  removeTable(){
    this.props.dispatch(eraseQueries())
  }

  getTable(){
    if(_.isEmpty(this.props.queries)) return <div style={{lineHeight: '14.2em', visibility: 'hidden'}}>t</div>

    const rows = this.props.queries.map((elm, index) => {
      return (
        <tr>
          <td>{++index}</td>
          <td>{elm.zalogNumber}</td>
          <td>{formatDate(new Date(elm.relizDate))}</td>
          <td>{elm.percent}</td>
        </tr>
      )
    })
    
    return (
    <div className='jumbotron yellow-jumbotron'>
      <button style={yellowCross} onClick={this.removeTable.bind(this)} className='btn btn-default pull-right'>&times;</button>
      <div className='caption'>
        <h3 className='text-center'>
          Таблица билетов
        </h3>
      </div>
      <table className='table table-hover table-bordered' id='percentTable'>
        <thead>
          <tr>
            <th>№</th>
            <th>Номер залога</th>
            <th>Дата реализации</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      <span className='pull-right'>
        <strong>Общая сумма:{' '}{this.props.sum}{' '}{'₽'}</strong>
      </span>
    </div>
    )
  }

  render(){
    return (
      <div>
        <GradientHeader>
          <h1>Узнать задолженность</h1>
          <p>Если вы являетесь нашим клиентом, вы можете узнать о текущей задолженности</p>
        </GradientHeader>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-sm-offset-3' style={{marginBottom:'1%'}}>
              <DebtForm />
            </div>
            <div className='col-sm-8 col-sm-offset-2'>
              {this.getTable.bind(this)()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    queries: state.debt.queries,
    sum: state.debt.sum
  }
}

export default connect(mapStateToProps)(Debt)
