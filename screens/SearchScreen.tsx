import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { ListItem } from 'react-native-elements';
import {
  View, StyleSheet, Keyboard, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchResultList from '../components/SearchResultList';
import { getUsers } from '../redux/ApiServices';

import COLORS from '../constants/Colors';


interface SearchScreenProps {
  navigation: any,
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();


  const userInputHandler = (inputText: string) => {
    setUserInput(inputText);
  };

  const confirmInputHandler = () => {
    if (userInput === '') {
      return;
    }
    setSpinner(true);
    // in case no users can be found stop spinner after 2s
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
    setUserInput('');
    Keyboard.dismiss();
    dispatch(getUsers(userInput));
  };

  // get users from store
  const fetchedUsers = useSelector((state) => state.users.users);

  const renderUsers = ({ item }) => {
    setSpinner(false);
    const handleClickHandler = () => {
      navigation.navigate('UserDetails', {
        name: item.login,
        avatar: item.avatar_url,
      });
    };
    return (
      <TouchableOpacity
        onPress={handleClickHandler}
      >
        <ListItem
          title={item.login}
          leftAvatar={{ source: { uri: item.avatar_url } }}
          bottomDivider
          chevron
        />
      </TouchableOpacity>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      <View style={styles.screen}>
        <Spinner
          visible={spinner}
          textContent="Loading..."
          textStyle={styles.spinnerTextStyle}
        />
        <SearchBar
          confirmInputHandler={confirmInputHandler}
          userInput={userInput}
          userInputHandler={userInputHandler}
        />
        <SearchResultList
          renderUsers={renderUsers}
          fetchedUsers={fetchedUsers}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: COLORS.accentColor,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  name: {
    fontWeight: '600',
    color: COLORS.primaryColor,
  },
  startContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});


export default SearchScreen;
