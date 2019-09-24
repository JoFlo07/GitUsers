import React from 'react';
import {
  View, TextInput, Button, StyleSheet,
} from 'react-native';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Type Username..."
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="SEARCH"
          onPress={() => {}}
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
    width: '100%',
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
