import React, {Component} from 'react'
import GradientHeader from '../GradientHeader'
import Button from '../../components/Button'
import {connect} from 'react-redux'
import ChangeEmailForm from './ChangeEmailForm'
import ChangePasswordForm from './ChangePasswordForm'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {showChangeEmail: false, showChangePassword: false}
    this.closeChangeEmail = this.closeChangeEmail.bind(this)
    this.openChangeEmail = this.openChangeEmail.bind(this)
    this.closeChangePassword = this.closeChangePassword.bind(this)
    this.openChangePassword = this.openChangePassword.bind(this)
  }
  
  closeChangeEmail(){
    this.setState({showChangeEmail: false})
  }
  
  openChangeEmail(){ 
    this.setState({showChangeEmail: true})
  }

  closeChangePassword(){
    this.setState({showChangePassword: false})
  }

  openChangePassword(){ 
    this.setState({showChangePassword: true})
  }

  render(){
    return (
      <div>
        <ChangeEmailForm show={this.state.showChangeEmail} close={this.closeChangeEmail} />
        <ChangePasswordForm show={this.state.showChangePassword} close={this.closeChangePassword} />
        <GradientHeader>
          <h1>Персональные данные</h1>
        </GradientHeader>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <table className='table table-borderless'>
                <tbody>
                  <tr>
                    <td>
                      <b>Имя учетной записи</b>
                    </td>
                    <td>
                      {this.props.username}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Электронная почта</b>
                    </td>
                    <td>
                      {this.props.email}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='jumbotron yellow-jumbotron'>
                <h4>Пароль</h4>
                <p className='text-muted'>
                  Вы можете изменить пароль к вашему аккаунту. Чтобы лучше защитить аккаунт, мы советуем придумать особый пароль, который вы нигде больше не используете.
                </p>
                <Button text='Изменить пароль' onClick={this.openChangePassword}/>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='jumbotron yellow-jumbotron'>
                <h4>Email</h4>
                <p className='text-muted'>
                  Вы можете указать новый адрес электронной почты вашей учетной записи только в том случае, если у Вас есть доступ к текущей и новой электронной почте.
                </p>
                <Button text='Изменить email' onClick={this.openChangeEmail} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    username: state.user.username,
    email: state.user.email
  }
}

export default connect(mapStateToProps)(Profile)
