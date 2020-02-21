import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  getData,
} from '../actions/Actions';
import { getInitialState } from './initialState';
import { getAction } from '../../../Common/Functions/Test';

const testStore = (initialState, extraField) => {
  const store = configureMockStore([thunk]);
  const state = initialState;

  if (extraField) { state[extraField.field] = extraField.value; }

  return store(initialState);
};

describe('Home functionalities', () => {
  describe('Execute home GETs', () => {
    
    afterEach(() => {
      global.fetch.mockClear();
    });

    // Test GetData without filters and no order
    it('Should fetch data successfully', async () => {
      const mockFetchPromise = Promise.resolve({
        json: () => { return {results: []} },
      });

      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

      const store = testStore(getInitialState());
      store.dispatch(getData());

      const expected = {
        type: 'GET_DATA_SUCCESS',
        data: []
      };

      expect(await getAction(store, 'GET_DATA_START')).toEqual({ type: 'GET_DATA_START' });
      expect(await getAction(store, 'GET_DATA_SUCCESS')).toEqual(expected);
    });

    it('Should fetch data and fail', async () => {

      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
      });

      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

      const store = testStore(getInitialState());
      store.dispatch(getData());

      expect(await getAction(store, 'GET_DATA_START')).toEqual({ type: 'GET_DATA_START' });
      expect(await getAction(store, 'GET_DATA_FAIL')).toEqual({ type: 'GET_DATA_FAIL', data: 'Failed to obtain data.' });
    });
  });
});
