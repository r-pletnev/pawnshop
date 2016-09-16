import React, {Component} from 'react'
import Button from '../../../components/Button'
import './signin.css'
import {Field, reduxForm} from 'redux-form'
import FormField from '../../../components/FormField'
import {loginUser} from '../../../actions/UserActions'
import {connect} from 'react-redux'
import {renderField} from '../../../utilis'


const validate = values => {
  const errors = {}
  if(!values.username){
    errors.username = 'Обязательно к заполнению'
  }

  if(!values.password){
    errors.password = 'Обязательно к заполнению'
  }
  return errors
}

class SigninForm extends Component {

  submitForm(values){
    return this.props.dispatch(loginUser(values))
  }

  render(){
    const {handleSubmit, pristine, reset, submitting, error} = this.props
    return(
      <form className="form-signin" onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <h2 className="form-signin-heading">Вход</h2>
        {error && <span className='text-danger'><strong>{error}</strong></span>}
        <FormField showLabel={false} name='username' label='Ваш логин' id='inputUsername' />
        <FormField showLabel={false} name='password' label='Ваш пароль' id='inputPassword' />

        <button type='submit' className='btn btn-warning btn-lg' disabled={pristine || submitting}>Вход</button>
      </form>
    )
  }
}

SigninForm = reduxForm({
  form: 'login',
  validate
})(SigninForm)

export default connect()(SigninForm)
