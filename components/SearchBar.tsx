import React from 'react';
import {
  View, TextInput, Button, StyleSheet, Dimensions,
} from 'react-native';

import COLORS from '../constants/Colors';

interface SearchBarProps {
   confirmInputHandler: () => void;
   userInput: string,
  userInputHandler: (inputText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (
  { confirmInputHandler, userInput, userInputHandler },
) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Type Username..."
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={20}
          onChangeText={userInputHandler}
          value={userInput}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={COLORS.primaryColor}
          title="SEARCH"
          onPress={confirmInputHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  textInputContainer: {
    width: '70%',
  },
  input: {
    fontSize: 20,
    marginVertical: 15,
    paddingVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
