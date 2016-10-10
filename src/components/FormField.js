import React, {Component} from 'react'
import {Field} from 'redux-form'

export const renderField = ({input, label, type, meta: { touched, error }, id, className, showLabel, value, helpText }) => (
  <div className='form-group'>
    <label htmlFor={id} className={showLabel ? null : 'sr-only'}>{label}{': '}</label>{' '}
    <input {...input} id={id} className={className} placeholder={showLabel ? null : label} type={type} value={value}/>
    {touched && error && <span className='text-warning pull-right'><i>{error}</i></span>}
    {helpText && <p className='help-block'>{helpText}</p>}
  </div>
)

export const horizontalField = ({input, label, type, meta: { touched, error }, id, helpText }) => (
  <div className='form-group'>
      <label htmlFor={id} className='col-sm-4 control-label'>{label}</label>
      <div className='col-sm-8'>
        <input {...input} type={type} className='form-control' placeholder={label} />
        {touched && error && <span className='text-warning pull-right'><i>{error}</i></span>}
      </div>
      {helpText && <p className='help-block'>{helpText}</p>}
  </div>
)


export default class FormField extends Component {
  static PropTypes = {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    type: React.PropTypes.string,
    showLabel: React.PropTypes.bool,
    horizontal: React.PropTypes.bool,
    helpText: React.PropTypes.string
  }

  static defaultProps = {
    className: 'form-control',
    showLabel: true,
    type: 'text',
    horizontal: false
  }

  render(){
    const {type, label, className, horizontal, helpText, ...restProps} = this.props
    return(
      <Field
        type={type}
        component={horizontal ? horizontalField : renderField}
        label={label}
        className={className}
        helpText={helpText}
        {...restProps}
      />
    )
  }
}
