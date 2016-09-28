import React, {Component} from 'react'
import {reduxForm, Field, SubmissionError} from 'redux-form'
import FormField from '../../../components/FormField' 
import {connect} from 'react-redux'
import {checkNewEmail} from '../../../actions/UserActions'

const controledField = ({input, label, type, meta: {touched, error}, id, className, getValue}) => {
  return (
    <div className='form-group'>
      <label htmlFor={id}>{label}:</label>{' '}
      <input type={type} className='form-control' id={id} placeholder={label} value={getValue} disabled />
    </div>
  )
}

const validate = (values) => {
  const errors = {}
  if(!values.code){
    errors.code = 'Не может быть пустым'
  }
  return errors
}

class Second extends Component {
  static PropTypes = {
    handleClose: React.PropTypes.func.isRequired
  }

  submitForm(values){
    return this.props.dispatch(checkNewEmail(values))
        .then(() => {
          this.props.onSubmitSuccess()
        })
        .catch(error => {
          throw new SubmissionError({_error: `Введеные неверные данные: ${error}`})
        })
      
  }

  render(){
    const {handleSubmit, pristine, reset, submitting, error} = this.props
    return (
      <form className='form-inline' onSubmit={handleSubmit(this.submitForm.bind(this))}>
        {error && <span className='text-danger'><strong>{error}</strong></span>}
        <div className='form-group'>
          <Field component={controledField}getValue={this.props.newEmail}  label='Указанный ранее адрес' type='email' name='newEmail' id='newEmail' />
          <p className='help-block'>
            Указанный адрес электронной почты вы указали в предыдущем шаге. Если адрес указан неправильно, то начните процедуру
            измененеия email заново.
          </p>
        </div>
        <div className='form-group'>
          <FormField label='Код подтверждения' type='text' name='code' id='code'/>
          <p className='help-block'>на указанный адрес электронной почты мы уже отправили код подтверждения. для повторного отправления кода
            нажмите "получить код".если письмо не пришло проверьте папку "спам" или обратитесь в службу поддержки.
          </p>
        </div>
        <button className='btn btn-warning' type='submit' >Завершить</button>
        {' '}
        <button className='btn btn-default' onClick={this.props.handleClose} type='reset'>Отмена</button>
      </form>
    )
  }
}

Second = reduxForm({
  form: 'emailSecondForm',
  validate
})(Second)


export default connect()(Second)
