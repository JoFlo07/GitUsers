import React from 'react';
import { Provider } from 'react-redux';
import MainNavigator from './navigation/MainNavigator';
import store from './redux/store';

const App: React.FC = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);


export default App;
