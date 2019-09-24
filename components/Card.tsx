import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';

import COLORS from '../constants/Colors';

interface CardProps {
  style?: any,
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      {children}
    </View>

  );
};

const styles = StyleSheet.create({
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
});

export default Card;
