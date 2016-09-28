import React, {Component} from 'react'
import Modal from '../../components/Modal/'
import {formValueSelector, reset} from 'redux-form'
import {connect} from 'react-redux'
import FirstEmailForm from '../forms/ChangeEmailForm/First'
import SecondEmailForm from '../forms/ChangeEmailForm/Second'
import {setNewEmail} from '../../actions/UserActions'


class ChangeEmailForm extends Component {
  constructor(props){
    super(props)
    this.state = {page : 0, newEmail: ''}
    this.submitForm = this.submitForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.changePage = this.changePage.bind(this)
  }

  static propTypes = {
    show: React.PropTypes.bool,
    close: React.PropTypes.func
  }

  submitForm(values){
    return this.props.dispatch(setNewEmail(values))
  }

  closeForm(){
    this.setState({page: 0})
    this.props.dispatch(reset('emailFirstForm'))
    this.props.close()
  }

  changePage(){
    this.setState({page: 1, newEmail: this.props.newEmail})
  }


  render(){
    return(
      <Modal
        id='ChangeEmailForm'
        title='Изменение электронной почты'
        show={this.props.show}
        handlerClose={this.closeForm}
      >
        {this.state.page === 0
          ? <FirstEmailForm
              handleClose={this.closeForm}
              onSubmitSuccess={this.changePage}
            />
          : <SecondEmailForm
              handleClose={this.closeForm}
              newEmail={this.state.newEmail}
              onSubmitSuccess={this.closeForm}
            />
        }

      </Modal>
    )
  }
}


const selector = formValueSelector('emailFirstForm')

function mapStateToProps(state){
  return {
    newEmail: selector(state, 'newEmail')
  }
}


export default connect(mapStateToProps)(ChangeEmailForm)

