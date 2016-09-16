import React, {Component} from 'react'
import GradientHeader from '../GradientHeader'
import Button from '../../components/Button'
import {connect} from 'react-redux'

class Profile extends Component {

  render(){
    return (
      <div>
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
                <Button text='Изменить пароль'/>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='jumbotron yellow-jumbotron'>
                <h4>Email</h4>
                <p className='text-muted'>
                  Вы можете указать новый адрес электронной почты вашей учетной записи только в том случае, если у Вас есть доступ к текущей и новой электронной почте.
                </p>
                <Button text='Изменить email' />
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
