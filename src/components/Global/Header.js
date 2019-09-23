import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// import logo from './images/logo.svg'
import './css/Header.css'

class Header extends Component {
  constructor(props) {
    super(props)

    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.state = {
        user
      }
    }
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  render() {
    const { title, items } = this.props
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">{ title }</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            { items && items.map((item, key) =>
              <li className="nav-item active" key={ key }><Link className="nav-link" to={ item.url }>{ item.title }</Link></li>
            )}
          </ul>
          <span className="navbar-text">
            <div className="btn-group dropleft">
              <button type="button" className="btn btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Menu
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/profile">Profile</Link>
                <Link className="dropdown-item" to="/logout">Logout</Link>
              </div>
            </div>
          </span>
        </div>
      </nav>
    )
  }
}

export default Header;
