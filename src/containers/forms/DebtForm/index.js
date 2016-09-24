import React, {Component} from 'react'
import Button from '../../../components/Button'
import {reduxForm, Field} from 'redux-form'
import FormField from '../../../components/FormField'
import FontAwesome from 'react-fontawesome'
import {connect} from 'react-redux'
import {getPercent} from '../../../actions/DebtActions'

const validate = (values, props) => {
  const errors = {}
  if(!props.userIsAuthenticated){
    errors._error = 'Сначала зарегистрируйтесь!'
  }
  if (!values.surname) {
    errors.surname = 'Обязательно к заполнению'
  }
  if (!values.zalog) {
    errors.zalog = 'Обязательно к заполнению'
  }
  if (values.zalog <= 0) {
    errors.zalog = 'Номер билета должен быть больше 0'
  }
  return errors
}


class DebtForm extends Component {
  submitForm(values){
    return this.props.dispatch(getPercent(values))
  }

  render(){
    const {handleSubmit, pristine, reset, submitting, error} = this.props
    return(
      <form className='form-horizontal' onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <h2>Проверить задолженность</h2>
        {error && <p className='text-center'><span className='text-danger'><strong>{error}</strong></span></p>}
        <FormField name='surname' label='Фамилия' horizontal />
        <FormField name='zalog' label='Номер билета' horizontal type='number'/>
        <Field style={{display: 'none'}} component='input' type='radio' name='userIsAuthenticated' checked={this.props.userIsAuthenticated}/>
        <button type='submit' className='btn btn-warning btn-lg pull-right' disabled={pristine || submitting}>
          Проверить билет{' '}<FontAwesome name={'paper-plane-o'} />
        </button>
      </form>
    )
  }
}

DebtForm = reduxForm({
  form: 'debtForm',
  validate
})(DebtForm)

function mapStateToProps(state){
  return {
    userIsAuthenticated: state.user.isAuthenticated
  }
}

export default connect(mapStateToProps)(DebtForm)
