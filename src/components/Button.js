import _ from 'lodash'
import React, {Component} from 'react'

export default class Button extends Component {
  static defaultProps = {
    href: '#',
    text: 'Ok',
    type: 'warning',
    role: 'button'
  }

  render() {
    const propsWithoutText = _.reduce(this.props, (acc, value, key) => {
      if (key === 'text') return acc
      acc[key] = value
      return acc
    },{})

    return(
      <a 
        href={this.props.href} 
        className={`btn btn-${this.props.type}`}
        role={this.props.role}
        {...propsWithoutText}
      >
        {this.props.text}
      </a>
    )
  }
}
