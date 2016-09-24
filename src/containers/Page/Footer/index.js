import React, {Component} from 'react'
import './footer.css'

export default class Footer extends Component{
  render(){
    return (
      <div className='bs-docs-footer'>
          <div className="container">
              <p>Copyright &copy; Express Lombard {new Date().getFullYear()}</p>
          </div>
      </div>
    )
  }
}
