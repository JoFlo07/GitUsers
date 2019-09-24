import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

const UserDetailsScreen: React.FC = ({ navigation }) => {
  const username = navigation.getParam('name');
  const avatar = navigation.getParam('avatar');
  return (
    <View style={styles.screen}>
      <View style={styles.userDetailsContainer}>
        <Image
          source={{ uri: avatar }}
          style={{ height: 50, width: 50 }}
        />
        <Text>{username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    width: '80%',
  },
});

export default UserDetailsScreen;
