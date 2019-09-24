import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './redux/reducer';
import MainNavigator from './navigation/MainNavigator';

const store = createStore(usersReducer, applyMiddleware(thunk));


const App: React.FC = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);


export default App;
