import React, {Component} from 'react'
import Modal from 'react-modal'
import './modal.css'

export default class SimpleModal extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    handlerClose: React.PropTypes.func.isRequied,
    show: React.PropTypes.bool.isRequired
  }

  render(){
    return (
      <Modal
        isOpen={this.props.show}
        onRequestClose={this.props.handlerClose}
        className="Modal__Bootstrap modal-dialog"
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <span className='modal-title'>{this.props.title}</span>
            <button onClick={this.props.handlerClose} className='close' aria-label='Закрыть'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            {this.props.children}
          </div>
        </div>
      </Modal>
    )
  }
}

