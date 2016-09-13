import React, {Component} from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export default class Page extends Component {
  render() {
    return(
      <div>
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
