import React from 'react';
import { MDBDataTable } from 'mdbreact';

class Table extends React.Component {

  render() {

    const { data } = this.props

    return (
      <MDBDataTable
        striped
        bordered
        hover
        data={ data }
      />
    )
  }
  
}

export default Table