import React, {Component} from 'react'
import Button from '../../../components/Button'
import './signin.css'
import {Field, reduxForm} from 'redux-form'
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
        <label htmlFor="inputUsername" className="sr-only">Логин</label>
        <Field 
          name='username'
          component={renderField}
          type='text'
          label="Ваш логин"
          id='inputUsername'
          className='form-control'
        />
        <label htmlFor="inputPassword" className="sr-only">Пароль</label>
        <Field
          name='password'
          component={renderField}
          type='password'
          id='inputPassword'
          className='form-control'
          label='Ваш пароль'
        />
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
