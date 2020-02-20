import home from '../../../store/Reducers/Home';
import { getInitialState } from './initialState';

import {
  GET_DATA_START,
  GET_DATA_FAIL,
  GET_DATA_SUCCESS,
  SUBMIT_START,
  SET_VALUE,
  SHOW_CARDS,
  DELETE_ITEM,
} from '../actions/Actions';

describe('Home Reducer', () => {
  it('Shoud return default state', () => {
    const newState = home(undefined, {});
    const state = { home: newState };
    expect(state).toEqual(getInitialState());
  });

  // it('Should reset home state.', () => {
  //   const newState = home(undefined, { type: RESET_STATE });
  //   const state = { home: newState };
  //   expect(state).toEqual(getInitialState());
  // });

  it('Should clean data list and fetch until request has a response', () => {
    const newState = home(getInitialState().home, { type: GET_DATA_START });
    const state = { home: newState };
    const expectedState = getInitialState();
    expectedState.home.isFetching = true;
    expectedState.home.dataList = [];

    expect(state).toEqual(expectedState);
  });

  it('Should stop fetching and inform an error', () => {
    const newState = home(getInitialState().home, { type: GET_DATA_FAIL, data: 'An error has occurred' });
    const state = { home: newState };

    const expectedState = getInitialState();
    expectedState.home.isFetching = false;
    expectedState.home.error = true;
    expectedState.home.errorMessage = 'An error has occurred';

    expect(state).toEqual(expectedState);
  });

  it('Should stop fetching and return data', () => {
    const newState = home(getInitialState().home, { type: GET_DATA_SUCCESS, data: [{}] });
    const state = { home: newState };

    const expectedState = getInitialState();
    expectedState.home.isFetching = false;
    expectedState.home.dataList = [{}];

    expect(state).toEqual(expectedState);
  });

  it('Should start the search event', () => {
    const newState = home(getInitialState().home, { type: SUBMIT_START });
    const state = { home: newState };

    const expectedState = getInitialState();
    expectedState.home.isFetching = true;
    expectedState.home.onSearch = true;

    expect(state).toEqual(expectedState);
  });

  it('Should set values in store', () => {
    const newState = home(getInitialState().home, { type: SET_VALUE, field: 'dataList', value: [{}] });
    const state = { home: newState };

    const expectedState = getInitialState();
    expectedState.home.dataList = [{}];

    expect(state).toEqual(expectedState);
  });

  it('Should set the card list', () => {
    const newState = home(getInitialState().home, { type: SHOW_CARDS, result: [{}] });

    const state = { home: newState };

    const expectedState = getInitialState();
    expectedState.home.isFetching = false;
    expectedState.home.cards = [{}];
    

    expect(state).toEqual(expectedState);
  });

  it('Should delete an item from the list.', () => {
    const newState = home(getInitialState().home, { type: DELETE_ITEM, index: '' });
    const state = { home: newState };

    const expectedState = getInitialState();
    expectedState.home.dataList = [];
    expectedState.home.cards = [];

    expect(state).toEqual(expectedState);
  });
});
