export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const SUBMIT_START = 'SUBMIT_START';
export const SET_VALUE = 'SET_VALUE';
export const SHOW_CARDS = 'SHOW_CARDS';
export const DELETE_ITEM = 'DELETE_ITEM';

let globalDispatch;
let globalState;

// Summary: Callback for error when traying to get the data
function getDataFailureCallback() {
  globalDispatch({ type: GET_DATA_FAIL, data: 'Failed to obtain data.' });
}

// Summary: Callback for succed when traying to get data list
function getDataSuccedCallback(data) {
  globalDispatch({
    type: GET_DATA_SUCCESS,
    data: data.results,
  });
}

// Summary: Getting the Data.
export function getData() {
  return (dispatch, getState) => {
    globalDispatch = dispatch;
    globalState = getState();

    dispatch({ type: GET_DATA_START });

    // fetch(process.env.API_URL)
    fetch('https://swapi.co/api/people/', { mode: 'no-cors' })
    .then(res => res.json())
    .then((data) => {
      getDataSuccedCallback(data)
    })
    .catch(getDataFailureCallback)
  };
}

export function setField(field, value) {
  return (dispatch) => {
    dispatch({ type: SET_VALUE, field, value });
  };
}

export function handleSubmit() {
  return (dispatch, getState) => {
    dispatch({ type: SUBMIT_START });
    globalState = getState();

    let result = globalState.home.dataList.filter(item => {
      return item.name.match(new RegExp(globalState.home.searchField, 'i'))
    })

    if (result) {
      // result = mapCards(result)
      dispatch({ type: SHOW_CARDS, result })
      document.getElementsByClassName('li').className += ' show'
    }
  }
}

export function deleteItem(index) {
  return (dispatch) => {
    dispatch({ type: DELETE_ITEM, index });
  }
}
