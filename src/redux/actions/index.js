import axios from 'axios'

// Actions
const LOGIN_ACTION = 'LOGIN_ACTION'
const GET_ASSIGNATIONS_ACTION = 'GET_ASSIGNATIONS_ACTION'
const GET_DELEGATIONS_ACTION = 'GET_DELEGATIONS_ACTION'

export function login({ user, password }) {
  return {
    type: LOGIN_ACTION,
    payload: axios(
      {
        method:'post',
        url:'login',
        baseURL: process.env.REACT_APP_API_URL,
        data: {
          user: user,
          password: password
        }
      }).then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function get_assigned(id) {
  return {
    type: GET_ASSIGNATIONS_ACTION,
    payload: axios.get(`${process.env.REACT_APP_API_URL}/assignations?id=${id}`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function get_delegated(id) {
  return {
    type: GET_DELEGATIONS_ACTION,
    payload: axios.get(`${process.env.REACT_APP_API_URL}/delegations?id=${id}`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

