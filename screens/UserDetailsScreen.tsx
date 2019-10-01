import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import {
  View, Text, StyleSheet, FlatList, Dimensions, ScrollView,
} from 'react-native';
import { getUserRepos, getUserFollowers, getUserDetails } from '../redux/ApiServices';

import COLORS from '../constants/Colors';

const uuidv4 = require('uuid/v4');

interface UserDetailsScreenProps {
  navigation: any,
}

const UserDetailsScreen: React.FC<UserDetailsScreenProps> = ({ navigation }) => {
  const [containerWidth, setContainerWidth] = useState(Dimensions.get('window').width);
  const [spinner, setSpinner] = useState(true);
  const username = navigation.getParam('name');
  const avatar = navigation.getParam('avatar');
  const dispatch = useDispatch();

  // adapt with in landscape mode
  const updateLayout = () => {
    setContainerWidth(Dimensions.get('window').width);
  };
  Dimensions.addEventListener('change', updateLayout);


  useEffect(() => {
    dispatch(getUserFollowers(username));
    dispatch(getUserRepos(username));
    dispatch(getUserDetails(username));
  }, []);

  // get users from store
  const fetchedFollowers = useSelector((state) => state.followers.followers);
  const fetchedRepos = useSelector((state) => state.repos.repos);
  const fetchedUserDetails = useSelector((state) => state.details.userdetails);

  const renderFollowers = ({ item }) => (
    <View>
      <ListItem
        title={item.login}
        leftAvatar={{ source: { uri: item.avatar_url } }}
        bottomDivider
      />
    </View>
  );

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

  const icon = () => (
    <View style={styles.iconContainer}>
      <Icon
        name="ios-close"
        type="ionicon"
        size={30}
      />
    </View>
  );

  const renderDetails = () => (
    Object.keys(fetchedUserDetails).map((el) => (
      <View>
        <ListItem
          key={uuidv4()}
          title={el}
          titleStyle={{ fontSize: 14, fontWeight: '600' }}
          subtitle={String(fetchedUserDetails[el])}
          subtitleStyle={{ fontSize: 12 }}
          bottomDivider
        />
      </View>
    ))
  );

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Spinner
        visible={spinner}
        textContent="Loading..."
        textStyle={styles.spinnerTextStyle}
      />
      <View style={{ ...styles.userHeader, width: containerWidth }}>
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
      <Text style={styles.title}>DETAILS</Text>
      <ScrollView
        alwaysBounceHorizontal
        horizontal
        style={{ width: '100%' }}
      >
        {renderDetails()}
      </ScrollView>
      <Text style={styles.title}>FOLLOWERS</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={fetchedFollowers}
        renderItem={renderFollowers}
        ListEmptyComponent={icon}
        style={styles.followersContainer}
      />
      <Text style={styles.title}>REPOSITORIES</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={fetchedRepos}
        renderItem={renderRepos}
        style={styles.repoContainer}
        ListEmptyComponent={icon}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.accentColor,
  },
  userHeader: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
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
  iconContainer: {
    paddingTop: '25%',
  },
  repoContainer: {
    width: '100%',
  },
  followersContainer: {
    width: '100%',
  },
  userDetailsContainer: {
    width: '100%',
  },
  detailsItem: {
    paddingTop: 10,
  },
});

export default UserDetailsScreen;
