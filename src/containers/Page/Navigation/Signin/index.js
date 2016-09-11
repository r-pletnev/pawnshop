import React, {Component} from 'react'
import Modal from '../../../../components/Modal'
import Button from '../../../../components/Button'
import './signin.css'

export default class Signin extends Component {
  render(){
    return(
      <Modal
        id='signin'
        name='Вход'
        width='40%'
      >
        <form className="form-signin">
          <h2 className="form-signin-heading">Вход</h2>
          <label htmlFor="inputUsername" className="sr-only">Логин</label>
          <input type="text" id="inputUsername" className="form-control" placeholder="Ваш логин" required="" autofocus="" />
          <label htmlFor="inputPassword" className="sr-only">Пароль</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Ваш пароль" required="" />
          <Button text='Вход' />
        </form>
      </Modal>
    )
  }
}
