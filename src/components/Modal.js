import _ from 'lodash'
import React, {Component} from 'react'
import { Map, Marker, MarkerLayout } from 'yandex-map-react'

export default class Modal extends Component{
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    lat: React.PropTypes.string.isRequired,
    lon: React.PropTypes.string.isRequired,
    workTime: React.PropTypes.object
  }

  isWorking(){
    const currentHour = new Date().getHours()
    return _.inRange(currentHour, this.props.workTime.begin, this.props.workTime.end)
  }


  render(){
    return (
      <div className="modal fade" id={`modal_${this.props.id}`} tabindex="-1" role="dialog" aria-labelledby={this.props.name}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">{this.props.name}</h4>
            </div>
            <div className="modal-body">
              <div className='row'>
                <div className='col-sm-10 col-sm-offset-1'>
                  <div className='thumbnail'>
                    <img src={this.props.image} />
                    <p><strong>Телефон:</strong>{' '}<a href={`tel:8${this.props.phone}`}>{this.props.phone}</a></p>
                    <p><strong>Адрес:</strong>{' '}<address>{this.props.address}</address></p>
                    <p>
                      <strong>Время работы:</strong>{' '}<em>{`${this.props.daysInterval} - (${this.props.workInterval})`}</em>
                      {'  '}
                      {this.isWorking() ? <span style={{color: 'green'}}>Сейчас работает!</span> : <span style={{color: 'tomato'}}>Сейчас не работает!</span>}
                    </p>
                  </div>
                  <h3>Расположение</h3>
                  <Map 
                    width={ 450 }
                    height={ 400 }
                    center={[this.props.lat, this.props.lon]}
                    zoom={17}
                  >
                    <Marker lat={this.props.lat} lon={this.props.lon} />
                  </Map>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
