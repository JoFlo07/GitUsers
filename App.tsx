import React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { useScreens } from 'react-native-screens';
import MainNavigator from './navigation/MainNavigator';
import store from './redux/store';

useScreens();

const App: React.FC = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);


export default App;
