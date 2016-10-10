import React, {Component} from 'react'
import Modal from '../../components/Modal/'
import {reduxForm, Field, formValueSelector, SubmissionError, reset} from 'redux-form'
import FormField from '../../components/FormField' 
import {addonField} from '../../utilis/containers'
import {sendCode, updatePassword} from '../../actions/UserActions'
import {connect} from 'react-redux'


const validate = (values) => {
  const errors = {}
  if (!values.code) {
    errors.code = 'Обязательно к заполнению'
  }

  if (!values.password1) {
    errors.password1 = 'Обязательно к заполненнию'
  }

  if (!values.password2) {
    errors.password2 = 'Обязательно к заполнению'
  }
  
  if (values.password1 && values.password1.length < 8){
    errors.password1 = 'Пароль не может быть меньше 8 символов'
  }

  if (values.password1 && values.password1 !== values.password2) {
    errors.password2 = 'Пароли не совпадают'
  }

  return errors
}


class ChangePasswordForm extends Component {
  static propTypes = {
    show: React.PropTypes.bool,
    close: React.PropTypes.func
  }

  submitForm(values){
    const {password1, code} = values
    return this.props.dispatch(updatePassword({password: password1, code}))
          .then(() => {
            this.closeForm.bind(this)()
          })
          .catch(error => {
            debugger
            throw new SubmissionError({_error: `Введены неверные данные: ${error}`})
          })
  }

  sendCode(){
    this.props.dispatch(sendCode())
  }

  closeForm(){
    this.props.close()
  }

  render(){
    const {handleSubmit, pristine, reset, submitting, error} = this.props
    return(
      <Modal
        id='ChangePasswordForm'
        title='Изменение пароля'
        show={this.props.show}
        handlerClose={this.closeForm.bind(this)}
      >
        <form className='form-inline' onSubmit={handleSubmit(this.submitForm.bind(this))}>
          {error && <span className='text-danger'><strong>{error}</strong></span>}
          <p className='help-block'>
            Для изменения пароля необходим доступ к текущей электронной почте
            учетной записи, на которую будет отправлено сообщение с 
            кодом подтверждения.
          </p>
          <div className='form-group'>
            <Field label='Код подтверждения' func={this.sendCode.bind(this)} component={addonField} type='text' name='code' id='code'/>
            {' '}
            <p className='help-block'>Для получения кода подтверждения на текущий адрес электронной 
              почты учетной записи нажмите "Получить код". Если письмо не
              пришло - проверьте папку "Спам" или обратитесь в службу
              поддержки сайта.
            </p>
          </div>
          <div className='form-group'>
            <FormField showLabel={false} label='Новый пароль' type='password' name='password1' id='password1' />
            <p className='help-block'>Чтобы лучше защитить аккаунт, мы советуем придумать
              особый пароль, котоkkkрый больше нигде не используете.
            </p>
          </div>
          <div className='form-group'>
            <FormField showLabel={false} label='Повторите пароль' type='password' name='password2' id='password2' />
            <p className='help-block'>Для исключения опечатки введите пароль ещё раз</p>
          </div>
          <div>
            <button disabled={pristine || submitting} className='btn btn-warning' type='submit' >Установить пароль</button>
            {' '}
            <button className='btn btn-default' onClick={this.closeForm.bind(this)} type='reset'>Отмена</button>
          </div>
        </form>
      </Modal>
    )
  }
}

ChangePasswordForm = reduxForm({
  form: 'passwordForm',
  validate
})(ChangePasswordForm)

export default connect()(ChangePasswordForm)
