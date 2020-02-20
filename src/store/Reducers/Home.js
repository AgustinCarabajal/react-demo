import {
  GET_DATA_START,
  GET_DATA_FAIL,
  GET_DATA_SUCCESS,
  SUBMIT_START,
  SET_VALUE,
  SHOW_CARDS,
  DELETE_ITEM,
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

    case DELETE_ITEM: {
      let dataList = state.dataList;
      let index = find(action.index, dataList)
      // Removing the person from the original list
      dataList.splice(index, 1)

      return {
        ...state,
        // Updating the current list
        cards: state.cards.filter(i => dataList.includes(i)),
        dataList,
      }
    }

    default:
      return state;
  }
}

function find(name, list) {
  let i = 0, index = null;

  for(let item of list) {
    if (item.name === name) index = i;
    i++;
  }
  return index
}

export default home;
