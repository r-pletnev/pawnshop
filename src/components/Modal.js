import _ from 'lodash'
import React, {Component} from 'react'

export default class Modal extends Component{
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
  }

  render(){
    return (
      <div className="modal fade" id={`modal_${this.props.id}`} tabIndex="-1" role="dialog" aria-labelledby={this.props.name}>
        <div className="modal-dialog" role="document" style={{width: '65%'}}>
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">{this.props.name}</h4>
            </div>
            <div className="modal-body">
              <div className='row'>
                <div className='col-sm-10 col-sm-offset-1'>
                  {this.props.children}
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
