const initialState = {
  books: [],
  book: []
}

export default function libraryReducer(state = initialState, action) {
  switch(action.type) {
    case 'LIBRARY_LIST_BOOK_SUCCESS': {
      const { payload: { response = [] } } = action

      return Object.assign({}, state, {
        books: response
      })
    }

    case 'LIBRARY_SHOW_BOOK_SUCCESS': {
      const { payload: { response = [] } } = action

      return Object.assign({}, state, {
        book: response
      })
    }

    default:
      return state
  }
}