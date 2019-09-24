import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  View, Text, StyleSheet, Image, FlatList,
} from 'react-native';
import { getUserRepos, getUserFollowers } from '../redux/ApiServices';

interface UserDetailsScreenProps {
  navigation: any,
}

const UserDetailsScreen: React.FC<UserDetailsScreenProps> = ({ navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const username = navigation.getParam('name');
  const avatar = navigation.getParam('avatar');
  const dispatch = useDispatch();

  useEffect(() => {
    setSpinner(true);
    dispatch(getUserFollowers(username));
    dispatch(getUserRepos(username));
  }, []);

  // get users from store
  const fetchedFollowers = useSelector((state) => state.followers.followers);
  const fetchedRepos = useSelector((state) => state.repos.repos);

  const renderFollowers = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.login}</Text>
      </View>
    );
  };

  const renderRepos = (itemData) => {
    setSpinner(false);
    return (
      <View>
        <Text>{itemData.item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Spinner
        visible={spinner}
        textContent="Loading..."
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.userDetailsContainer}>
        <Image
          source={{ uri: avatar }}
          style={{ height: 50, width: 50 }}
        />
        <Text>{username}</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={fetchedFollowers}
        renderItem={renderFollowers}
        style={{ width: '100%' }}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={fetchedRepos}
        renderItem={renderRepos}
        style={{ width: '100%' }}
      />
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
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default UserDetailsScreen;
