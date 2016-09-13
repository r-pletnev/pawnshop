import React, {Component} from 'react'
import Modal from '../../components/Modal'
import SigninForm from '../forms/SigninForm'
import {loginUser} from '../../actions/UserActions'
import {connect} from 'react-redux'
import {userLoginForm} from '../../api/User'
import {hideLoginWindow} from '../../actions/AppActions'


class Signin extends Component {
  constructor(props){
    super(props)
    this.submitLogin = this.submitLogin.bind(this)
    this.closeLoginWindow = this.closeLoginWindow.bind(this)
  }

  submitLogin(values){
    return this.props.dispatch(loginUser(values))
  }

  closeLoginWindow(){
    this.props.dispatch(hideLoginWindow())
  }

  render(){
    if (this.props.showLoginModal){
     $('#modal_signin').modal() 
    }


    return(
      <Modal
        id='signin'
        name='Вход'
        width='40%'
      >
        <SigninForm onSubmit={this.submitLogin} />
      </Modal>
    )
  }

}

function mapStateToProps(state){
  return {
    showLoginModal: state.app.showLoginModal
  }
}

export default connect(mapStateToProps)(Signin)
