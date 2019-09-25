import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { usersReducer, followersReducer, reposReducer } from './reducers';

const rootReducer = combineReducers({
  users: usersReducer,
  followers: followersReducer,
  repos: reposReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
