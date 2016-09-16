import _ from 'lodash'
import React, {Component} from 'react'

export default class Button extends Component {
  static defaultProps = {
    href: '#',
    text: 'Ok',
    type: 'warning',
    role: 'button',
    className: null
  }

  render() {
    const {text, className, ...propsWithoutText} = this.props
    return(
      <a 
        href={this.props.href} 
        className={`btn btn-${this.props.type} ${className}`}
        role={this.props.role}
        {...propsWithoutText}
      >
        {text}
      </a>
    )
  }
}
