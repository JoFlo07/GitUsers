import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';


interface CardProps {
  style?: any,
}

const List: React.FC<CardProps> = ({ children, style }) => {
  return (
    <View style={{ ...styles.list, ...style }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 500,
    paddingHorizontal: 10,
  },
});

export default List;
