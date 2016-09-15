import React, {Component} from 'react'
import Modal from '../../../components/Modal'
import {hideLoginWindow} from '../../../actions/AppActions'
import {connect} from 'react-redux'
import SigninForm from '../../forms/SigninForm'

class LoginWidget extends Component {
  constructor(props){
    super(props)
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(){
    this.props.dispatch(hideLoginWindow())
  }

  render(){
    return (
      <Modal
        title="Вход"
        handlerClose={this.closeModal}
        show={this.props.showLoginModal}
      >
        <SigninForm />
      </Modal>
    )
  }
}

function mapStateToProps(state){
  return {
    showLoginModal: state.app.showLoginModal
  }
}

export default connect(mapStateToProps)(LoginWidget)
