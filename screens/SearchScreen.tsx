import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <SearchBar />
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
