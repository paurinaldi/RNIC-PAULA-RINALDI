import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CardProps} from '../../types';
import {styles} from './styles';

const Card = ({title, description, isCompleted}: CardProps) => {
  const [taskCompleted, setTaskCompleted] = useState(false);
  isCompleted = taskCompleted;
  return (
    <TouchableOpacity onPress={() => setTaskCompleted(!taskCompleted)}>
      <View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.text}> {description} </Text>
        {isCompleted && <Text style={styles.status}>✔</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
