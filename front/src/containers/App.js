import React, { Component } from 'react'
import FromNumber from '../components/FromNumber'
import Result from '../components/Result'

class App extends Component {


  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className='col'>
            <h3>Random Number</h3>
            <p>Sistema Ramdom - Demo</p>
            <FromNumber />
            <Result />
          </div>
        </div>
      </div>
    )
  }
}

export default App


