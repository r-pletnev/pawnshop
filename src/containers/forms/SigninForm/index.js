import React, {Component} from 'react'
import Modal from '../../../components/Modal'
import Button from '../../../components/Button'
import './signin.css'
import {Field, reduxForm} from 'redux-form'

const renderField = ({input, label, type, meta: { touched, error }, id, className }) => (
  <div>
    <div>
      <input {...input} id={id} className={className} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

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
  render(){
    const {handleSubmit, pristine, reset, submitting, error} = this.props
    return(
      <form className="form-signin" onSubmit={handleSubmit}>
        <h2 className="form-signin-heading">Вход</h2>
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
        <button type='submit' className='btn btn-warning btn-lg' disabled={submitting}>Вход</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'login',
  validate
})(SigninForm)


