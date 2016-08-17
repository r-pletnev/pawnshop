import React, {Component} from 'react'

export default class Button extends Component {
  static defaultProps = {
    href: '#',
    text: 'Ok',
    type: 'warning',
    role: 'button'
  }

  render() {
    return(
      <a 
        href={this.props.href} 
        className={`btn btn-${this.props.type}`}
        role={this.props.role}
        {...this.props}
      >
        {this.props.text}
      </a>
    )
  }
}
