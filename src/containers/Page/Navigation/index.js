import React, {Component} from 'react'
import {Link} from 'react-router'
import './navbar.css'
import {connect} from 'react-redux'
import Signin from '../Signin'
import {showLoginWindow} from '../../../actions/AppActions'

class Navigation extends Component {
  constructor(props){
    super(props)
    this.handleClickEnterButton = this.handleClickEnterButton.bind(this)
    this.getRigthNavigationBlock = this.getRigthNavigationBlock.bind(this)
  }

  handleClickEnterButton(){
    this.props.dispatch(showLoginWindow())
  }

  getRigthNavigationBlock(){
    const navs = this.props.isAuthenticated
      ? (<ul className='nav navbar-nav navbar-right'>
          <li>
            <span className='navbar-text'>Вы вошли как {' '}<Link to='/profile' className='navbar-link'>{this.props.username}</Link>!</span>
          </li>
        </ul>)
       :   (<ul className='nav navbar-nav navbar-right'>
            <li><Link to='' data-toggle='modal' onClick={this.handleClickEnterButton}>Войти</Link></li>
            <li><Link to=''>Регистрация</Link></li>
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
                            to='#'
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
                                <Link to="/#evaluation">Оценка</Link>
                              </li>
                              <li>
                                <Link to="/#filials">Филиалы</Link>
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
