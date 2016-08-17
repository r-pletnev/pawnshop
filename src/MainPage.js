import React, {Component} from 'react'
import Navigation from './Navigation'
import ImageHeader from './ImageHeader'
import Container from './Container'


export default class MainPage extends Component {
  render() {
    return(
      <div>
        <Navigation />
        <ImageHeader />
        <Container />
      </div>
    )
  }
}
