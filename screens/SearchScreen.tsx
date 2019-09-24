import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, StyleSheet, Keyboard, Text, FlatList,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import getUsers from '../redux/ApiServices';

const SearchScreen: React.FC = (props) => {
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();


  const userInputHandler = (inputText: string) => {
    setUserInput(inputText);
  };


  const confirmInputHandler = () => {
    setUserInput('');
    Keyboard.dismiss();
    dispatch(getUsers(userInput));
  };

  // get users from store
  const fetchedUsers = useSelector((state) => state.users.users);

  const renderUsers = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.login}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <SearchBar
        confirmInputHandler={confirmInputHandler}
        userInput={userInput}
        userInputHandler={userInputHandler}
      />
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={fetchedUsers}
          renderItem={renderUsers}
          style={{ width: '100%' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});


export default SearchScreen;
