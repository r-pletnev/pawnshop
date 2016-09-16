import React, {Component} from 'react'
import Button from '../../components/Button'
import Modal from '../../components/Modal/'
import { Map, Marker, MarkerLayout } from 'yandex-map-react'

const markerStyles = {
    width: '20px',
    height: '20px',
    border: '1px solid orange',
    background: 'orange',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const innerStyle = {
  width: '10px',
  height: '10px',
  background: 'white',
  borderRadius: '50%'
}

const mapState = {
  controls: ['smallMapDefaultSet']
}

export default class Card extends Component{
  constructor(props){
    super(props)
    this.state = {show: false}
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.workingElement = this.workingElement.bind(this)
  }

  static propTypes = {
    thumnail: React.PropTypes.string,
    name: React.PropTypes.string,
    address: React.PropTypes.string,
    phone: React.PropTypes.string,
    daysInterval: React.PropTypes.string,
    workInterval: React.PropTypes.string
  }

  openModal(){
    this.setState({show: true})
  }

  closeModal() {
    this.setState({show: false})
  }

  isWorking(){
    const currentHour = new Date().getHours()
    return _.inRange(currentHour, this.props.workTime.begin, this.props.workTime.end)
  }

  workingElement(){
    if (this.isWorking()){
      return <span style={{color: 'green'}}>Сейчас работает!</span>
    } else {
      return <span style={{color: 'tomato'}}>Сейчас не работает!</span>
    }
  }

  render(){
    return (
      <div className='col-sm-3' style={{width: '25%', minWidth: '220px'}}>
        <Modal 
          id={this.props.id}
          title={this.props.name}
          show={this.state.show}
          handlerClose={this.closeModal}
          featureText={this.workingElement()}
        >
          <div style={{display:'flex'}}>
            <div className='thumbnail' style={{width:'50%'}}>
              <img src={this.props.image} />
              <p><strong>Телефон:</strong>{' '}<a href={`tel:8${this.props.phone}`}>{this.props.phone}</a></p>
              <div><strong>Адрес:</strong>{' '}<address>{this.props.address}</address></div>
              <p>
                <strong>Время работы:</strong>{' '}<em>{`${this.props.daysInterval} - (${this.props.workInterval})`}</em>
                {'  '}
              </p>
            </div>
            <div className='thumbnail' style={{width:'50%'}}>
              <Map 
                width={'100%'}
                height={300}
                center={[this.props.lat, this.props.lon]}
                zoom={15}
                state={mapState}
              >
                <Marker lat={+this.props.lat} lon={+this.props.lon}>
                  <MarkerLayout>
                    <div style={markerStyles}>
                      <div style={innerStyle} />
                    </div>
                  </MarkerLayout>
                </Marker>
              </Map>
              <div className='caption'>
                <h3>Расположение</h3>
              </div>
            </div>
          </div>
        </Modal>
        <div className='thumbnail'>
          <img src={this.props.image} />
          <div className='caption'>
            <h3>{this.props.name}</h3>
            <div><strong>Адрес</strong>:{' '}<address>{this.props.address}</address></div>
            <p><strong>Телефон</strong>:{' '}{this.props.phone}</p>
            <p><Button text='Подробнее' data-toggle='modal' onClick={this.openModal} /></p>
          </div>
        </div>
      </div>
    )
  }
}
