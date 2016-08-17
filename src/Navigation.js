import React, {Component} from 'react'
import './styles/navbar.css'

export default class Navigation extends Component {
  render() {
     return (
       <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Экспресс-Ломбард</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#evaluation">Оценка</a>
                        </li>
                        <li>
                            <a href="#filials">Филиалы</a>
                        </li>
                        <li>
                            <a href="#procent">Оплатить проценты</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      )
    }
}
