import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
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
      nock.cleanAll();
    });

    // Test GetData without filters and no order
    it('Should fetch data successfully', async () => {
      nock('https://swapi.co')
        .persist()
        .get(/\/api\/people\/.*/)
        .reply(200, { data: [] });

      const store = testStore(getInitialState());
      store.dispatch(getData);

      const expected = {
        type: 'GET_DATA_SUCCESS',
        data: [],
        credentialCount: 0,
        rowsPerPage: 40,
        page: 1,
        sorting: undefined,
        sortingString: undefined,
      };

      expect(await getAction(store, 'GET_DATA_START')).toEqual({ type: 'GET_DATA_START' });
      expect(await getAction(store, 'GET_DATA_SUCCESS')).toEqual(expected);
    });

    it('Should fetch data and fail', async () => {
      nock('https://swapi.co')
        .persist()
        .get(/\/api\/people\/.*/)
        .reply(401);

      const store = testStore(getInitialState());
      store.dispatch(getData);

      expect(await getAction(store, 'GET_DATA_START')).toEqual({ type: 'GET_DATA_START' });
      expect(await getAction(store, 'GET_DATA_FAIL')).toEqual({ type: 'GET_DATA_FAIL', data: 'An error has occurred.' });
    });
  });
});
