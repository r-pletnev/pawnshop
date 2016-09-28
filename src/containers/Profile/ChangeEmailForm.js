import React, {Component} from 'react'
import Button from '../../components/Button'
import Modal from '../../components/Modal/'
import {reduxForm, Field, formValueSelector, reset} from 'redux-form'
import FormField from '../../components/FormField'
import {connect} from 'react-redux'
import FirstEmailForm from '../forms/ChangeEmailForm/First'
import SecondEmailForm from '../forms/ChangeEmailForm/Second'
import {setNewEmail, checkOldEmail, checkNewEmail} from '../../actions/UserActions'


const controledFiled = ({input, label, type, meta: {touched, error}, id, className, getValue}) => {
  return (
    <div className='form-group'>
      <label htmlFor={id}>{label}</label>
      <input type={type} className='form-control' id={id} placeholder={label} value={getValue()} disabled />
    </div>
  )
}

class ChangeEmailForm extends Component {
  constructor(props){
    super(props)
    this.state = {page : 0, newEmail: ''}
    this.submitForm = this.submitForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.sendCode = this.sendCode.bind(this)
    this.changePage = this.changePage.bind(this)
  }

  static propTypes = {
    show: React.PropTypes.bool,
    close: React.PropTypes.func
  }

  submitForm(values){
    return this.props.dispatch(setNewEmail(values))
  }

  closeForm(){
    this.setState({page: 0})
    this.props.dispatch(reset('emailFirstForm'))
    this.props.close()
  }

  sendCode(props, newEmail){
    if(newEmail){
      this.props.dispatch(checkNewEmail(newEmail))
    } else {
      this.props.dispatch(checkOldEmail())
    }
  }

  changePage(){
    this.setState({page: 1, newEmail: this.props.newEmail})
  }

  getSecondPage(){
    return (
      <div>
        <div className='form-group'>
          <Field getValue={() => (this.props.newEmail)} component={controledFiled} label='Указанный ранее адрес' type='email' name='newEmail' id='newEmail' />
          <p className='help-block'>
            Указанный адрес электронной почты вы указали в предыдущем шаге. Если адрес указан неправильно, то начните процедуру
            измененеия email заново.
          </p>
        </div>
        <div className='form-group'>
          <Field label='Код подтверждения' func={this.sendCode.bind(this)(this.props.newEmail)} component='input' type='text' name='newCode' id='newCode'/>
          <p classname='help-block'>на указанный адрес электронной почты мы уже отправили код подтверждения. для повторного отправления кода
            нажмите "получить код".если письмо не пришло проверьте папку "спам" или обратитесь в службу поддержки.
          </p>
        </div>
        <button className='btn btn-warning' type='submit' >Завершить</button>
      </div>
    )
  }

  render(){
    return(
      <Modal
        id='ChangeEmailForm'
        title='Изменение электронной почты'
        show={this.props.show}
        handlerClose={this.closeForm}
      >
        {this.state.page === 0
          ? <FirstEmailForm
              handleClose={this.closeForm}
              onSubmitSuccess={this.changePage}
            />
          : <SecondEmailForm
              handleClose={this.closeForm}
              newEmail={this.state.newEmail}
              onSubmitSuccess={this.closeForm}
            />
        }

      </Modal>
    )
  }
}


const selector = formValueSelector('emailFirstForm')

function mapStateToProps(state){
  return {
    newEmail: selector(state, 'newEmail')
  }
}


export default connect(mapStateToProps)(ChangeEmailForm)

