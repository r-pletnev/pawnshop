import React, {Component} from 'react'
import {Link} from 'react-router'
import './navbar.css'
import {connect} from 'react-redux'
import Signin from '../Signin'
import {
  showLoginWindow,
  showRegistrationWindow
} from '../../../actions/AppActions'
import {logout as logoutAction} from '../../../actions/UserActions'

class Navigation extends Component {
  constructor(props){
    super(props)
    this.handleClickEnterButton = this.handleClickEnterButton.bind(this)
    this.getRigthNavigationBlock = this.getRigthNavigationBlock.bind(this)
    this.handleClickRegButton = this.handleClickRegButton.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleClickEnterButton(){
    this.props.dispatch(showLoginWindow())
  }

  handleClickRegButton(){
    this.props.dispatch(showRegistrationWindow())
  }

  logout(){
    this.props.dispatch(logoutAction())
  }

  getRigthNavigationBlock(){
    const navs = this.props.isAuthenticated
      ? (<ul className='nav navbar-nav navbar-right'>
          <li>
            <span className='navbar-text'>Вы вошли как {' '}<Link to='/profile' className='navbar-link'>{this.props.username}</Link>!</span>
          </li>
          <li>
            <Link to='' onClick={this.logout}>Выход</Link>
            </li>
        </ul>)
       :   (<ul className='nav navbar-nav navbar-right'>
         <li>
             <p className='navbar-text'>
               <Link to='' data-toggle='modal' className='navbar-link' onClick={this.handleClickEnterButton}>Войти</Link> 
               {' '}или{' '}
               <Link className='navbar-link' to='' onClick={this.handleClickRegButton}>Зарегистрироваться</Link>
             </p>
          </li>
            </ul>)
    return (
      <div>{navs}</div>
    )
  }

  render() {
     return (
      <div>
        <Signin />
         <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="container">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <Link className="navbar-brand" to="/">Экспресс-Ломбард</Link>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <li role='presentation' className='dropdown'>
                          <Link
                            to='/home'
                            className='dropdown-toggle'
                            data-toggle='dropdown'
                            role='button'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            Главная <span className='caret'/>
                          </Link>
                            <ul className='dropdown-menu'>
                              <li>
                                <Link to='/home#evaluation'>Оценка</Link>
                              </li>
                              <li>
                                <Link to="/home#filials">Филиалы</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to='/debt'>Узнать задолженность</Link>
                          </li>
                      </ul>
                      {this.getRigthNavigationBlock()}
                  </div>
              </div>
          </nav>
        </div>
      )
    }
}

function mapStateToProps(state){
  return {
    isAuthenticated: state.user.isAuthenticated,
    username: state.user.username
  }
}

export default connect(mapStateToProps)(Navigation)
