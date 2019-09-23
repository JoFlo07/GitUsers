import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';


const MainNavigator = createStackNavigator({
  Search: SearchScreen,
  UserDetails: UserDetailsScreen,
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? 'blue' : '',
    },
  },
});

export default createAppContainer(MainNavigator);
