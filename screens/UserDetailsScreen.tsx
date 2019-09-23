import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetailsScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>UserDetailsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserDetailsScreen;
