import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import items from '../../data/menu'
import Actions from '../Actions'

import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle } from 'mdbreact'
import { FaUserAlt } from 'react-icons/fa'

import '../Global/css/Main.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import Table from '../Table'

class About extends Component {
  constructor(props) {
    super(props)
    const user = JSON.parse(localStorage.getItem('user')) || ''
    const token = localStorage.getItem('token')
    let loggedIn = true

    if(!token) {
      loggedIn = false
    }

    this.state = {
      loggedIn,
      user,
      assigned: true,
      delegated: false
    }

    // Bind
    this.setAssigned = this.setAssigned.bind(this)
    this.setDelegated = this.setDelegated.bind(this)
  }

  click() {
    document.getElementById('wrapper').classList.toggle("toggled")
  }

  setAssigned() {
    this.setState({
      assigned: true,
      delegated: false
    })
  }

  setDelegated() {
    this.setState({
      assigned: false,
      delegated: true
    })
  }

  getTableData() {
    return {
      columns: [
        {
          label: 'Route Delegated',
          field: 'route',
          sort: 'asc',
          width: 250
        },
        {
          label: 'Task Name',
          field: 'task',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Delegated To',
          field: 'delegated',
          sort: 'asc',
          width: 250
        },
        {
          label: 'Actions',
          field: 'actions',
          sort: 'asc',
          width: 100
        }
      ],
      rows: [
        {
          name: 'Tiger Nixon',
          task: 'System Architect',
          delegated: 'Edinburgh',
          actions: <Actions />
        },
        {
          name: 'Garrett Winters',
          task: 'Accountant',
          delegated: 'Tokyo',
          actions: <Actions />
        },
        {
          name: 'Ashton Cox',
          task: 'Junior Technical Author',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Cedric Kelly',
          task: 'Senior Javascript Developer',
          delegated: 'Edinburgh',
          actions: <Actions />
        },
        {
          name: 'Airi Satou',
          task: 'Accountant',
          delegated: 'Tokyo',
          actions: <Actions />
        },
        {
          name: 'Brielle Williamson',
          task: 'Integration Specialist',
          delegated: 'New York',
          actions: <Actions />
        },
        {
          name: 'Herrod Chandler',
          task: 'Sales Assistant',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Rhona Davidson',
          task: 'Integration Specialist',
          delegated: 'Tokyo',
          actions: <Actions />
        },
        {
          name: 'Colleen Hurst',
          task: 'Javascript Developer',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Sonya Frost',
          task: 'Software Engineer',
          delegated: 'Edinburgh',
          actions: <Actions />
        },
        {
          name: 'Jena Gaines',
          task: 'Office Manager',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Quinn Flynn',
          task: 'Support Lead',
          delegated: 'Edinburgh',
          actions: <Actions />
        },
        {
          name: 'Charde Marshall',
          task: 'Regional Director',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Haley Kennedy',
          task: 'Senior Marketing Designer',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Tatyana Fitzpatrick',
          task: 'Regional Director',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Michael Silva',
          task: 'Marketing Designer',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Paul Byrd',
          task: 'Chief Financial Officer (CFO)',
          delegated: 'New York',
          actions: <Actions />
        },
        {
          name: 'Gloria Little',
          task: 'Systems Administrator',
          delegated: 'New York',
          actions: <Actions />
        },
        {
          name: 'Bradley Greer',
          task: 'Software Engineer',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Dai Rios',
          task: 'Personnel Lead',
          delegated: 'Edinburgh',
          actions: <Actions />
        },
        {
          name: 'Jenette Caldwell',
          task: 'Development Lead',
          delegated: 'New York',
          actions: <Actions />
        },
        {
          name: 'Yuri Berry',
          task: 'Chief Marketing Officer (CMO)',
          delegated: 'New York',
          actions: <Actions />
        },
        {
          name: 'Caesar Vance',
          task: 'Pre-Sales Support',
          delegated: 'New York',
          actions: <Actions />
        },
        {
          name: 'Doris Wilder',
          task: 'Sales Assistant',
          delegated: 'Sidney',
          actions: <Actions />
        },
        {
          name: 'Angelica Ramos',
          task: 'Chief Executive Officer (CEO)',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Gavin Joyce',
          task: 'Developer',
          delegated: 'Edinburgh',
          actions: <Actions />
        },
        {
          name: 'Jennifer Chang',
          task: 'Regional Director',
          delegated: 'Singapore',
          actions: <Actions />
        },
        {
          name: 'Brenden Wagner',
          task: 'Software Engineer',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Fiona Green',
          task: 'Chief Operating Officer (COO)',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Shou Itou',
          task: 'Regional Marketing',
          delegated: 'Tokyo',
          actions: <Actions />
        },
        {
          name: 'Michelle House',
          task: 'Integration Specialist',
          delegated: 'Sidney',
          actions: <Actions />
        },
        {
          name: 'Suki Burks',
          task: 'Developer',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Prescott Bartlett',
          task: 'Technical Author',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Gavin Cortez',
          task: 'Team Leader',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Martena Mccray',
          task: 'Post-Sales support',
          delegated: 'Edinburgh',
          actions: <Actions />
        },
        {
          name: 'Unity Butler',
          task: 'Marketing Designer',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Howard Hatfield',
          task: 'Office Manager',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Hope Fuentes',
          task: 'Secretary',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Vivian Harrell',
          task: 'Financial Controller',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Timothy Mooney',
          task: 'Office Manager',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Jackson Bradshaw',
          task: 'Director',
          delegated: 'New York',
          actions: <Actions />
        },
        {
          name: 'Olivia Liang',
          task: 'Support Engineer',
          delegated: 'Singapore',
          actions: <Actions />
        },
        {
          name: 'Bruno Nash',
          task: 'Software Engineer',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Sakura Yamamoto',
          task: 'Support Engineer',
          delegated: 'Tokyo',
          actions: <Actions />
        },
        {
          name: 'Thor Walton',
          task: 'Developer',
          delegated: 'New York',
          actions: <Actions />
        },
        {
          name: 'Finn Camacho',
          task: 'Support Engineer',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Serge Baldwin',
          task: 'Data Coordinator',
          delegated: 'Singapore',
          actions: <Actions />
        },
        {
          name: 'Zenaida Frank',
          task: 'Software Engineer',
          delegated: 'New York',
          actions: <Actions />
        },
        {
          name: 'Zorita Serrano',
          task: 'Software Engineer',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Jennifer Acosta',
          task: 'Junior Javascript Developer',
          delegated: 'Edinburgh',
          actions: <Actions />
        },
        {
          name: 'Cara Stevens',
          task: 'Sales Assistant',
          delegated: 'New York',
          actions: <Actions />
        },
        {
          name: 'Hermione Butler',
          task: 'Regional Director',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Lael Greer',
          task: 'Systems Administrator',
          delegated: 'London',
          actions: <Actions />
        },
        {
          name: 'Jonas Alexander',
          task: 'Developer',
          delegated: 'San Francisco',
          actions: <Actions />
        },
        {
          name: 'Shad Decker',
          task: 'Regional Director',
          delegated: 'Edinburgh',
          actions: <Actions />
        },
        {
          name: 'Michael Bruce',
          task: 'Javascript Developer',
          delegated: 'Singapore',
          actions: <Actions />
        },
        {
          name: 'Donna Snider',
          task: 'Customer Support',
          delegated: 'New York',
          actions: <Actions />
        }
      ]
    }
  }

