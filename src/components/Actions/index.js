import React from 'react'
import { FaSistrix } from 'react-icons/fa'
import { IoIosReturnRight } from 'react-icons/io'
import { TiFlowMerge } from 'react-icons/ti'

class Actions extends React.Component {

  render() {
    return (
      <div className="row actions">
        <a className="btn btn-outline-secondary" href="/search"><FaSistrix /></a>
        <a className="btn btn-outline-secondary" href="/return"><IoIosReturnRight /></a>
        <a className="btn btn-outline-secondary" href="/tree"><TiFlowMerge /></a>
      </div>
    )
  }
}

export default Actions