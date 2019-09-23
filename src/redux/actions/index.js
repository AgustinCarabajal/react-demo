import axios from 'axios'

// Actions
const LOGIN_ACTION = 'LOGIN_ACTION'
const LIBRARY_SHOW_BOOK = 'LIBRARY_SHOW_BOOK'

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

export function showBook() {
  return {
    type: LIBRARY_SHOW_BOOK,
    payload: axios.get(`${process.env.REACT_APP_API_URL}/api/post`)
      .then(response => {
        console.log(response.data)
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

