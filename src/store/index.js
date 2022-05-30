import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers';
import { loadState, saveState } from '../utils';

const persistedState = loadState();

export const store = createStore(
  reducer,
  persistedState,
  compose(
    applyMiddleware(
      thunk,
    ),
  ),
);

store.subscribe(() => {
  saveState(store.getState().favouriteCats);
});
