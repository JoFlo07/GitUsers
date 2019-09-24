import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { ListItem, Avatar } from 'react-native-elements';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';
import { getUserRepos, getUserFollowers } from '../redux/ApiServices';
import COLORS from '../constants/Colors';

interface UserDetailsScreenProps {
  navigation: any,
}

const UserDetailsScreen: React.FC<UserDetailsScreenProps> = ({ navigation }) => {
  const [spinner, setSpinner] = useState(true);
  const username = navigation.getParam('name');
  const avatar = navigation.getParam('avatar');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFollowers(username));
    dispatch(getUserRepos(username));
  }, []);

  // get users from store
  const fetchedFollowers = useSelector((state) => state.followers.followers);
  const fetchedRepos = useSelector((state) => state.repos.repos);

  const renderFollowers = ({ item }) => {
    return (
      <View>
        <ListItem
          title={item.login}
          leftAvatar={{ source: { uri: item.avatar_url } }}
          bottomDivider
        />
      </View>
    );
  };

  const renderRepos = ({ item }) => {
    setSpinner(false);
    return (
      <View>
        <ListItem
          title={item.name}
          bottomDivider
        />
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
        <Avatar
          rounded
          source={{
            uri:
              avatar,
          }}
          size="medium"
        />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Text style={styles.title}>FOLLOWERS</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={fetchedFollowers}
        renderItem={renderFollowers}
        style={{ width: '100%', height: 200 }}
      />
      <Text style={styles.title}>REPOSITORIES</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={fetchedRepos}
        renderItem={renderRepos}
        style={{ width: '100%', height: 200 }}
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
    backgroundColor: COLORS.accentColor,
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  title: {
    color: COLORS.primaryColor,
    marginVertical: 20,
    fontWeight: '600',
    fontSize: 20,
  },
  username: {
    fontWeight: '600',
    paddingLeft: 20,
    fontSize: 20,
  },
  repoContainer: {
    marginTop: 40,
  },
});

export default UserDetailsScreen;
