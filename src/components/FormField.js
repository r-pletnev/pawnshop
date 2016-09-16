import React, {Component} from 'react'
import {Field} from 'redux-form'

export const renderField = ({input, label, type, meta: { touched, error }, id, className, showLabel }) => (
  <div>
    <div>
      <label htmlFor={id} className={showLabel ? 'sr-only' : null}>{label}</label>
      <input {...input} id={id} className={className} placeholder={showLabel ? null : label} type={type}/>
      {touched && error && <span className='text-warning pull-right'><i>{error}</i></span>}
    </div>
  </div>
)

export const horizontalField = ({input, label, type, meta: { touched, error }, id }) => (
  <div className='form-group'>
      <label htmlFor={id} className='col-sm-4 control-label'>{label}</label>
      <div className='col-sm-8'>
        <input {...input} type={type} className='form-control' placeholder={label} />
        {touched && error && <span className='text-warning pull-right'><i>{error}</i></span>}
      </div>
  </div>
)


export default class FormField extends Component {
  static PropTypes = {
    label: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    type: React.PropTypes.string,
    showLabel: React.PropTypes.bool,
    horizontal: React.PropTypes.bool
  }

  static defaultProps = {
    className: 'form-control',
    showLabel: true,
    type: 'text',
    horizontal: false
  }

  render(){
    const {type, label, className, horizontal,  ...restProps} = this.props
    return(
      <Field
        type={type}
        component={horizontal ? horizontalField : renderField}
        label={label}
        className={className}
        {...restProps}
      />
    )
  }
}
