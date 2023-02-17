import React from 'react';
import {Text, View} from 'react-native';
import {CardProps} from '../../types';
import {styles} from './styles';

const Card = ({title, description}: CardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.text}> {description} </Text>
    </View>
  );
};

export default Card;
