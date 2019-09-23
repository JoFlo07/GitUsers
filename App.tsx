import React from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';


const App: React.FC = () => (
  <View style={styles.screen}>
    <Text>Hi</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
