import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
// import persistState from 'redux-localstorage';
import session from 'redux-persist/lib/storage/session';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import combineReducers from './Reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'demo',
  storage: session,
  blacklist: [
    'home',
  ],
  stateReconciler: autoMergeLevel1,
};

const pReducer = persistReducer(persistConfig, combineReducers);

export const store = createStore(pReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)));
/* , persistState(null, { key: 'faraday' }) */

export const persistor = persistStore(store);
