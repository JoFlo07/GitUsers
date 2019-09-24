import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

import COLORS from '../constants/Colors';


const MainNavigator = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerTitle: 'GitUsers',
    },
  },
  UserDetails: {
    screen: UserDetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? COLORS.accentColor : COLORS.primaryColor,
  },
});

export default createAppContainer(MainNavigator);
