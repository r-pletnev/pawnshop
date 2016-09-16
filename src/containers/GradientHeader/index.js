import React, {Component} from 'react'
import './style.css'

export default class GradientHeader extends Component {
  render(){
    return (
      <div className='yellow-header bs-docs-header'>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
