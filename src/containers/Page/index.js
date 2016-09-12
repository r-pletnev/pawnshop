import React, {Component} from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import AlertWidget from './AlertWidget'


export default class Page extends Component {
  render() {
    return(
      <div>
        <AlertWidget />
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
