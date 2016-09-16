import React, {Component} from 'react'
import Button from '../../../components/Button'
import {reduxForm} from 'redux-form'
import FormField from '../../../components/FormField'
import {connect} from 'react-redux'

const validate = values => {
  const errors = {}
  if (!values.surname) {
    errors.surname = 'Обязательно к заполнению'
  }
  if (!values.zb) {
    errors.zb = 'Обязательно к заполнению'
  }
  if (values.zb <= 0) {
    errors.zb = 'Номер билета должен быть больше 0'
  }
  return errors
}

class DebtForm extends Component {
  render(){
    const {handleSubmit, pristine, reset, submitting, error} = this.props
    return(
      <form className='form-horizontal'>
        <FormField name='surname' label='Фамилия' horizontal />
        <FormField name='zb' label='Номер билета' horizontal  type='number'/>
        <Button disabled={pristine || submitting} text='Проверить билет' className='pull-right'/>
      </form>
    )
  }
}

DebtForm = reduxForm({
  form: 'debtForm',
  validate
})(DebtForm)

export default connect()(DebtForm)
