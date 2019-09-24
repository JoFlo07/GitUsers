import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  View, StyleSheet, Keyboard, Text, FlatList, Image, TouchableOpacity,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import { getUsers } from '../redux/ApiServices';

import COLORS from '../constants/Colors';

interface SearchScreenProps {
  navigation: any,
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();


  const userInputHandler = (inputText: string) => {
    setUserInput(inputText);
  };

  const confirmInputHandler = () => {
    setSpinner(true);
    setUserInput('');
    Keyboard.dismiss();
    dispatch(getUsers(userInput));
  };

  // get users from store
  const fetchedUsers = useSelector((state) => state.users.users);


  const renderUsers = (itemData) => {
    setSpinner(false);
    const handleClickHandler = () => {
      navigation.navigate('UserDetails', {
        name: itemData.item.login,
        avatar: itemData.item.avatar_url,
      });
    };
    return (
      <TouchableOpacity
        onPress={handleClickHandler}
      >
        <View style={styles.card}>
          <Image
            source={{ uri: itemData.item.avatar_url }}
            style={{ height: '100%', width: '50%' }}
          />
          <View>
            <Text style={styles.name}>{itemData.item.login.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <Spinner
        visible={spinner}
        textContent="Loading..."
        textStyle={styles.spinnerTextStyle}
      />
      <SearchBar
        confirmInputHandler={confirmInputHandler}
        userInput={userInput}
        userInputHandler={userInputHandler}
      />
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: COLORS.accentColor,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: COLORS.accentColor,
    padding: 20,
    marginVertical: 10,
    height: 150,
    width: '100%',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  name: {
    fontWeight: '600',
    color: COLORS.primaryColor,

  },
});


export default SearchScreen;
