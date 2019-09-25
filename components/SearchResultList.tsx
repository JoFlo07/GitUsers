/* eslint-disable camelcase */
import React from 'react';
import { Icon } from 'react-native-elements';
import {
  View, StyleSheet, FlatList, Text,
} from 'react-native';


interface IUser {
  avatar_url: string,
  events_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  gravatar_id: string,
  html_url: string,
  id: number,
  login: string,
  node_id: string,
  organizations_url: string,
  received_events_url: string,
  repos_url: string,
  score: number,
  site_admin: boolean,
  starred_url: string,
  subscriptions_url: string,
  type: string,
  url: string,
}
interface SearchResultListProps {
  renderUsers: any,
  fetchedUsers: IUser[],
}

const SearchResultList: React.FC<SearchResultListProps> = ({
  fetchedUsers, renderUsers,
}) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.iconContainer}>
        <Icon
          name="logo-github"
          type="ionicon"
          size={40}
        />
        <Text>In Git We Trust!</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={fetchedUsers}
        renderItem={renderUsers}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  iconContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchResultList;
