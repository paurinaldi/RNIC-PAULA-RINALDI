import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const Title = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.text}> Tasks </Text>
    </View>
  );
};

export default Title;
