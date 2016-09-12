import React, {Component} from 'react'

const styleAlert = {
  position: 'fixed',
  width: '300px',
  left: '50%',
  top: '10%',
  marginLeft: '-150px',
  zIndex: '2000'
}

export default class Alert extends Component {
  render(){
    return(
     <div className="alert alert-danger alert-dismissible" role="alert" style={styleAlert}>
       <button type='button' className='close' data-dismiss='alert' aria-label='Закрыть'>
         <span aria-hidden='true'>&times;</span>
       </button>
       <strong>{this.props.message}</strong>
     </div>
    )
  }
}
