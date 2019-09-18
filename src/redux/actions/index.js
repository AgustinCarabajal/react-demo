import axios from 'axios'

// Actions
const LIBRARY_LIST_BOOKS = 'LIBRARY_LIST_BOOKS'
const LIBRARY_SHOW_BOOK = 'LIBRARY_SHOW_BOOK'

axios.create({
  baseURL: `http://localhost:3000`
})

export function loadBooks() {
  return {
    type: LIBRARY_LIST_BOOKS,
    payload: axios.get(`${axios.baseURL}/api/posts`)
      .then(response => {
        console.log(response.data)
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
    payload: axios.get(`${axios.baseURL}/api/post`)
      .then(response => {
        console.log(response.data)
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

