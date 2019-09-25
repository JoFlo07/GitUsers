import React, { useState } from 'react';
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
  const [searchContainerWidth, setSearchContainerWidth] = useState(Dimensions.get('window').width);
  // adapt with in landscape mode
  const updateLayout = () => {
    setSearchContainerWidth(Dimensions.get('window').width);
  };
  Dimensions.addEventListener('change', updateLayout);

  return (
    <View style={{ ...styles.searchContainer, width: searchContainerWidth }}>
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
  },
  textInputContainer: {
    width: Dimensions.get('window').width > 600 ? '50%' : '70%',
  },
  input: {
    fontSize: 20,
    marginVertical: 15,
    paddingVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    width: Dimensions.get('window').width > 600 ? '20%' : '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
