import React, {Component} from 'react'
import {reduxForm, Field, SubmissionError} from 'redux-form'
import FormField from '../../../components/FormField' 
import {addonField} from '../../../utilis/containers'
import {connect} from 'react-redux'
import {sendCode, checkOldEmail} from '../../../actions/UserActions'

const validate = (values) => {
  const errors = {}
  if (!values.newEmail){
    errors.newEmail = 'Обязательно к заполненнию'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.newEmail)){
    errors.newEmail = 'Не правильный емайл адрес'
  }

  if(!values.code){
      errors.code = 'Обязательно к заполнению'
  }
  return errors
}

class First extends Component {
  static PropTypes = {
    handleClose: React.PropTypes.func.isRequired,
    onSubmitSuccess: React.PropTypes.func.isRequired
  }
  
  submitForm(values){
    return this.props.dispatch(checkOldEmail(values))
        .then(() => {
          this.props.onSubmitSuccess()
        })
        .catch(error => {
          throw new SubmissionError({_error: `Введеные неверные данные: ${error}`})
        })
  }
  
  sendCode(){
    this.props.dispatch(sendCode())
  }

  render(){
    const {handleSubmit, pristine, reset, submitting, error} = this.props
    return (
      <form className='form-inline' onSubmit={handleSubmit(this.submitForm.bind(this))}>
        {error && <span className='text-danger'><strong>{error}</strong></span>}
        <p className='help-block'>
          Для установки нового адреса электронной почты учетной записи необходим доступ к текущей и новой 
          электронной почте.
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
          <FormField showLabel={false} label='Новый email' type='email' name='newEmail' id='newEmail' />
          <span className='help-block'>В следующем этапе необходимо ввести код подтверждения,
            который будет отправлен на указанный адрес электронной почты...
          </span>
        </div>
        <button disabled={pristine || submitting} className='btn btn-warning' type='submit' >Далее</button>
        {' '}
        <button className='btn btn-default' onClick={this.props.handleClose} type='reset'>Отмена</button>
      </form>
    )
  }
}

First = reduxForm({
  form: 'emailFirstForm',
  validate
})(First)

export default connect()(First)
