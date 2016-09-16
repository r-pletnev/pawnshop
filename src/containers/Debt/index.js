import React, {Component} from 'react'
import GradientHeader from '../GradientHeader'
import DebtForm from '../forms/DebtForm'

export default class Debt extends Component {
  render(){
    return (
      <div>
        <GradientHeader>
          <h1>Узнать задолженность</h1>
          <p>Если вы являетесь нашим клиентом, вы можете узнать о текущей задолженности</p>
        </GradientHeader>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-sm-offset-2'>
              <DebtForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
