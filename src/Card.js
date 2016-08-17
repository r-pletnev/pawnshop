import React, {Component} from 'react'
import Button from './components/Button'
import Modal from './components/Modal'

export default class Card extends Component{
  static propTypes = {
    thumnail: React.PropTypes.string,
    name: React.PropTypes.atring,
    address: React.PropTypes.string,
    phone: React.PropTypes.string
  }

  render(){
    return (
      <div className='col-sm-3' style={{width: '360px'}}>
        <Modal 
          id={this.props.id}
          name={this.props.name}
          lat={this.props.lat}
          lon={this.props.lon}
          image={this.props.image}
          address={this.props.address}
          workInterval={this.props.workInterval}
          daysInterval={this.props.daysInterval}
          phone={this.props.phone}
          workTime={this.props.workTime}
        />
        <div className='thumbnail'>
          <img src={this.props.image} />
          <div className='caption'>
            <h3>{this.props.name}</h3>
            <p><strong>Адрес</strong>:{' '}<address>{this.props.address}</address></p>
            <p><strong>Телефон</strong>:{' '}{this.props.phone}</p>
            <p><Button text='Подробнее' data-toggle='modal' data-target={`#modal_${this.props.id}`}/></p>
          </div>
        </div>
      </div>
    )
  }
}
