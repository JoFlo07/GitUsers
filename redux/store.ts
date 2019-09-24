import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
