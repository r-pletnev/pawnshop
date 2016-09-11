import React, {Component} from 'react'
import './content.css'

export default class Cardset extends Component {
  render() {
    return (
      <div>
        <h2>Филиалы</h2>
        <div className='row filials'>
            {this.props.children}
        </div>
      </div>
    )
  }
}
