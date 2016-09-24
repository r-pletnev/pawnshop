import React, {Component} from 'react'
import Button from '../../components/Button'
import Modal from '../../components/Modal/'
import {reduxForm, Field} from 'redux-form'
import FormField from '../../components/FormField'


class ChangePasswordForm extends Component {
  static propTypes = {
    show: React.PropTypes.bool,
    close: React.PropTypes.func
  }

  render(){
    return(
      <Modal
        id='ChangePasswordForm'
        title='Установка нового пароля'
        show={this.props.show}
        handlerClose={this.props.close}
      >
        <p className='help-block'>
          Для изменения пароля необходим доступ к текущей
                  электронной почте учетной записи, на которую будет
                  отправлено сообщение с кодом подтверждения.
        </p>
        <form className='form-inline'>
          <div className='form-group'>
            <FormField placeholder='Код подтверждения' component='input' type='text' name='code'  id='code'/>
          </div>
          {' '}
            <button type='button' className='btn btn-warning'>Получить код</button>
          </form>
          <p className='help-block'>Для получения кода подтверждения на текущий адрес электронной 
            почты учетной записи нажмите "Получить код". Если письмо не 
            пришло - проверьте папку "Спам" или обратитесь в службу 
            поддержки сервиса.
          </p>
            <div className='form-group'>
              <FormField placeholder='Новый адрес электронной почты' component='input' type='email' name='email' id='email' />
              <span className='help-block'>В следующем этапе необходимо ввести код подтверждения,
                который будет отправлен на указанный адрес электронной почты...
              </span>
            </div>
            <button className='btn btn-warning' type='submit'>Установить новый почтовый адрес</button>
            {' '}
            <button className='btn btn-default' onClick={this.props.close} type='reset'>Отмена</button>
      </Modal>
    )
  }
}

export default ChangePasswordForm = reduxForm({
  form: 'passwordForm'
})(ChangePasswordForm)
