import React from 'react'
import { FaSistrix } from 'react-icons/fa'
import { IoIosReturnRight } from 'react-icons/io'
import { TiFlowMerge } from 'react-icons/ti'

class Actions extends React.Component {

  render() {
    const { id, assigned, delegated, task, route, name } = this.props
    let url = `/search?asd=false&id=${ id }&t=${ task }&r=${ route }&n=${ name }`
    if (assigned)
      url = `/search?asd=true&id=${ id }&t=${ task }&r=${ route }&n=${ name }`
    return (
      <div className="row actions">
        { assigned && <a className="btn btn-outline-secondary" href={ url }><FaSistrix /></a> }
        { delegated && <a className="btn btn-outline-secondary" href={ url }><FaSistrix /></a> }
        <a className="btn btn-outline-secondary" href="/delegate"><IoIosReturnRight /></a>
        <a className="btn btn-outline-secondary" href="/tree"><TiFlowMerge /></a>
      </div>
    )
  }
}

export default Actions