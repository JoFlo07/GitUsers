import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

const UserDetailsScreen: React.FC = ({ navigation }) => {
  const username = navigation.getParam('name');
  const avatar = navigation.getParam('avatar');
  return (
    <View style={styles.screen}>
      <Image
        source={{ uri: avatar }}
        style={{ height: 50, width: 50 }}
      />
      <Text>{username}</Text>
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
