import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const TaskForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New task</Text>
      <TextInput style={styles.input} placeholder="Title" />
      <TextInput style={styles.input} placeholder="Description" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskForm;