  render() {
    if(!this.state.loggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <div className="d-flex" id="wrapper">
      <div className="bg-dark border-right" id="sidebar-wrapper">
        <div className="sidebar-heading title-light">Cargill</div>
        <div className="list-group list-group-flush item-light">
          { items && items.map((item, key) =>
            <Link to={ item.url } key={ key } className="list-group-item list-group-item-action bg-dark item-light">{ item.title }</Link>
          )}
        </div>
      </div>
      <div id="page-content-wrapper">  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {
            this.state.loggedIn && 
            <button className="btn" id="menu-toggle" onClick={ this.click }>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
            </button>
          }
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            { this.state &&
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle cursor" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    { this.state.user.ds_name } &nbsp;
                    <FaUserAlt className="rounded-circle" />
                  </span>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/logout">Logout</a>
                  </div>
                </li>
              </ul>
            }
          </div>
        </nav>
        <div className="container-fluid">
          <br />
            <div className="text-center">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Workflow</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group mr-2">
                    <button className="btn btn-sm btn-primary" onClick={ this.setAssigned }>Assigned</button>
                    <button className="btn btn-sm btn-default" onClick={ this.setDelegated }>Delegated</button>
                  </div>
                </div>
              </div>
              { !this.state.assigned && !this.state.delegated && 
                <div className="loader">
                  <div className="spinner-border" role="status"></div>
                  <br />
                  <span className="">Connectivity issues in Cargill network</span>
                </div> 
              }
              { this.state.assigned && 
                <MDBCard>
                  <MDBCardHeader className="bg-default">
                    <MDBCardTitle>Assigned Tasks</MDBCardTitle>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <Table key='assigned' data={ this.getTableData() } />
                  </MDBCardBody>
                </MDBCard>
              }
              { this.state.delegated && 
                <MDBCard>
                  <MDBCardHeader className="bg-default">
                    <MDBCardTitle>Delegated Tasks</MDBCardTitle>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <Table key='delegated' data={ this.getTableData() } />
                  </MDBCardBody>
                </MDBCard>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About