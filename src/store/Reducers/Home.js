import {
  GET_DATA_START,
  GET_DATA_FAIL,
  GET_DATA_SUCCESS,
  SUBMIT_START,
  SET_VALUE,
  SHOW_CARDS,
} from '../../Screens/Home/actions/Actions'


const initialState = {
  onSearch: false,
  redirect: false,
  isFetching: false,
  dataList: [],
  cards: [],
  searchField: '',
};

function home(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_START: {
      return {
        ...state,
        isFetching: true,
        onSearch: true,
      };
    }
    
    case GET_DATA_START: {
      return {
        ...state,
        isFetching: true,
        dataList: [],
      };
    }

    case GET_DATA_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.data,
      };
    }

    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        dataList: action.data,
      };
    }

    case SET_VALUE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }

    case SHOW_CARDS: {
      return {
        ...state,
        isFetching: false,
        cards: action.result,
      };
    }

    default:
      return state;
  }
}

export default home;
