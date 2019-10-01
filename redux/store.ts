import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  usersReducer, followersReducer, reposReducer, userDetailsReducer,
} from './reducers';

const rootReducer = combineReducers({
  users: usersReducer,
  followers: followersReducer,
  repos: reposReducer,
  details: userDetailsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
