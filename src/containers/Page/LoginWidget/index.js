import React, {Component} from 'react'
import Modal from '../../../components/Modal'
import {hideLoginWindow} from '../../../actions/AppActions'
import {connect} from 'react-redux'
import SigninForm from '../../forms/SigninForm'
import RegistrationForm from '../../forms/RegistrationForm'
import {loginUser} from '../../../actions/UserActions'
import {
  MODAL_LOGIN,
  MODAL_REGISTRATION
} from '../../../constants/App'

class LoginWidget extends Component {
  constructor(props){
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.getTitle = this.getTitle.bind(this)
    this.getForm = this.getForm.bind(this)
  }

  closeModal(){
    this.props.dispatch(hideLoginWindow())
  }

  loginUser(values){
    return this.props.dispatch(loginUser(values))
  }

  getTitle(){
    switch (this.props.typeModal){
      case MODAL_LOGIN:
        return 'Вход'

      case MODAL_REGISTRATION:
        return 'Регистрация'
    }
  }

  getForm(){
    switch(this.props.typeModal){
      case MODAL_LOGIN:
        return <SigninForm formAction={this.loginUser} />

      case MODAL_REGISTRATION:
        return <RegistrationForm close={this.closeModal} />
    }
  }

  render(){
    return (
      <Modal
        title={this.getTitle()}
        handlerClose={this.closeModal}
        show={this.props.showLoginModal}
      >
        {this.getForm()}
      </Modal>
    )
  }
}

function mapStateToProps(state){
  return {
    showLoginModal: state.app.showLoginModal,
    typeModal: state.app.typeModal
  }
}

export default connect(mapStateToProps)(LoginWidget)
