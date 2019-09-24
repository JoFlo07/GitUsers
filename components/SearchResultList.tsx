import React from 'react';
import {
  View, StyleSheet, FlatList,
} from 'react-native';

const SearchResultList: React.FC = () => {
  return (
    <View style={styles.listContainer}>
     <FlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});

export default SearchResultList;
