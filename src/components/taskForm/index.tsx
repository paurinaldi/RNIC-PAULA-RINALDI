import React, {useRef, useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, Keyboard} from 'react-native';
import {TaskFormProps} from '../../types';
import {styles} from './styles';

const TaskForm = ({data, addData}: TaskFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const onSubmit = () => {
    if (description !== '' && title !== '') {
      addData({
        id: data.length + 1,
        title: title,
        description: description,
        isCompleted: false,
      });
      Keyboard.dismiss();
      setTitle('');
      setDescription('');
    }
  };

  const descriptionRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New task</Text>
      <TextInput
        value={title}
        onChangeText={value => setTitle(value)}
        style={styles.input}
        placeholder="Title"
        returnKeyType="next"
        onSubmitEditing={() => {
          descriptionRef.current?.focus();
        }}
        blurOnSubmit={false}
      />
      <TextInput
        value={description}
        onChangeText={value => setDescription(value)}
        style={styles.input}
        placeholder="Description"
        ref={descriptionRef}
      />
      <TouchableOpacity onPress={() => onSubmit()} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskForm;
