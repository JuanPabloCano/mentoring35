import React from 'react'
import { connect } from 'react-redux';
const Result = (props) => {

  return <div className="container" >
    <div className='mb-3'>
      {props.result && 'Resultado: ' + props.result}
    </div>
  </div>
}

const stateMapToPors = state => {
  return {
    result: state.random.result?.randomList
  }
}


export default connect(stateMapToPors)(Result)
