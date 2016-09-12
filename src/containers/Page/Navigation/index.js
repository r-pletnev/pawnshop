import React, {Component} from 'react'
import {Link} from 'react-router'
import './navbar.css'
import Signin from '../Signin'

export default class Navigation extends Component {
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
                      <ul className='nav navbar-nav navbar-right'>
                        <li><Link to='' data-toggle='modal' data-target={'#modal_signin'}>Войти</Link></li>
                        <li><Link to=''>Регистрация</Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
        </div>
      )
    }
}
