import React from 'react'
import { MDBDataTable } from 'mdbreact'

class Table extends React.Component {

  render() {

    const { data } = this.props

    return (
      <div className="table">
        <MDBDataTable
          striped
          bordered
          hover
          data={ data }
        />
      </div>
    )
  }
  
}

export default Table