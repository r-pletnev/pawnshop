import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import FormField from '../../../components/FormField'


class RegistrationForm extends Component {

  static propTypes = {
    close: React.PropTypes.func.isRequired
  }

  constructor(props){
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }


  submitForm(){

  }

  closeForm(){
    this.props.close()
  }

  render(){
    const {handleSubmit, pristine, submitting, error} = this.props
    return (
      <form onSubmit={handleSubmit(this.submitForm)}>
        {error && <span className='text-danger'><strong>{error}</strong></span>}
        <h2>Регистрация</h2>
        <FormField 
          showLabel={false}
          label='Ваш логин' 
          type='text' 
          name='login' 
          id='login'
          helpText={`Придумайте уникальный логин аккаунта. Он будет использоваться при
                    работе с некоторыми функциями сайта. Внимание! После завершения регистрации
                    логин поменять нельзя!`}
        />
        <FormField
          showLabel={false}
          label='Ваш email'
          type='email'
          name='email'
          id='email'
          helpText={`На указанный адрес электронной почты будет отправлено сообщение
                    с подтверждением регистрации.`}
        />
        <FormField
          showLabel={false}
          label='Пароль'
          type='password'
          name='password1'
          id='password1'
          helpText={`Придумайте пароль для доступа к аккаунту. Помните, что чем сложнее 
                    пароль - тем он надежнее (минимум 8 символов, минимум 1 латинская буква большого шрифта).`}
        />
        <FormField
          showLabel={false}
          label='Повторите пароль'
          type='password'
          name='password2'
          id='password2'
          helpText={`Для исключения опечатки введите пароль еще раз.`}
        />
        <div>
          <button disabled={pristine || submitting} className='btn btn-warning' type='submit' >Регистрация</button>
          {' '}
          <button className='btn btn-default' onClick={this.closeForm} type='reset'>Отмена</button>
        </div>
      </form>
    )
  }
}

RegistrationForm = reduxForm({
  form: 'registrationForm'
})(RegistrationForm)

export default RegistrationForm
