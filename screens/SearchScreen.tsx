import React, { useState } from 'react';
import {
  View, StyleSheet, Keyboard, Text,
} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const userInputHandler = (inputText: string) => {
    setUserInput(inputText);
  };

  const confirmInputHandler = () => {
    setSearchValue(userInput);
    setUserInput('');
    Keyboard.dismiss();
  };


  return (
    <View style={styles.screen}>
      <SearchBar
        confirmInputHandler={confirmInputHandler}
        userInput={userInput}
        userInputHandler={userInputHandler}
      />
      <View>
        <Text>{searchValue}</Text>
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
