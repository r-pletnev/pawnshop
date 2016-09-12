import React, {Component} from 'react'
import {connect} from 'react-redux'
import Alert from '../../../components/Alert'


class AlertWidget extends Component {
  constructor(props){
    super(props)
    this.state = {show: false}
    this.alertTimeout = this.alertTimeout.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.setState({show: nextProps.error}, () => {
      if(!nextProps.error) return
      this.alertTimeout()
    })
  }

  alertTimeout(){
    setTimeout(() => {
      this.setState({show: false})
    }, 10000)
  }

  render() {
    if (!this.state.show) return <div/> 

    return (
      <Alert
        message={this.props.errorMsg}
      />
    )
  }
}

function mapStateToProps(state){
  return {
    errorMsg: state.app.errorMsg,
    error: state.app.error
  }
}

export default connect(mapStateToProps)(AlertWidget)
