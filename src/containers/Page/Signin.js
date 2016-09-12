import React, {Component} from 'react'
import Modal from '../../components/Modal'
import SigninForm from '../forms/SigninForm'
import {loginUser} from '../../actions/UserActions'
import {connect} from 'react-redux'

class Signin extends Component {
  constructor(props){
    super(props)
    this.submitLogin = this.submitLogin.bind(this)
  }

  submitLogin(values){
    this.props.dispatch(loginUser(values))
  }

  render(){
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

export default connect()(Signin)
